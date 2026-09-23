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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
import { SmallIntegerSingletonFactory } from '../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GroupCommonFactory extends Object {
    constructor() {
        super(...arguments);
        this.ID = SmallIntegerSingletonFactory.getInstance().getAt(10);
        this.GROUP_NAME_LABEL = "Group Name: ";
        this.ID_LABEL = " Id: ";
        this.ADDING_LABEL = "Adding: ";
        this.TO_LABEL = " to: ";
    }
    static getInstance() {
        if (GroupCommonFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            GroupCommonFactory.instance = new GroupCommonFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return GroupCommonFactory.instance;
    }
}
GroupCommonFactory.instance = NullUtil.getInstance().NULL_OBJECT;
