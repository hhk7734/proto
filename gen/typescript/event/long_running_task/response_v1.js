"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseV1 = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const error_v1_1 = require("../error_v1");
exports.protobufPackage = "";
function createBaseResponseV1() {
    return { id: "", errors: [] };
}
exports.ResponseV1 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        for (const v of message.errors) {
            error_v1_1.ErrorV1.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
                    message.errors.push(error_v1_1.ErrorV1.decode(reader, reader.uint32()));
                    continue;
            }
            if ((tag & 7) === 4 || tag === 0) {
                break;
            }
            reader.skipType(tag & 7);
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            errors: globalThis.Array.isArray(object === null || object === void 0 ? void 0 : object.errors) ? object.errors.map((e) => error_v1_1.ErrorV1.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        var _a;
        const obj = {};
        if (message.id !== "") {
            obj.id = message.id;
        }
        if ((_a = message.errors) === null || _a === void 0 ? void 0 : _a.length) {
            obj.errors = message.errors.map((e) => error_v1_1.ErrorV1.toJSON(e));
        }
        return obj;
    },
    create(base) {
        return exports.ResponseV1.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseResponseV1();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.errors = ((_b = object.errors) === null || _b === void 0 ? void 0 : _b.map((e) => error_v1_1.ErrorV1.fromPartial(e))) || [];
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
