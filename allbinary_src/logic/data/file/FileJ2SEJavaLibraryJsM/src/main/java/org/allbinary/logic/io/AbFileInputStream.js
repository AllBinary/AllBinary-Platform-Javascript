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
//not GWT import const File
import { FileInputStream } from '../../../../java/io/FileInputStream.js';
//not GWT import const AbFile
import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AbFileInputStream extends FileInputStream {
    //@Throws(FileNotFoundException.constructor)
    static createFromAbFile(file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileInputStream(AbFileNativeUtil.get(file).getPath());
    }
    //@Throws(FileNotFoundException.constructor)
    static createFromFile(file) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileInputStream(file.getPath());
    }
    constructor(name) {
        super(name);
        //For kotlin this is before the body of the constructor.
    }
}
