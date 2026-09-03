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
//not GWT import const Set = globalThis.java.util.Set;
//Current folder imports from return types, extended types, and scope (deduplicated)
//AndroidToJ2ME
export class J2SEUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return J2SEUtil.instance;
    }
    getHashMapAsArray(hashMap) {
        var objectArray = hashMap.keys().();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return objectArray;
    }
    getMapAsArray(map) {
        var objectArray = map.keySet().();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return objectArray;
    }
    getSetAsArray(set) {
        var objectArray = set.toArray();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return objectArray;
    }
}
J2SEUtil.instance = new J2SEUtil();
