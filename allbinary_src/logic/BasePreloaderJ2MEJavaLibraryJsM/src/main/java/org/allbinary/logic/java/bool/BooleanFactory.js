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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BooleanFactory extends Object {
    constructor() {
        super(...arguments);
        this.TRUE = true;
        this.FALSE = false;
        this.TRUE_STRING = this.TRUE.toString();
        this.FALSE_STRING = this.FALSE.toString();
        this.YES = "yes";
        this.NO = "no";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BooleanFactory.instance;
    }
    toStringb(bool) {
        if (bool) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.TRUE_STRING;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.FALSE_STRING;
        }
    }
}
BooleanFactory.instance = new BooleanFactory();
