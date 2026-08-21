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
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Group } from './Group.js';
export class BasicGroupFactory extends Object {
    constructor() {
        super(...arguments);
        this.NAME = "GROUP_NAME";
        this.NO_SUCH_GROUP = "No Such Group: ";
        this.GOOD = new Group("Good Guys", 0);
        this.ENEMY = new Group("Bad Guys", 1);
        this.ENEMY_ON_LEVEL = new Group("Bad Guys on Level", 2);
        this.NONE = new Group("Not On A Team", 3);
        this.GOOD_ARRAY = [
            this.GOOD
        ];
        this.ENEMY_ARRAY = [
            this.ENEMY
        ];
        this.ENEMY_ON_LEVEL_ARRAY = [
            this.ENEMY, this.ENEMY_ON_LEVEL
        ];
        this.NONE_ARRAY = [
            this.NONE
        ];
    }
    static getInstance() {
        if (BasicGroupFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            BasicGroupFactory.instance = new BasicGroupFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicGroupFactory.instance;
    }
}
BasicGroupFactory.instance = NullUtil.getInstance().NULL_OBJECT;
