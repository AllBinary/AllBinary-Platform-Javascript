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
import { Reader } from '../../../../java/io/Reader.js';
//not GWT import const Reader
//Current folder imports from return types, extended types, and scope (deduplicated)
export class NullReader extends Reader {
    read(...args) {
        if (args.length === 0)
            return this.read$overload1();
        if (args.length === 3 && typeof args[1] === 'number' && typeof args[2] === 'number')
            return this.read$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: read');
    }
    //@Throws(IOException.constructor)
    read$overload1() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    //@Throws(IOException.constructor)
    read$overload2(cbuf, off, len) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    //@Throws(IOException.constructor)
    ready() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(IOException.constructor)
    skip(n) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    close() {
    }
}
NullReader.NULL_READER = new NullReader();
