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
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicColorUtil } from './BasicColorUtil.js';
//not GWT import - same folder const BasicColorUtil = globalThis.org.allbinary.graphics.color.BasicColorUtil;
export class BasicColor extends Object {
    constructor(alphaValue, value, name) {
        super();
        this.name = name;
        var tempValue = 0;
        ;
        var basicColorUtil = BasicColorUtil.getInstance();
        ;
        if (basicColorUtil.isAlpha) {
            if (basicColorUtil.ffOpaque) {
                tempValue = alphaValue | value;
            }
            else {
                tempValue = 0x00000000 | value;
            }
        }
        else {
            tempValue = value;
        }
        var alphaInt = ((tempValue >> 24) & 255);
        ;
        this.alpha = alphaInt;
        this.alphaComponent = (alphaInt) / 255;
        var redInt = ((tempValue >> 16) & 255);
        ;
        this.red = redInt;
        this.redComponent = (redInt) / 255;
        var greenInt = ((tempValue >> 8) & 255);
        ;
        this.green = greenInt;
        this.greenComponent = (greenInt) / 255;
        var blueInt = ((tempValue) & 255);
        ;
        this.blue = blueInt;
        this.blueComponent = (blueInt) / 255;
        this.value = tempValue;
    }
    intValue() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.value;
    }
    toInt() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.value;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("BasicColor: ");
        stringBuffer.append("Alpha: ");
        stringBuffer.appendshort(this.alpha);
        stringBuffer.append(" Red: ");
        stringBuffer.appendshort(this.red);
        stringBuffer.append(" Green: ");
        stringBuffer.appendshort(this.green);
        stringBuffer.append(" Blue: ");
        stringBuffer.appendshort(this.blue);
        stringBuffer.append(" Value: ");
        stringBuffer.appendint(this.value);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    getRedComponent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.redComponent;
    }
    getGreenComponent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.greenComponent;
    }
    getBlueComponent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.blueComponent;
    }
    getAlphaComponent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.alphaComponent;
    }
}
