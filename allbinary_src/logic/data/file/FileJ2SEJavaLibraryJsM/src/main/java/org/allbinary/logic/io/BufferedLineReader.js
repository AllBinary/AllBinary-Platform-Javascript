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
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { BufferedReader } from '../../../../java/io/BufferedReader.js';
//not GWT import const BufferedReader = globalThis.java.io.BufferedReader;
import { FileReader } from '../../../../java/io/FileReader.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { AbFileNativeUtil } from '../../../../org/allbinary/logic/io/file/AbFileNativeUtil.js';
//not GWT import const AbFileNativeUtil = globalThis.org.allbinary.logic.io.file.AbFileNativeUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BufferedLineReader extends Object {
    constructor(file) {
        super();
        this.tmpIn = new BufferedReader(new FileReader(AbFileNativeUtil.get(file)));
    }
    readUpToLines(readAheadIndex) {
    }
    //@Throws(Exception.constructor)
    readLine() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.tmpIn.readLine();
        ;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getCurrent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
}
