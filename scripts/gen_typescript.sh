#!/bin/sh

realpath2() (
    OURPWD=$PWD
    cd "$(dirname "$1")"
    LINK=$(readlink "$(basename "$1")")
    while [ "$LINK" ]; do
        cd "$(dirname "$LINK")"
        LINK=$(readlink "$(basename "$1")")
    done
    REALPATH="$PWD/$(basename "$1")"
    cd "$OURPWD"
    echo "$REALPATH"
)

BASEDIR=$(dirname $(realpath2 "$0"))

rm -rf $BASEDIR/../gen/typescript/{src,dist}
mkdir -p $BASEDIR/../gen/typescript/src

fd '.*\.proto$' $BASEDIR/.. -x protoc \
    --plugin="$BASEDIR/../gen/typescript/node_modules/.bin/protoc-gen-ts_proto" \
    --proto_path=$BASEDIR/.. \
    --ts_proto_out=$BASEDIR/../gen/typescript/src \
    --ts_proto_opt=esModuleInterop=true \
    {}

# pushd $BASEDIR/../gen/typescript
# npm run build
# popd
