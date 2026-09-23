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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import - same folder const Group
import { GroupCommonFactory } from './GroupCommonFactory.js';
//not GWT import - same folder const GroupCommonFactory
export class CompositeGroup extends Object {
    constructor(groupInterface) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.list = new BasicArrayListD();
        this.groupInterface = groupInterface;
    }
    clear() {
        this.list.clear();
    }
    add(groupInterface) {
        var commonStrings = CommonStrings.getInstance();
        ;
        var groupCommonFactory = GroupCommonFactory.getInstance();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(groupCommonFactory.ADDING_LABEL);
        stringBuffer.append(groupInterface.toString());
        stringBuffer.append(groupCommonFactory.TO_LABEL);
        stringBuffer.append(StringUtil.getInstance().toString(this.groupInterface));
        this.logUtil.putF(stringBuffer.toString(), this, commonStrings.ADD);
        this.list.add(groupInterface);
    }
    isInGroup(groupInterface) {
        if (this.list.contains(groupInterface)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    getGroup() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.groupInterface;
    }
}
