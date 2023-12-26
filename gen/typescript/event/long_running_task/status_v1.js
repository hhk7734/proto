"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusV1 = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "";
function createBaseStatusV1() {
    return { id: "", total: 0, processed: 0 };
}
exports.StatusV1 = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : minimal_1.default.Reader.create(input);
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
    fromJSON(object) {
        return {
            id: isSet(object.id) ? globalThis.String(object.id) : "",
            total: isSet(object.total) ? globalThis.Number(object.total) : 0,
            processed: isSet(object.processed) ? globalThis.Number(object.processed) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
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
    create(base) {
        return exports.StatusV1.fromPartial(base !== null && base !== void 0 ? base : {});
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseStatusV1();
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : "";
        message.total = (_b = object.total) !== null && _b !== void 0 ? _b : 0;
        message.processed = (_c = object.processed) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function isSet(value) {
    return value !== null && value !== undefined;
}
