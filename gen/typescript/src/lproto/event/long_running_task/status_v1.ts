/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface StatusV1 {
  id: string;
  total: number;
  processed: number;
}

function createBaseStatusV1(): StatusV1 {
  return { id: "", total: 0, processed: 0 };
}

export const StatusV1 = {
  encode(message: StatusV1, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.total !== 0) {
      writer.uint32(16).int32(message.total);
    }
    if (message.processed !== 0) {
      writer.uint32(24).int32(message.processed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): StatusV1 {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStatusV1();
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
          if (tag !== 16) {
            break;
          }

          message.total = reader.int32();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.processed = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): StatusV1 {
    return {
      id: isSet(object.id) ? globalThis.String(object.id) : "",
      total: isSet(object.total) ? globalThis.Number(object.total) : 0,
      processed: isSet(object.processed) ? globalThis.Number(object.processed) : 0,
    };
  },

  toJSON(message: StatusV1): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    if (message.total !== 0) {
      obj.total = Math.round(message.total);
    }
    if (message.processed !== 0) {
      obj.processed = Math.round(message.processed);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<StatusV1>, I>>(base?: I): StatusV1 {
    return StatusV1.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<StatusV1>, I>>(object: I): StatusV1 {
    const message = createBaseStatusV1();
    message.id = object.id ?? "";
    message.total = object.total ?? 0;
    message.processed = object.processed ?? 0;
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
