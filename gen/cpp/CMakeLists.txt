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
add_library(${PROJECT_NAME} STATIC
    ${PROTO_GENERATED_FILES}
    ${GRPC_GENERATED_FILES}
)

# Include directories for the library
target_include_directories(${PROJECT_NAME}
    PUBLIC $<BUILD_INTERFACE:${PROTO_BINARY_DIR}>
           $<INSTALL_INTERFACE:${CMAKE_INSTALL_INCLUDEDIR}>
)

# Link libraries
target_link_libraries(${PROJECT_NAME}
    protobuf::libprotobuf
    gRPC::grpc gRPC::grpc++
)



# Install the library and headers
install(TARGETS ${PROJECT_NAME}
    EXPORT ${PROJECT_NAME}Targets
    ARCHIVE DESTINATION ${CMAKE_INSTALL_LIBDIR}
    LIBRARY DESTINATION ${CMAKE_INSTALL_LIBDIR}
    RUNTIME DESTINATION ${CMAKE_INSTALL_BINDIR}
    INCLUDES DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}/${PROJECT_NAME}
)

# Install header files
install(DIRECTORY ${PROTO_BINARY_DIR}/lproto/
    DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}/lproto
    FILES_MATCHING PATTERN "*.h")

# Export the package for use with other CMake projects
export(EXPORT ${PROJECT_NAME}Targets
  FILE "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}Targets.cmake"
  NAMESPACE ${PROJECT_NAME}::
)



# Create a Config file for find_package
configure_package_config_file(cmake/lprotoConfig.cmake.in
    "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}Config.cmake"
    INSTALL_DESTINATION ${CMAKE_INSTALL_DATADIR}/${PROJECT_NAME}
    NO_SET_AND_CHECK_MACRO
)

install(EXPORT ${PROJECT_NAME}Targets
    FILE ${PROJECT_NAME}Targets.cmake
    NAMESPACE ${PROJECT_NAME}::
    DESTINATION ${CMAKE_INSTALL_DATADIR}/${PROJECT_NAME}
)

install(FILES
    "${CMAKE_CURRENT_BINARY_DIR}/${PROJECT_NAME}Config.cmake"
    DESTINATION ${CMAKE_INSTALL_DATADIR}/${PROJECT_NAME}
)
