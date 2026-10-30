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
//not GWT import const FileNotFoundException
import { FileOutputStream } from '../../../../java/io/FileOutputStream.js';
//not GWT import const IOException
import { OutputStream } from '../../../../java/io/OutputStream.js';
//not GWT import const AbFile
import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AbFileOutputStream extends OutputStream {
    //@Throws(FileNotFoundException.constructor)
    static createFromAbFile(file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileOutputStream(new FileOutputStream(AbFileNativeUtil.get(file)));
    }
    //@Throws(FileNotFoundException.constructor)
    static createFromAbFileAppend(file, append) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileOutputStream(new FileOutputStream(file.getPath()));
    }
    //@Throws(FileNotFoundException.constructor)
    static createFromFilePath(name) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileOutputStream(new FileOutputStream(name));
    }
    //@Throws(FileNotFoundException.constructor)
    static createFromFilePathAppend(name, append) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileOutputStream(new FileOutputStream(name));
    }
    constructor(fileOutputStream) {
        super();
        this.fileOutputStream = fileOutputStream;
    }
    close() {
        this.fileOutputStream.close();
    }
    getChannel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.fileOutputStream.getChannel();
        ;
    }
    write(...args) {
        if (args.length === 1)
            return this.write$overload1(args[0]);
        if (args.length === 3 && typeof args[1] === 'number' && typeof args[2] === 'number')
            return this.write$overload2(args[0], args[1], args[2]);
        if (args.length === 1 && typeof args[0] === 'number')
            return this.write$overload3(args[0]);
        throw new TypeError('No matching overload: write');
    }
    //@Throws(IOException.constructor)
    write$overload1(buffer) {
        this.fileOutputStream.write(buffer);
    }
    //@Throws(IOException.constructor)
    write$overload2(buffer, offset, count) {
        this.fileOutputStream.write(buffer, offset, count);
    }
    //@Throws(IOException.constructor)
    write$overload3(b) {
        this.fileOutputStream.write(b);
    }
}
