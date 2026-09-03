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
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
import { AbFile } from '../../../../org/allbinary/logic/io/file/AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
import { AbPath } from '../../../../org/allbinary/logic/io/path/AbPath.js';
//not GWT import const AbPath = globalThis.org.allbinary.logic.io.path.AbPath;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbFileInputStream } from './AbFileInputStream.js';
//not GWT import const AbFileInputStream = globalThis.org.allbinary.logic.io.AbFileInputStream;
import { AbFileOutputStream } from './AbFileOutputStream.js';
//not GWT import const AbFileOutputStream = globalThis.org.allbinary.logic.io.AbFileOutputStream;
export class FileStreamFactory extends Object {
    static getInstance() {
        if (FileStreamFactory.SINGLETON == NullUtil.getInstance().NULL_OBJECT) {
            FileStreamFactory.SINGLETON = new FileStreamFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileStreamFactory.SINGLETON;
    }
    constructor() {
        super();
    }
    //@Throws(Exception.constructor)
    getFileInputStreamInstance(path, fileName) {
        var FILEABPATH = new AbPath(path, fileName);
        ;
        var file = AbFile.createAbFileFromAbPath(FILEABPATH);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AbFileInputStream(file);
    }
    //@Throws(Exception.constructor)
    getFileOutputStreamInstance(path, fileName) {
        var FILEABPATH = new AbPath(path, fileName);
        ;
        var file = AbFile.createAbFileFromAbPath(FILEABPATH);
        ;
        if (file.exists()) {
            file.delete();
            file.createNewFile();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbFileOutputStream.createFromAbFile(file);
        ;
    }
    //@Throws(Exception.constructor)
    delete(path, fileName) {
        var FILEABPATH = new AbPath(path, fileName);
        ;
        var file = AbFile.createAbFileFromAbPath(FILEABPATH);
        ;
        file.delete();
    }
}
FileStreamFactory.SINGLETON = NullUtil.getInstance().NULL_OBJECT;
