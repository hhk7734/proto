.PHONY: gen
gen: install_protoc_gen_go
	sh ./script/gen_go.sh

.PHONY: install_protoc_gen_go
install_protoc_gen_go:
	go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.32.0 \
	&& [ -n "$$(command -v asdf 2>/dev/null)" ] && asdf reshim golang || true

.PHONY: remove_local
remove_local:
	git remote update --prune
	git switch --detach origin/main
	@git for-each-ref --format '%(refname:short)' refs/heads | xargs -r -t git branch -D
