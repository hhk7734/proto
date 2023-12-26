.PHONY: gen
gen: install_protoc_gen_go
	sh ./scripts/gen_go.sh
	sh ./scripts/gen_python.sh
	sh ./scripts/gen_typescript.sh

.PHONY: install_protoc_gen_go
install_protoc_gen_go:
	go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.32.0 \
	&& [ -n "$$(command -v asdf 2>/dev/null)" ] && asdf reshim golang || true

.PHONY: remove_local
remove_local:
	git remote update --prune
	git switch --detach origin/main
	@git for-each-ref --format '%(refname:short)' refs/heads | xargs -r -t git branch -D

.PHONY: tag
tag:
	@if [ -z "${VERSION}" ]; then \
		echo "VERSION is empty"; \
		exit 1; \
	fi
	@echo v$(subst v,,$(VERSION))
	git tag v$(subst v,,$(VERSION))
	git tag gen/go/v$(subst v,,$(VERSION))

	git push origin --tags