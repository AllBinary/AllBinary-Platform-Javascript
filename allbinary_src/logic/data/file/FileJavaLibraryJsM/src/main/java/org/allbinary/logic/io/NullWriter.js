/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
var _a, _b;
var _c;
//not GWT import const IOException
//not plain js import { Writer } 
const Writer = ((_c = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.io) === null || _b === void 0 ? void 0 : _b.Writer) !== null && _c !== void 0 ? _c : class {
});
//Current folder imports from return types, extended types, and scope (deduplicated)
export class NullWriter extends Writer {
    write(...args) {
        if (args.length === 1 && typeof args[0] === 'number')
            return this.write$overload1(args[0]);
        if (args.length === 3 && typeof args[1] === 'number' && typeof args[2] === 'number')
            return this.write$overload2(args[0], args[1], args[2]);
        if (args.length === 1 && typeof args[0] === 'string')
            return this.write$overload3(args[0]);
        if (args.length === 3 && typeof args[0] === 'string' && typeof args[1] === 'number' && typeof args[2] === 'number')
            return this.write$overload4(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: write');
    }
    //@Throws(IOException.constructor)
    write$overload1(c) {
    }
    //@Throws(IOException.constructor)
    write$overload2(cbuf, off, len) {
    }
    //@Throws(IOException.constructor)
    write$overload3(str) {
    }
    //@Throws(IOException.constructor)
    write$overload4(str, off, len) {
    }
    //@Throws(IOException.constructor)
    flush() {
    }
    close() {
    }
}
NullWriter.NULL_WRITER = new NullWriter();
