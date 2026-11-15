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
//not GWT import const IOException
import { OutputStream } from '../../../../java/io/OutputStream.js';
//not GWT import const OutputStream
//Current folder imports from return types, extended types, and scope (deduplicated)
export class NullOutputStream extends OutputStream {
    write(...args) {
        if (args.length === 1 && typeof args[0] === 'number')
            return this.write$overload1(args[0]);
        if (args.length === 3 && typeof args[1] === 'number' && typeof args[2] === 'number')
            return this.write$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: write');
    }
    //@Throws(IOException.constructor)
    write$overload1(b) {
    }
    //@Throws(IOException.constructor)
    write$overload2(b, off, len) {
    }
    close() {
    }
}
NullOutputStream.NULL_OUTPUT_STREAM = new NullOutputStream();
