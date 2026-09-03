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
export class ItemColorFactory extends Object {
    constructor() {
        super(...arguments);
        this.INVERT_PAINT = Math.round(0xFF000000);
        this.PAINT = Math.round(0xFFe07718);
        this.TEXT_FIELD_NO_FOCUS = 0x7F7F7F;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ItemColorFactory.instance;
    }
}
ItemColorFactory.instance = new ItemColorFactory();
