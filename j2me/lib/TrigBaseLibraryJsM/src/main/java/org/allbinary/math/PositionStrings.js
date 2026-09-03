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
export class PositionStrings extends Object {
    constructor() {
        super(...arguments);
        this.X = "x";
        this.Y = "y";
        this.X_LABEL = "x: ";
        this.Y_LABEL = "y: ";
        this.Z_LABEL = "z: ";
        this.DX_LABEL = "dx: ";
        this.DY_LABEL = "dy: ";
        this.DZ_LABEL = "dz: ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PositionStrings.instance;
    }
}
PositionStrings.instance = new PositionStrings();
