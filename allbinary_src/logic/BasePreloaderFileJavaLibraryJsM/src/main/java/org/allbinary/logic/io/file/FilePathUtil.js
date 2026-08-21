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
import { AbPathData } from '../../../../../org/allbinary/logic/io/path/AbPathData.js';
import { StringValidationUtil } from '../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { FilePathData } from './FilePathData.js';
//Used to correct user input for paths
export class FilePathUtil extends Object {
    static adjust(path) {
        var abPathData = AbPathData.getInstance();
        ;
        var stringValidationUtil = StringValidationUtil.getInstance();
        ;
        var filePathData = FilePathData.getInstance();
        ;
        if (stringValidationUtil.isEmpty(path)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return filePathData.PATH_START;
        }
        path = path.replace(abPathData.SEPARATORCHAR, filePathData.SEPARATORCHAR);
        //if statement needs to be on the same line and ternary does not work the same way.
        return path;
    }
    constructor() {
        super();
    }
}
