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
import { Object } from '../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicArrayListD } from './BasicArrayListD.js';
//ArkTs does not have this.  So this is for the ArkTs build.
export class EnumerationUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return EnumerationUtil.instance;
    }
    hasMoreElements(enumeration) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return enumeration.hasMoreElements();
        ;
    }
    nextElement(enumeration) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return enumeration.nextElement();
        ;
    }
    getAsArray(enumeration) {
        var basicArrayList = new BasicArrayListD();
        ;
        while (this.hasMoreElements(enumeration)) {
            basicArrayList.add(this.nextElement(enumeration));
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return basicArrayList.toArray();
        ;
    }
}
EnumerationUtil.instance = new EnumerationUtil();
