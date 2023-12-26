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

fd '.*_pb2\.pyi?$' $BASEDIR/../gen/python/lproto -x rm {}

fd '.*\.proto$' $BASEDIR/.. -x protoc \
    --proto_path=$BASEDIR/.. \
    --python_out=$BASEDIR/../gen/python \
    --pyi_out=$BASEDIR/../gen/python \
    {}
