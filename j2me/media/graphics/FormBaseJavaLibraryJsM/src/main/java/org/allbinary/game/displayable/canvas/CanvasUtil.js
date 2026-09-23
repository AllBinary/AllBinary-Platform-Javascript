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
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas
//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CanvasUtil extends Object {
    static getKeyName(key) {
        var commonPhoneStrings = CommonPhoneStrings.getInstance();
        ;
        if (key == Canvas.UP) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return commonPhoneStrings.UP;
        }
        else if (key == Canvas.DOWN) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return commonPhoneStrings.DOWN;
        }
        else if (key == Canvas.RIGHT) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return commonPhoneStrings.RIGHT;
        }
        else if (key == Canvas.LEFT) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return commonPhoneStrings.LEFT;
        }
        else if (key == Canvas.FIRE) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return commonPhoneStrings.FIRE;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return "UNKNOWN KEY";
    }
    constructor() {
        super();
    }
}
