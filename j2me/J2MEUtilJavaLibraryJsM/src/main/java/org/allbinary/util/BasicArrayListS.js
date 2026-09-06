/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { IllegalArgumentException } from '../../../java/lang/IllegalArgumentException.js';
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
export class BasicArrayListS extends BasicArrayList {
    constructor(size) {
        super(NullUtil.getInstance().NULL_OBJECT_ARRAY);
        //For kotlin this is before the body of the constructor.
        if (size < 0) {
            throw new IllegalArgumentException(new StringMaker().append("Init Size Exception: ").appendint(size).toString());
        }
        this.objectArray = new Array(size);
    }
}
