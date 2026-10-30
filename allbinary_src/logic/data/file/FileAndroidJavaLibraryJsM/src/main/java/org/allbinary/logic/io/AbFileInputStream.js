/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
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
import { InputStream } from '../../../../java/io/InputStream.js';
//not GWT import const FileChannel
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AbFileInputStream extends InputStream {
    constructor(fileInputStream) {
        super();
        this.fileInputStream = fileInputStream;
    }
    mark(readlimit) {
        this.fileInputStream.mark(readlimit);
    }
    markSupported() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fileInputStream.markSupported();
        ;
    }
    //@Throws(IOException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    reset() {
        this.fileInputStream.reset();
    }
    //@Throws(IOException.constructor)
    available() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fileInputStream.available();
        ;
    }
    close() {
        this.fileInputStream.close();
    }
    getChannel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fileInputStream.getChannel();
        ;
    }
    read(...args) {
        if (args.length === 0)
            return this.read$overload1();
        if (args.length === 1)
            return this.read$overload2(args[0]);
        if (args.length === 3 && typeof args[1] === 'number' && typeof args[2] === 'number')
            return this.read$overload3(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: read');
    }
    //@Throws(IOException.constructor)
    read$overload1() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fileInputStream.read();
        ;
    }
    //@Throws(IOException.constructor)
    read$overload2(b) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fileInputStream.read(b);
        ;
    }
    //@Throws(IOException.constructor)
    read$overload3(buffer, offset, count) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fileInputStream.read(buffer, offset, count);
        ;
    }
    //@Throws(IOException.constructor)
    skip(n) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fileInputStream.skip(n);
        ;
    }
}
