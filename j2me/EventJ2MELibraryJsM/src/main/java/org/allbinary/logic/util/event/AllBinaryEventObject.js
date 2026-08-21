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
import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AllBinaryEventObject extends Object {
    constructor(anyType = {}) {
        super();
        this.source = anyType;
    }
    getSource() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.source;
    }
    setSource(source = {}) {
        this.source = source;
    }
}
AllBinaryEventObject.NULL_EVENT = new AllBinaryEventObject(NullUtil.getInstance().NULL_OBJECT);
