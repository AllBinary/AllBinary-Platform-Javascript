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
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicHudFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicHudFactory.instance;
    }
    constructor() {
        super();
        this.DIRECTION_EXCEPTION = "Only Horizontal Direction is Allowed Currently";
        this.VERTICAL = 0;
        this.HORIZONTAL = 1;
        this.BOTTOMLEFT = 0;
        this.BOTTOMRIGHT = 1;
        this.TOPLEFT = 2;
        this.TOPRIGHT = 3;
        this.BOTTOMCENTER = 4;
        this.TOPCENTER = 5;
        this.ABSOLUTE = 6;
    }
}
BasicHudFactory.instance = new BasicHudFactory();
