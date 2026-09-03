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
//not plain js import { GPoint } from './GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not plain js import { PointFactory } from './PointFactory.js';
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
export class Line extends Object {
    constructor(p1, p2) {
        super();
        this.deltaX = 0.0;
        this.deltaY = 0.0;
        this.p1 = PointFactory.getInstance().ZERO_ZERO;
        this.p2 = this.p1;
        this.setP1(p1);
        this.setP2(p2);
    }
    getGradient() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getDeltaY() / this.getDeltaX();
    }
    update() {
        this.deltaX = this.getP1().getX() - this.getP2().getX();
        this.deltaY = this.getP1().getY() - this.getP2().getY();
    }
    getDeltaX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.deltaX;
    }
    getDeltaY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.deltaY;
    }
    getP1() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.p1;
    }
    getP2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.p2;
    }
    setP1(p1) {
        this.p1 = p1;
        this.update();
    }
    setP2(p2) {
        this.p2 = p2;
        this.update();
    }
}
