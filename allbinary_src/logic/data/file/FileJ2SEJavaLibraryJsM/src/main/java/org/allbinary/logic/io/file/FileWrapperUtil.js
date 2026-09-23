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
//not GWT import const File
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AbFile } from './AbFile.js';
//not GWT import - same folder const AbFile
export class FileWrapperUtil extends Object {
    static wrapFiles(files) {
        try {
            var abFileArray = new Array(files.length);
            ;
            for (var index = files.length - 1; index >= 0; index--) {
                abFileArray[index] = new AbFile(files[index]);
            }
            //if statement needs to be on the same line and ternary does not work the same way.
            return abFileArray;
            //: 
        }
        catch (e) {
            PreLogUtil.putSE("Exception Wrapping Files", "FileWrapperUtil", "wrapFiles", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return [];
        }
    }
    static wrapFile(file) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AbFile(file);
            //: 
        }
        catch (e) {
            PreLogUtil.putSE("Exception Wrapping File", "FileWrapperUtil", "wrapFile", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return AbFile.NULL_FILE;
        }
    }
}
