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
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicAccelerationProperties extends Object {
    constructor(forward, reverse) {
        super();
        this.forward = 0;
        this.reverse = 0;
        this.setForward(forward);
        this.setReverse(reverse);
    }
    setReverse(reverse) {
        this.reverse = reverse;
    }
    getReverse() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.reverse;
    }
    setForward(forward) {
        this.forward = forward;
    }
    getForward() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.forward;
    }
}
