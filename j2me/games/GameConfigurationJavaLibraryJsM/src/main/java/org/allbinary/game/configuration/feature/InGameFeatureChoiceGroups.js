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
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class InGameFeatureChoiceGroups extends Object {
    static getExclusiveInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InGameFeatureChoiceGroups.gameFeatureChoiceGroupsExclusive;
    }
    static getMultipleInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return InGameFeatureChoiceGroups.gameFeatureChoiceGroupsMultiple;
    }
    constructor() {
        super();
        this.hashtable = StdUtil.getInstance().createHashtable();
    }
    get() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hashtable;
    }
    add(name, list) {
        this.hashtable.put(name, list);
    }
}
InGameFeatureChoiceGroups.gameFeatureChoiceGroupsExclusive = new InGameFeatureChoiceGroups();
InGameFeatureChoiceGroups.gameFeatureChoiceGroupsMultiple = new InGameFeatureChoiceGroups();
