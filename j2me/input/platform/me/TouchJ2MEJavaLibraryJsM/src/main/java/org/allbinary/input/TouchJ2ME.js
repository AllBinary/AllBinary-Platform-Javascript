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
import { AllMotionRecognizer } from '../../../org/allbinary/input/motion/AllMotionRecognizer.js';
import { GameMotionGestureListener } from '../../../org/allbinary/input/motion/gesture/observer/GameMotionGestureListener.js';
import { MotionGestureReceiveInterfaceFactory } from '../../../org/allbinary/input/motion/gesture/observer/MotionGestureReceiveInterfaceFactory.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TouchJ2ME extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.DEVICE_ID = 0;
        this.motionRecognizer = new AllMotionRecognizer();
        var motionGesturesHandler = this.motionRecognizer.getMotionGestureRecognizer().getMotionGesturesHandler();
        ;
        motionGesturesHandler.addListenerInterface(new GameMotionGestureListener(MotionGestureReceiveInterfaceFactory.getInstance()));
    }
    pointerDragged(x, y) {
        try {
            this.motionRecognizer.processDraggedMotionEvent(x, y, DEVICE_ID, 0);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "pointerDragged", e);
        }
    }
    pointerPressed(x, y) {
        try {
            this.motionRecognizer.processStartMotionEvent(x, y, DEVICE_ID, 0);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "pointerPressed", e);
        }
    }
    pointerReleased(x, y) {
        try {
            this.motionRecognizer.processEndMotionEvent(x, y, DEVICE_ID, 0);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "pointerReleased", e);
        }
    }
}
