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
import { Object } from '../../../../java/lang/Object.js';
import { Integer } from '../../../../java/lang/Integer.js';
//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TableDataFactory extends Object {
    constructor() {
        super(...arguments);
        this.INTEGER_MAX_VALUE_STRING = Integer.toString(Integer.MAX_VALUE);
        this.ZERO_STRING = CommonPhoneStrings.getInstance().ZERO;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TableDataFactory.instance;
    }
}
TableDataFactory.instance = new TableDataFactory();
