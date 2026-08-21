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
import { Object } from '../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AllMotionRecognizer extends Object {
    constructor() {
        super();
        this.id = AllMotionRecognizer.index++;
    }
    //@Throws(Exception.constructor)
    processStartMotionEvent(x, y, deviceId, modifiers) {
    }
    //@Throws(Exception.constructor)
    processEndMotionEvent(x, y, deviceId, modifiers) {
    }
    //@Throws(Exception.constructor)
    processDraggedMotionEvent(x, y, deviceId, modifiers) {
    }
    //@Throws(Exception.constructor)
    processMovedMotionEvent(x, y, deviceId, modifiers) {
    }
    //@Throws(Exception.constructor)
    processScrolledMotionEvent(x, y, deviceId, modifiers) {
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.id;
    }
}
AllMotionRecognizer.index = 0;
