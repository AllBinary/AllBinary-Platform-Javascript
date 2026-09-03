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
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ViewPosition } from './ViewPosition.js';
//not GWT import const ViewPosition = globalThis.org.allbinary.view.ViewPosition;
export class StaticViewPosition extends ViewPosition {
    constructor(x, y, z) {
        super(x, y, z);
        //For kotlin this is before the body of the constructor.
    }
    getX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getRawX();
        ;
    }
    getY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getRawY();
        ;
    }
    getZ() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getRawZ();
        ;
    }
}
