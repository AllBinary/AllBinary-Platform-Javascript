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
import { Object } from '../../../../../../../java/lang/Object.js';
import { CommonDataFileStrings } from '../../../../../../../org/allbinary/logic/io/file/CommonDataFileStrings.js';
//not GWT import const CommonDataFileStrings
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TransformInfoDataData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TransformInfoDataData.instance;
    }
    constructor() {
        super();
        this.UNCRYPTED_EXTENSION = CommonDataFileStrings.getInstance().UNCRYPTED_EXTENSION;
        this.ENCRYPTED_EXTENSION = CommonDataFileStrings.getInstance().ENCRYPTED_EXTENSION;
    }
}
TransformInfoDataData.instance = new TransformInfoDataData();
