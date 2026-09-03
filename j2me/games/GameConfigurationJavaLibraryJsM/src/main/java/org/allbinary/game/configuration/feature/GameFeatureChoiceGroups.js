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
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
import { StdUtil } from '../../../../../org/allbinary/logic/StdUtil.js';
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameFeatureChoiceGroups extends Object {
    static getExclusiveInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameFeatureChoiceGroups.gameFeatureChoiceGroupsExclusive;
    }
    static getMultipleInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameFeatureChoiceGroups.gameFeatureChoiceGroupsMultiple;
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
GameFeatureChoiceGroups.gameFeatureChoiceGroupsExclusive = new GameFeatureChoiceGroups();
GameFeatureChoiceGroups.gameFeatureChoiceGroupsMultiple = new GameFeatureChoiceGroups();
