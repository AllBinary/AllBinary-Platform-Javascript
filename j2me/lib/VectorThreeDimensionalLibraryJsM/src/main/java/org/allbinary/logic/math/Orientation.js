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
//not plain js - same folder import { BasicDecimal } 
const BasicDecimal = globalThis.org.allbinary.logic.math.BasicDecimal;
export class Orientation extends Object {
    static getInstance(yaw, pitch, roll) {
        Orientation.SINGLETON.yaw.setint(yaw);
        Orientation.SINGLETON.pitch.setint(pitch);
        Orientation.SINGLETON.roll.setint(roll);
        //if statement needs to be on the same line and ternary does not work the same way.
        return Orientation.SINGLETON;
    }
    constructor(yaw, pitch, roll) {
        super();
        this.yaw = new BasicDecimal(0);
        this.pitch = new BasicDecimal(0);
        this.roll = new BasicDecimal(0);
        this.yaw.setint(yaw);
        this.pitch.setint(pitch);
        this.roll.setint(roll);
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Y: ");
        stringBuffer.append(this.yaw.toString());
        stringBuffer.append(" P: ");
        stringBuffer.append(this.pitch.toString());
        stringBuffer.append(" R: ");
        stringBuffer.append(this.roll.toString());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
Orientation.NONE = new Orientation(0, 0, 0);
Orientation.SINGLETON = new Orientation(0, 0, 0);
