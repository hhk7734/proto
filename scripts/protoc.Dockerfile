# ubuntu 22.04 is based on bookworm
ARG DEBIAN_CODENAME=bookworm
ARG GO_VERSION=1.21

FROM golang:${GO_VERSION}-${DEBIAN_CODENAME}

ENV DEBIAN_FRONTEND noninteractive

WORKDIR /app

# https://github.com/lifting-bits/cxx-common/blob/master/docker/Dockerfile.ubuntu.vcpkg
RUN apt-get update && apt-get install --yes apt-utils && apt-get upgrade --yes \
    && apt-get install --yes --no-install-recommends \
    build-essential \
    autoconf \
    libtool \
    pkg-config \
    cmake \
    ninja-build \
    git \
    ca-certificates \
    \
    && apt-get clean --yes \
    && rm -rf /var/lib/apt/lists/*


# https://github.com/grpc/grpc/blob/v1.60.2/build_handwritten.yaml
# protobuf_version: 3.25.0
ARG GRPC_VERSION=1.60.2

# protoc, grpc_cpp_plugin, grpc_python_plugin, ...
RUN git clone --recurse-submodules -b v${GRPC_VERSION} --depth 1 --shallow-submodules https://github.com/grpc/grpc \
    && cd grpc \
    && cmake \
    -G Ninja \
    -S . \
    -B cmake/build \
    -DgRPC_INSTALL=ON \
    -DgRPC_BUILD_TESTS=OFF \
    && cmake --build cmake/build \
    && cmake --install cmake/build \
    && cd .. \
    && rm -rf grpc


# https://nodejs.org/en/download/prebuilt-binaries
ARG NODE_VERSION=18.20.4

RUN curl https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}-linux-x64.tar.xz \
    | tar -xJ -C /usr/local --strip-components=1 \
    && npm install -g ts-proto


# https://github.com/protocolbuffers/protobuf-go
ARG GO_GEN_PROTOBUF_VERSION=1.34.1
# https://github.com/grpc/grpc-go
ARG GO_GEN_GRPC_VERSION=1.5.1

RUN go install google.golang.org/protobuf/cmd/protoc-gen-go@v${GO_GEN_PROTOBUF_VERSION} \
    && go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v${GO_GEN_GRPC_VERSION}
