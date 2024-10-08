// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v4.25.0
// source: lproto/event/long_running_task/response_v1.proto

/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { ErrorV1 } from "../error_v1";

export const protobufPackage = "lproto.event.long_running_task";

export interface ResponseV1 {
  id: string;
  errors: ErrorV1[];
}

function createBaseResponseV1(): ResponseV1 {
  return { id: "", errors: [] };
}

export const ResponseV1 = {
  encode(message: ResponseV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    for (const v of message.errors) {
      ErrorV1.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ResponseV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResponseV1();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.errors.push(ErrorV1.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ResponseV1 {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      errors: globalThis.Array.isArray(object?.errors) ? object.errors.map((e: any) => ErrorV1.fromJSON(e)) : [],
    };
  },

  toJSON(message: ResponseV1): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.errors?.length) {
      obj.errors = message.errors.map((e) => ErrorV1.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ResponseV1>, I>>(base?: I): ResponseV1 {
    return ResponseV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ResponseV1>, I>>(object: I): ResponseV1 {
    const message = createBaseResponseV1();
    message.id = object.id ?? "";
    message.errors = object.errors?.map((e) => ErrorV1.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
