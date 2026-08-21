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
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { GroupCommonFactory } from './GroupCommonFactory.js';
export class Group extends Object {
    constructor(teamName, teamId) {
        super();
        this.name = StringUtil.getInstance().EMPTY_STRING;
        this.string = StringUtil.getInstance().EMPTY_STRING;
        this.teamId = teamId;
        this.setName(teamName);
    }
    getGroupName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    setName(name) {
        this.name = name;
        var groupCommonFactory = GroupCommonFactory.getInstance();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(groupCommonFactory.GROUP_NAME_LABEL);
        stringBuffer.append(this.name);
        stringBuffer.append(groupCommonFactory.ID_LABEL);
        stringBuffer.appendshort(this.teamId);
        this.string = stringBuffer.toString();
    }
    getGroupId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.teamId;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.string;
    }
}
