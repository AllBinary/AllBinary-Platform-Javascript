/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PlatformRecordIdUtil extends Object {
    constructor() {
        super(...arguments);
        this.PLATFORM_SHORT_NAME = "HTML";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PlatformRecordIdUtil.instance;
    }
    getRecordId(abeClientInformation, baseRecordId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(abeClientInformation.toShortString()).append(CommonSeps.getInstance().UNDERSCORE).append(this.PLATFORM_SHORT_NAME).append(baseRecordId).toString();
        ;
    }
}
PlatformRecordIdUtil.instance = new PlatformRecordIdUtil();
