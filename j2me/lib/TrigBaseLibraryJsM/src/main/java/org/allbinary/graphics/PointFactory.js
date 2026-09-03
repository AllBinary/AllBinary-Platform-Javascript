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
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { GPoint } from './GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
export class PointFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PointFactory.instance;
    }
    init() {
    }
    constructor() {
        super();
        this.ZERO_ZERO = this.createXYZ(0, 0, 0);
    }
    createXY(x, y) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new GPoint(x, y, 0);
    }
    createXYZ(x, y, z) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new GPoint(x, y, z);
    }
}
PointFactory.instance = new PointFactory();
