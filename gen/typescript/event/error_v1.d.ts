import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "";
export interface ErrorV1 {
    code: number;
    message: string;
}
export declare const ErrorV1: {
    encode(message: ErrorV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ErrorV1;
    fromJSON(object: any): ErrorV1;
    toJSON(message: ErrorV1): unknown;
    create<I extends {
        code?: number | undefined;
        message?: string | undefined;
    } & {
        code?: number | undefined;
        message?: string | undefined;
    } & { [K in Exclude<keyof I, keyof ErrorV1>]: never; }>(base?: I | undefined): ErrorV1;
    fromPartial<I_1 extends {
        code?: number | undefined;
        message?: string | undefined;
    } & {
        code?: number | undefined;
        message?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof ErrorV1>]: never; }>(object: I_1): ErrorV1;
};
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
