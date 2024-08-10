cmake_minimum_required(VERSION 3.28)

project(lproto
    DESCRIPTION "Generated Protobuf and gRPC library"
    HOMEPAGE_URL "https://github.com/hhk7734/proto"
    LANGUAGES CXX
)

include(CMakePackageConfigHelpers)
include(GNUInstallDirs)



# Find required packages
find_package(Protobuf CONFIG REQUIRED)
find_package(gRPC CONFIG REQUIRED)

# Create a library from the generated sources
file(GLOB_RECURSE GENERATED_SRC
    "lproto/**/*.cc"
)
add_library(lproto STATIC ${GENERATED_SRC})

# Include directories for the library
target_include_directories(lproto
    PUBLIC $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}>
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
install(DIRECTORY lproto/ DESTINATION ${CMAKE_INSTALL_INCLUDEDIR}/lproto
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
