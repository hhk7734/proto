cmake_minimum_required(VERSION 3.28)

project(lproto
    DESCRIPTION "Generated library for lol-iot Protobuf and gRPC"
    HOMEPAGE_URL "https://github.com/hhk7734/proto"
    LANGUAGES CXX
)

include(CMakePackageConfigHelpers)
include(GNUInstallDirs)



# Find required packages
find_package(Protobuf CONFIG REQUIRED)
find_package(gRPC CONFIG REQUIRED)

# Generate the Protobuf and gRPC sources
set(PROTO_BINARY_DIR "${CMAKE_CURRENT_BINARY_DIR}/generated")
set(PROTO_IMPORT_DIRS "${CMAKE_CURRENT_LIST_DIR}/../..")
file(GLOB_RECURSE PROTO_FILES "${PROTO_IMPORT_DIRS}/lproto/**/*.proto")

protobuf_generate(
    PROTOS ${PROTO_FILES}
    IMPORT_DIRS ${PROTO_IMPORT_DIRS}
    PROTOC_OUT_DIR "${PROTO_BINARY_DIR}"
    OUT_VAR PROTO_GENERATED_FILES
)

protobuf_generate(
    PROTOS ${PROTO_FILES}
    LANGUAGE grpc
    GENERATE_EXTENSIONS .grpc.pb.h .grpc.pb.cc
    PLUGIN "protoc-gen-grpc=\$<TARGET_FILE:gRPC::grpc_cpp_plugin>"
    IMPORT_DIRS ${PROTO_IMPORT_DIRS}
    PROTOC_OUT_DIR "${PROTO_BINARY_DIR}"
    OUT_VAR GRPC_GENERATED_FILES
)

# Create a library from the generated sources
add_library(lproto STATIC
    ${PROTO_GENERATED_FILES}
    ${GRPC_GENERATED_FILES}
)

# Include directories for the library
target_include_directories(lproto
    PUBLIC $<BUILD_INTERFACE:${PROTO_BINARY_DIR}>
           $<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>
)

# Link libraries
target_link_libraries(lproto
    protobuf::libprotobuf
    gRPC::grpc gRPC::grpc++
)



# Install the library and headers
install(TARGETS lproto
    EXPORT lprotoTargets
    ARCHIVE DESTINATION ${CMAKE_INSTALL_LIBDIR}
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
    INCLUDES DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}/lproto
)

# Install header files
install(DIRECTORY ${PROTO_BINARY_DIR}/lproto/
    DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}/lproto
    FILES_MATCHING PATTERN "*.h")

# Export the package for use with other CMake projects
export(EXPORT lprotoTargets
  FILE "${CMAKE_CURRENT_BINARY_DIR}/lprotoTargets.cmake"
  NAMESPACE lproto::
)



# Create a Config file for find_package
configure_package_config_file(cmake/lprotoConfig.cmake.in
    "${CMAKE_CURRENT_BINARY_DIR}/lprotoConfig.cmake"
    INSTALL_DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/lproto
    NO_SET_AND_CHECK_MACRO
)

install(EXPORT lprotoTargets
    FILE lprotoTargets.cmake
    NAMESPACE lproto::
    DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/lproto
)

install(FILES
    "${CMAKE_CURRENT_BINARY_DIR}/lprotoConfig.cmake"
    DESTINATION ${CMAKE_INSTALL_LIBDIR}/cmake/lproto
)
