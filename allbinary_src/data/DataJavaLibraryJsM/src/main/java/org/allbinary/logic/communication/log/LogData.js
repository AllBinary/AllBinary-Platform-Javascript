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
//not plain js import { AbPathData } from '../../../../../org/allbinary/logic/io/path/AbPathData.js';
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LogData extends Object {
    constructor() {
        super(...arguments);
        this.MAX = 5000000;
        this.extension = "log";
        this.backupFileExt = AbPathData.getInstance().EXTENSION_SEP + "bak" + AbPathData.getInstance().EXTENSION_SEP + "txt";
        this.ALLBINARY = "allbinary";
        this.NAME = "LOG_NAME";
        this.DESCRIPTION = "LOG_DESCRIPTION";
    }
}
