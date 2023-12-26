import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "";
export interface StatusV1 {
    id: string;
    total: number;
    processed: number;
}
export declare const StatusV1: {
    encode(message: StatusV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StatusV1;
    fromJSON(object: any): StatusV1;
    toJSON(message: StatusV1): unknown;
    create<I extends {
        id?: string | undefined;
        total?: number | undefined;
        processed?: number | undefined;
    } & {
        id?: string | undefined;
        total?: number | undefined;
        processed?: number | undefined;
    } & { [K in Exclude<keyof I, keyof StatusV1>]: never; }>(base?: I | undefined): StatusV1;
    fromPartial<I_1 extends {
        id?: string | undefined;
        total?: number | undefined;
        processed?: number | undefined;
    } & {
        id?: string | undefined;
        total?: number | undefined;
        processed?: number | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof StatusV1>]: never; }>(object: I_1): StatusV1;
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
