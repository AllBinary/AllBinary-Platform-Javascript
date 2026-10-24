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
import { Object } from '../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
//TempBase
export class TsUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TsUtil.instance;
    }
    longBitsToDouble(bits) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return java.lang.Double.longBitsToDouble(bits);
        ;
    }
    intBitsToFloat(bits) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return java.lang.Float.intBitsToFloat(bits);
        ;
    }
    hashCode(anyType = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return anyType.hashCode();
        ;
    }
    //@Throws(InterruptedException.constructor)
    waitFor(any = {}, timeoutMillis) {
        var anyType = any;
        ;
        anyType.wait(timeoutMillis);
    }
    compareTo(a, b) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return a.compareTo(b);
        ;
    }
}
TsUtil.instance = new TsUtil();
