# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: lproto/event/long_running_task/response_v1.proto
# Protobuf Python Version: 4.25.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from lproto.event import error_v1_pb2 as lproto_dot_event_dot_error__v1__pb2


DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n0lproto/event/long_running_task/response_v1.proto\x12\x1elproto.event.long_running_task\x1a\x1blproto/event/error_v1.proto\"?\n\nResponseV1\x12\n\n\x02id\x18\x01 \x01(\t\x12%\n\x06\x65rrors\x18\x02 \x03(\x0b\x32\x15.lproto.event.ErrorV1B@Z>github.com/hhk7734/proto/gen/go/lproto/event/long_running_taskb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'lproto.event.long_running_task.response_v1_pb2', _globals)
if _descriptor._USE_C_DESCRIPTORS == False:
  _globals['DESCRIPTOR']._options = None
  _globals['DESCRIPTOR']._serialized_options = b'Z>github.com/hhk7734/proto/gen/go/lproto/event/long_running_task'
  _globals['_RESPONSEV1']._serialized_start=113
  _globals['_RESPONSEV1']._serialized_end=176
# @@protoc_insertion_point(module_scope)
