import _m0 from "protobufjs/minimal";
import { ErrorV1 } from "../error_v1";
export declare const protobufPackage = "";
export interface ResponseV1 {
    id: string;
    errors: ErrorV1[];
}
export declare const ResponseV1: {
    encode(message: ResponseV1, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResponseV1;
    fromJSON(object: any): ResponseV1;
    toJSON(message: ResponseV1): unknown;
    create<I extends {
        id?: string | undefined;
        errors?: {
            code?: number | undefined;
            message?: string | undefined;
        }[] | undefined;
    } & {
        id?: string | undefined;
        errors?: ({
            code?: number | undefined;
            message?: string | undefined;
        }[] & ({
            code?: number | undefined;
            message?: string | undefined;
        } & {
            code?: number | undefined;
            message?: string | undefined;
        } & { [K in Exclude<keyof I["errors"][number], keyof ErrorV1>]: never; })[] & { [K_1 in Exclude<keyof I["errors"], keyof {
            code?: number | undefined;
            message?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof ResponseV1>]: never; }>(base?: I | undefined): ResponseV1;
    fromPartial<I_1 extends {
        id?: string | undefined;
        errors?: {
            code?: number | undefined;
            message?: string | undefined;
        }[] | undefined;
    } & {
        id?: string | undefined;
        errors?: ({
            code?: number | undefined;
            message?: string | undefined;
        }[] & ({
            code?: number | undefined;
            message?: string | undefined;
        } & {
            code?: number | undefined;
            message?: string | undefined;
        } & { [K_3 in Exclude<keyof I_1["errors"][number], keyof ErrorV1>]: never; })[] & { [K_4 in Exclude<keyof I_1["errors"], keyof {
            code?: number | undefined;
            message?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof ResponseV1>]: never; }>(object: I_1): ResponseV1;
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
