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
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { BasicArrayListS } 
const BasicArrayListS = globalThis.org.allbinary.util.BasicArrayListS;
export class ImmutableBasicArrayList extends BasicArrayListS {
    constructor(name, size) {
        super(size);
        //For kotlin this is before the body of the constructor.
        this.name = name;
    }
    add(e = {}) {
        ForcedLogUtil.log(this.name, this);
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    addAt(index, element = {}) {
        ForcedLogUtil.log(this.name, this);
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
}
