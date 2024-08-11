cmake_minimum_required(VERSION 3.28)

set(lproto_VERSION 0.3.0)

project(
    lproto
    VERSION ${lproto_VERSION}
    DESCRIPTION "Generated library for lol-iot Protobuf and gRPC"
    HOMEPAGE_URL "https://github.com/hhk7734/proto"
    LANGUAGES CXX
)

include(CMakePackageConfigHelpers)
include(GNUInstallDirs)

string(TOLOWER ${PROJECT_NAME} PROJECT_NAME_LOWER)

# Find required packages
find_package(Protobuf CONFIG REQUIRED)
find_package(gRPC CONFIG REQUIRED)

# Generate the Protobuf and gRPC sources
set(PROTO_BINARY_DIR "${CMAKE_CURRENT_BINARY_DIR}/generated")
set(PROTO_IMPORT_DIRS "${CMAKE_CURRENT_LIST_DIR}/../..")
file(GLOB_RECURSE PROTO_FILES "${PROTO_IMPORT_DIRS}/${PROJECT_NAME_LOWER}/**/*.proto")

protobuf_generate(
    PROTOS ${PROTO_FILES}
    IMPORT_DIRS ${PROTO_IMPORT_DIRS}
    PROTOC_OUT_DIR ${PROTO_BINARY_DIR}
    OUT_VAR PROTO_GENERATED_FILES
)

protobuf_generate(
    PROTOS ${PROTO_FILES}
    LANGUAGE grpc
    GENERATE_EXTENSIONS .grpc.pb.h .grpc.pb.cc
    PLUGIN "protoc-gen-grpc=\$<TARGET_FILE:gRPC::grpc_cpp_plugin>"
    IMPORT_DIRS ${PROTO_IMPORT_DIRS}
    PROTOC_OUT_DIR ${PROTO_BINARY_DIR}
    OUT_VAR GRPC_GENERATED_FILES
)

# Create a library from the generated sources
add_library(
    ${PROJECT_NAME_LOWER}
    STATIC
    ${PROTO_GENERATED_FILES}
    ${GRPC_GENERATED_FILES}
)

# Include directories for the library
target_include_directories(
    ${PROJECT_NAME_LOWER}
    PUBLIC
        $<BUILD_INTERFACE:${PROTO_BINARY_DIR}>
        $<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>
)

# Link libraries
target_link_libraries(
    ${PROJECT_NAME_LOWER}
    PRIVATE
        protobuf::libprotobuf
        gRPC::grpc++
)

# Install the library and headers
install(
    TARGETS ${PROJECT_NAME_LOWER}
    EXPORT ${PROJECT_NAME}Targets
)

install(
    DIRECTORY ${PROTO_BINARY_DIR}/${PROJECT_NAME_LOWER}/
    DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}/${PROJECT_NAME_LOWER}
    FILES_MATCHING PATTERN "*.h"
)

install(
    EXPORT ${PROJECT_NAME}Targets
    NAMESPACE ${PROJECT_NAME}::
    DESTINATION ${CMAKE_INSTALL_DATADIR}/${PROJECT_NAME_LOWER}
)

# Install the CMake files for find_package
configure_package_config_file(
    cmake/${PROJECT_NAME}Config.cmake.in
    ${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}Config.cmake
    INSTALL_DESTINATION ${CMAKE_INSTALL_DATADIR}/${PROJECT_NAME_LOWER}
    NO_SET_AND_CHECK_MACRO
)

write_basic_package_version_file(
    ${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}ConfigVersion.cmake
    VERSION ${lproto_VERSION}
    COMPATIBILITY SameMajorVersion
)

install(
    FILES
        ${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}Config.cmake
        ${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}ConfigVersion.cmake
    DESTINATION
        ${CMAKE_INSTALL_DATADIR}/${PROJECT_NAME_LOWER}
)
