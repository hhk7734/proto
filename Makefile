PROTOC_IMAGE ?= protoc
CONTAINER_TOOL ?= docker

.PHONY: all
all: generate

##@ General

# The help target prints out all targets with their descriptions organized
# beneath their categories. The categories are represented by '##@' and the
# target descriptions by '##'. The awk commands is responsible for reading the
# entire set of makefiles included in this invocation, looking for lines of the
# file as xyz: ## something, and then pretty-format the target and help. Then,
# if there's a line with ##@ something, that gets pretty-printed as a category.
# More info on the usage of ANSI control characters for terminal formatting:
# https://en.wikipedia.org/wiki/ANSI_escape_code#SGR_parameters
# More info on the awk command:
# http://linuxcommand.org/lc3_adv_awk.php

.PHONY: help
help: ## Display this help.
	@awk '\
		BEGIN { \
			FS = ":.*##"; \
			printf "\nUsage:\n  make \033[36m<target>\033[0m\n" \
		} \
		/^[a-zA-Z_0-9-]+:.*?##/ { \
			printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 \
		} \
		/^##@/ { \
			printf "\n\033[1m%s\033[0m\n", substr($$0, 5) \
		} \
	' $(MAKEFILE_LIST)


##@ Development

.PHONY: container
container: ## Run target in a container. Use target=<target> to specify the target.
	$(CONTAINER_TOOL) run -it --rm -v $(PWD):/workdir -w /workdir $(PROTOC_IMAGE) make $(target)

.PHONY: generate
generate: generate-go generate-python generate-typescript ## Generate code for All languages from proto files.

.PHONY: generate-go
generate-go: ## Generate code for Go from proto files.
	rm -rf gen/go/lproto
	find lproto -name '*.proto' -exec \
	protoc \
		--proto_path=. \
		--go_out=gen/go \
		--go_opt=paths=source_relative \
		{} \;

.PHONY: generate-python
generate-python: ## Generate code for Python from proto files.
	find gen/python -regex '.*_pb2\.pyi?$$' -delete
	find lproto -name '*.proto' -exec \
	protoc \
		--proto_path=. \
		--python_out=gen/python \
		--pyi_out=gen/python \
		{} \;

.PHONY: generate-typescript
generate-typescript: ## Generate code for TypeScript from proto files.
	rm -rf gen/typescript/src
	mkdir -p gen/typescript/src
	find lproto -name '*.proto' -exec \
	protoc \
		--proto_path=. \
		--plugin="$(shell which protoc-gen-ts_proto)" \
		--ts_proto_out=gen/typescript/src \
		--ts_proto_opt=esModuleInterop=true \
		{} \;

.PHONY: remove-local-branch
remove-local-branch: ## Update remote branches and remove local branches.
	git remote update --prune
	git switch --detach origin/main
	@git for-each-ref --format '%(refname:short)' refs/heads | xargs -r -t git branch -D


##@ Release

.PHONY: tag
tag: ## Create a new tag. Use version=<version> to specify the version.
	@if [ -z "${version}" ]; then \
		echo "version is empty"; \
		exit 1; \
	fi
	@echo v$(subst v,,$(version))
	git tag v$(subst v,,$(version))
	git tag gen/go/v$(subst v,,$(version))

	git push origin --tags
