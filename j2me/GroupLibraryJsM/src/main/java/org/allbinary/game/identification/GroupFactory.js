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
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Group } from './Group.js';
export class GroupFactory extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.NULL_GROUP_ARRAY = [];
        this.list = new BasicArrayListD();
        this.index = 0;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GroupFactory.instance;
    }
    getNextGroup() {
        var group = this.list.objectArray[this.index];
        ;
        this.index++;
        //if statement needs to be on the same line and ternary does not work the same way.
        return group;
    }
    getNextGroupByName(name) {
        var group = this.getNextGroup();
        ;
        group.setName(name);
        //if statement needs to be on the same line and ternary does not work the same way.
        return group;
    }
    init(groups, nameArray) {
        var stringMaker = new StringMaker();
        ;
        var stringUtil = StringUtil.getInstance();
        ;
        var TEAM = "Team ";
        ;
        this.list.clear();
        this.index = 0;
        var size = this.list.size();
        ;
        while (size < groups) {
            var name = stringUtil.EMPTY_STRING;
            ;
            if (size < nameArray.length) {
                name = nameArray[size];
            }
            else {
                stringMaker.delete(0, stringMaker.length());
                name = stringMaker.append(TEAM).appendint(size).toString();
            }
            this.list.add(new Group(name, (size + 3)));
            size++;
        }
    }
}
GroupFactory.instance = new GroupFactory();
