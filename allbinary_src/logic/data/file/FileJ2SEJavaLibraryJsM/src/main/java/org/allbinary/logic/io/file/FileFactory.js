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
import { Object } from '../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbFile } from './AbFile.js';
//not GWT import const AbFile = globalThis.org.allbinary.logic.io.file.AbFile;
export class FileFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FileFactory.instance;
    }
    //@Throws(Exception.constructor)
    getInstance(filePath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbFile.createAbFileFromRawPath(filePath);
        ;
    }
    //@Throws(Exception.constructor)
    getInstance(file, childFilePath) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbFile.createAbFileWithChild(file, childFilePath);
        ;
    }
    //@Throws(Exception.constructor)
    isFile(path) {
        var file = AbFile.createAbFile(path);
        ;
        if (file.exists()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
}
FileFactory.instance = new FileFactory();
