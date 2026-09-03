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
//not plain js import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
//ActualPlatform
/*actual*/ export class Memory extends Object {
    /*actual*/ static getInfo() {
        var stringBuffer = new StringMaker();
        ;
        var maxUtilizedMemoryAvailable = Runtime.getRuntime().maxMemory();
        ;
        var memoryUsed = Runtime.getRuntime().totalMemory();
        ;
        stringBuffer.append("APK Memory: Available: ");
        stringBuffer.appendlong(maxUtilizedMemoryAvailable);
        stringBuffer.append("/");
        stringBuffer.appendlong(Runtime.getRuntime().maxMemory());
        stringBuffer.append(" Used: ");
        stringBuffer.appendlong(memoryUsed);
        stringBuffer.append(" Free: ");
        stringBuffer.appendlong(maxUtilizedMemoryAvailable - memoryUsed);
        stringBuffer.append("/");
        stringBuffer.appendlong(Runtime.getRuntime().maxMemory() - memoryUsed);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
