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
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { AllBinaryEventObject } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameNotificationEvent extends AllBinaryEventObject {
    constructor(anyType = {}, string, seconds, basicColor, permanent) {
        super(anyType);
        this.string = StringUtil.getInstance().EMPTY_STRING;
        this.basicColor = BasicColorFactory.getInstance().BLACK;
        //For kotlin this is before the body of the constructor.
        this.setString(string);
        this.seconds = seconds;
        this.setBasicColorP(basicColor);
        this.removeable = permanent;
    }
    getString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.string;
    }
    getSeconds() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.seconds;
    }
    getBasicColorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColor;
    }
    getPermanent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.removeable;
    }
    setString(string) {
        this.string = string;
    }
    setBasicColorP(basicColor) {
        this.basicColor = basicColor;
    }
}
