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
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { Log } from './Log.js';
const Log = globalThis.org.allbinary.logic.communication.log.Log;
//ActualPlatform
/*actual*/ export class LogFactory extends Object {
    /*actual*/ static getInstance(specialMessage, anyType = {}, functionName, exception = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Log(specialMessage, anyType, functionName, exception);
    }
    /*actual*/ static getInstanceF(specialMessage, anyType = {}, functionName) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return null;
    }
}
