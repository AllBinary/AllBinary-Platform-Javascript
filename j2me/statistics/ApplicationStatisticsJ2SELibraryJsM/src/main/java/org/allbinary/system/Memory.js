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
import { Object } from '../../../java/lang/Object.js';
import { Runtime } from '../../../java/lang/Runtime.js';
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
//ActualPlatform
/*actual*/ export class Memory extends Object {
    /*actual*/ static getInfo() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Memory: Free: ");
        stringBuffer.appendlong(Runtime.getRuntime().freeMemory());
        stringBuffer.append(" Max: ");
        stringBuffer.appendlong(Runtime.getRuntime().maxMemory());
        stringBuffer.append(" Total: ");
        stringBuffer.appendlong(Runtime.getRuntime().totalMemory());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
