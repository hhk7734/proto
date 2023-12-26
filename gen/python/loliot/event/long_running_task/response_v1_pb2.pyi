from loliot.event import error_v1_pb2 as _error_v1_pb2
from google.protobuf.internal import containers as _containers
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Iterable as _Iterable, Mapping as _Mapping, Optional as _Optional, Union as _Union

DESCRIPTOR: _descriptor.FileDescriptor

class ResponseV1(_message.Message):
    __slots__ = ["id", "errors"]
    ID_FIELD_NUMBER: _ClassVar[int]
    ERRORS_FIELD_NUMBER: _ClassVar[int]
    id: str
    errors: _containers.RepeatedCompositeFieldContainer[_error_v1_pb2.ErrorV1]
    def __init__(self, id: _Optional[str] = ..., errors: _Optional[_Iterable[_Union[_error_v1_pb2.ErrorV1, _Mapping]]] = ...) -> None: ...
