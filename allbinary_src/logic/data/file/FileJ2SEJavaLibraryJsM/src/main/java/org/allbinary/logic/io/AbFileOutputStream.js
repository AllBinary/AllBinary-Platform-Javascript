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
//not GWT import const AbFileNativeUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AbFileOutputStream extends FileOutputStream {
    //@Throws(FileNotFoundException.constructor)
    static createFromAbFile(file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileOutputStream(file.getPath(), false);
    }
    //@Throws(FileNotFoundException.constructor)
    static createFromAbFileAppend(file, append) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileOutputStream(file.getPath(), append);
    }
    //@Throws(FileNotFoundException.constructor)
    static createFromFilePath(name) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileOutputStream(name, false);
    }
    //@Throws(FileNotFoundException.constructor)
    static createFromFilePathAppend(name, append) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileOutputStream(name, append);
    }
    constructor(name, append) {
        super(name, append);
        //For kotlin this is before the body of the constructor.
    }
}
