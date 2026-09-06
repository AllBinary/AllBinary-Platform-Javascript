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
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;
export class CustomGPoint extends GPoint {
    static getInstance(point) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new CustomGPoint(point.getX(), point.getY(), point.getZ());
    }
    static getInstance3(x, y) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new CustomGPoint(x, y, 3);
    }
    constructor(x, y, z) {
        super(x, y, z);
        this.cx = 0;
        this.cy = 0;
        this.cz = 0;
        //For kotlin this is before the body of the constructor.
    }
    setX(x) {
        this.cx = x;
    }
    getX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cx;
    }
    setY(y) {
        this.cy = y;
    }
    getY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cy;
    }
    setZ(z) {
        this.cz = z;
    }
    getZ() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.cz;
    }
}
CustomGPoint.NULL_CUSTOM_POINT = new CustomGPoint(0, 0, 0);
