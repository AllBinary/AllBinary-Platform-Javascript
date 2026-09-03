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
import { TouchButtonRecognizer } from '../../../../org/allbinary/input/motion/button/TouchButtonRecognizer.js';
//not GWT import const TouchButtonRecognizer = globalThis.org.allbinary.input.motion.button.TouchButtonRecognizer;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MotionRecognizer } from './MotionRecognizer.js';
//not GWT import const MotionRecognizer = globalThis.org.allbinary.input.motion.MotionRecognizer;
export class OnlyTouchButtonRecognizer extends MotionRecognizer {
    constructor() {
        super();
        this.touchButtonProcessing = false;
        this.touchButtonRecognizer = new TouchButtonRecognizer();
    }
    //@Throws(Exception.constructor)
    processStartMotionEvent(x, y, deviceId, modifiers) {
        if (this.touchButtonRecognizer.pressTouchButtonInput(x, y, deviceId)) {
            this.touchButtonProcessing = true;
        }
    }
    //@Throws(Exception.constructor)
    processEndMotionEvent(x, y, deviceId, modifiers) {
        if (this.touchButtonProcessing) {
            this.touchButtonProcessing = false;
        }
        if (this.touchButtonRecognizer.releaseTouchButtonInput(x, y, deviceId)) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
    }
    //@Throws(Exception.constructor)
    processDraggedMotionEvent(x, y, deviceId, modifiers) {
        if (this.touchButtonProcessing) {
            this.touchButtonRecognizer.pressTouchButtonInput(x, y, deviceId);
        }
    }
}
