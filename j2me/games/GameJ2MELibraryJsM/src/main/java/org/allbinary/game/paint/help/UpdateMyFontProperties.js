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
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class UpdateMyFontProperties extends Object {
    constructor() {
        super(...arguments);
        this.actionStringArray = StringUtil.getInstance().getArrayInstance();
        this.keymappingBeginWidthArray = NullUtil.getInstance().NULL_INT_ARRAY;
        this.actionStringDeltaXArray = NullUtil.getInstance().NULL_INT_ARRAY;
        this.inputDeltaXArray = NullUtil.getInstance().NULL_INT_ARRAY_ARRAY;
        this.sepArray = StringUtil.getInstance().ONE_EMPTY_STRING_ARRAY_OF_ARRAYS;
        this.sepWidthArray = NullUtil.getInstance().NULL_INT_ARRAY_ARRAY;
        this.charHeight = 0;
    }
}
