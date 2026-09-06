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
//not plain js import { FilePathData } 
const FilePathData = globalThis.org.allbinary.logic.io.file.FilePathData;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AbPathData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbPathData.instance;
    }
    constructor() {
        super();
        this.EXTENSION_SEP = CommonSeps.getInstance().PERIOD;
        this.SEPARATORCHAR = '/';
        this.SEPARATOR = CommonSeps.getInstance().FORWARD_SLASH;
    }
}
AbPathData.instance = new AbPathData();
