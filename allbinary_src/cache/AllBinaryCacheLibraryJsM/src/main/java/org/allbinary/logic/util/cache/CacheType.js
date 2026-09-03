/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2007 AllBinary
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
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CacheType extends Object {
    constructor(vendor, type) {
        super();
        this.vendor = vendor;
        this.type = type;
    }
    getVendor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.vendor;
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.type;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("CacheType: Vendor: ");
        stringBuffer.append(this.getVendor());
        stringBuffer.append(" Type: ");
        stringBuffer.append(this.getType());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
