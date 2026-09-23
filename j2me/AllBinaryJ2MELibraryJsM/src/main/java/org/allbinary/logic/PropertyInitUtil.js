/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2026 AllBinary
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
import { Object } from '../../../java/lang/Object.js';
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PropertyInitUtil extends Object {
    static getInstance(value) {
        var commonStrings = CommonStrings.getInstance();
        ;
        var logUtil = LogUtil.getInstance();
        ;
        logUtil.putF("PropertyInitUtil: " + value, logUtil, commonStrings.CONSTRUCTOR);
        //if statement needs to be on the same line and ternary does not work the same way.
        return PropertyInitUtil.instance;
    }
}
PropertyInitUtil.instance = new PropertyInitUtil();
