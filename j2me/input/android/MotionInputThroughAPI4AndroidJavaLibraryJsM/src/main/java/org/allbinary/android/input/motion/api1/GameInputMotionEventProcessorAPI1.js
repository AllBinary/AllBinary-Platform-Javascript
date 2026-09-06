/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2009 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { MotionEvent } from '../../../../../../android/view/MotionEvent.js';
//not GWT import const MotionEvent = globalThis.android.view.MotionEvent;
import { BaseGameInputMotionEventProcessor } from '../../../../../../org/allbinary/android/input/motion/BaseGameInputMotionEventProcessor.js';
//not GWT import const BaseGameInputMotionEventProcessor = globalThis.org.allbinary.android.input.motion.BaseGameInputMotionEventProcessor;
import { AllMotionRecognizer } from '../../../../../../org/allbinary/input/motion/AllMotionRecognizer.js';
//not GWT import const MotionRecognizer = globalThis.org.allbinary.input.motion.MotionRecognizer;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameInputMotionEventProcessorAPI1 extends BaseGameInputMotionEventProcessor {
    static getInstance() {
        if (GameInputMotionEventProcessorAPI1.instance == NullUtil.getInstance().NULL_OBJECT) {
            GameInputMotionEventProcessorAPI1.instance = new GameInputMotionEventProcessorAPI1();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameInputMotionEventProcessorAPI1.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.motionRecognizer = new AllMotionRecognizer();
    }
    process(motionEvent) {
        try {
            var x = Math.round(motionEvent.getX());
            ;
            var y = Math.round(motionEvent.getY());
            ;
            var action = motionEvent.getAction();
            ;
            if (action == MotionEvent.ACTION_DOWN) {
                this.motionRecognizer.processStartMotionEvent(x, y, motionEvent.getDeviceId(), 0);
            }
            else if (action == MotionEvent.ACTION_UP || action == MotionEvent.ACTION_CANCEL) {
                this.motionRecognizer.processEndMotionEvent(x, y, motionEvent.getDeviceId(), 0);
            }
            else if (action == MotionEvent.ACTION_MOVE) {
                this.motionRecognizer.processDraggedMotionEvent(x, y, motionEvent.getDeviceId(), 0);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.PROCESS, e);
        }
    }
}
GameInputMotionEventProcessorAPI1.instance = NullUtil.getInstance().NULL_OBJECT;
