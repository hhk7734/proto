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

rm -rf $BASEDIR/../gen/go/lproto

fd '.*\.proto$' $BASEDIR/.. -x protoc \
    --proto_path=$BASEDIR/.. \
    --go_out=$BASEDIR/../gen/go \
    --go_opt=paths=source_relative \
    {}
