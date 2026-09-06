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
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { PositionStrings } 
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GPoint extends Object {
    static getInstance(point) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new GPoint(point.getX(), point.getY(), point.getZ());
    }
    static toStringStatic(x, y, z) {
        var stringBuffer = new StringMaker();
        ;
        var positionStrings = PositionStrings.getInstance();
        ;
        stringBuffer.append(GPoint.POINT_LABEL);
        stringBuffer.append(positionStrings.X_LABEL);
        stringBuffer.appendint(x);
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(positionStrings.Y_LABEL);
        stringBuffer.appendint(y);
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(positionStrings.Z_LABEL);
        stringBuffer.appendint(z);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    constructor(x, y, z) {
        super();
        this.x = x;
        this.y = y;
        this.z = z;
    }
    getX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.x;
    }
    getY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.y;
    }
    getZ() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.z;
    }
    getRawX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.x;
    }
    getRawY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.y;
    }
    getRawZ() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.z;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GPoint.toStringStatic(this.getX(), this.getY(), this.getZ());
        ;
    }
}
GPoint.POINT_LABEL = "Point: ";
