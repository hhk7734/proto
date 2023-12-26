from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from typing import ClassVar as _ClassVar, Optional as _Optional

DESCRIPTOR: _descriptor.FileDescriptor

class StatusV1(_message.Message):
    __slots__ = ["id", "total", "processed"]
    ID_FIELD_NUMBER: _ClassVar[int]
    TOTAL_FIELD_NUMBER: _ClassVar[int]
    PROCESSED_FIELD_NUMBER: _ClassVar[int]
    id: str
    total: int
    processed: int
    def __init__(self, id: _Optional[str] = ..., total: _Optional[int] = ..., processed: _Optional[int] = ...) -> None: ...
