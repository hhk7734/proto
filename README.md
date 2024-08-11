# proto

## Development

```shell
make help
```

```shell
Usage:
  make <target>

General
  help             Display this help.

Development
  container        Run target in a container. Use target=<target> to specify the target.
  generate         Generate code for All languages from proto files.
  generate-go      Generate code for Go from proto files.
  generate-python  Generate code for Python from proto files.
  generate-typescript  Generate code for TypeScript from proto files.
  remove-local-branch  Update remote branches and remove local branches.

Release
  tag              Create a new tag. Use version=<version> to specify the version.
```

## Install

### go

```shell
go get github.com/hhk7734/proto/gen/go@<version>
```

### python

```shell
poetry add git+ssh://github.com/hhk7734/proto.git@<version>#subdirectory=gen/python
```
