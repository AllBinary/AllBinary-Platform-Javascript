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
import { Object } from '../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CommonPhoneStrings extends Object {
    constructor() {
        super(...arguments);
        this.UP = "UP";
        this.DOWN = "DOWN";
        this.LEFT = "LEFT";
        this.RIGHT = "RIGHT";
        this.ZERO = "0";
        this.ONE = "1";
        this.TWO = "2";
        this.THREE = "3";
        this.FOUR = "4";
        this.FIVE = "5";
        this.SIX = "6";
        this.SEVEN = "7";
        this.EIGHT = "8";
        this.NINE = "9";
        this.POUND = "#";
        this.STAR = "*";
        this.FIRE = "FIRE";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CommonPhoneStrings.instance;
    }
}
CommonPhoneStrings.instance = new CommonPhoneStrings();
