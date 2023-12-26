from importlib.metadata import PackageNotFoundError, version

try:
    __version__ = version("lproto")
except PackageNotFoundError:
    # package is not installed
    pass