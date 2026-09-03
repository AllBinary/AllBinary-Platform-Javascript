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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { GPoint } from '../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ViewPositionBase extends GPoint {
    constructor(x, y, z) {
        super(x, y, z);
        //For kotlin this is before the body of the constructor.
    }
    getX2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getX();
        ;
    }
    getY2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getY();
        ;
    }
    getZ2() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getZ();
        ;
    }
    setAllbinaryLayer(allbinaryLayer = {}) {
    }
}
ViewPositionBase.NULL_VIEW_POSITION = new ViewPositionBase(0, 0, 0);
