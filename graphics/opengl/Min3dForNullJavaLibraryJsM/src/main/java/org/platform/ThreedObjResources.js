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
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ThreedObjResources extends Object {
    constructor() {
        super(...arguments);
        this.hashtable = StdUtil.getInstance().createHashtable();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ThreedObjResources.instance;
    }
    get(resourceName) {
        var resourceName2 = this.hashtable.get(resourceName);
        ;
        if (resourceName2 !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return resourceName2;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return resourceName;
    }
}
ThreedObjResources.instance = new ThreedObjResources();
