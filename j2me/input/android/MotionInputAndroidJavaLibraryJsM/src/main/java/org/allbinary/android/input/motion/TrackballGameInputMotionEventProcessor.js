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
//not GWT import const MotionEvent = globalThis.android.view.MotionEvent;
import { SingleKeyPressGameKeyFromMotionGestureEventListener } from '../../../../../org/allbinary/game/input/motion/action/SingleKeyPressGameKeyFromMotionGestureEventListener.js';
//not GWT import const SingleKeyPressGameKeyFromMotionGestureEventListener = globalThis.org.allbinary.game.input.motion.action.SingleKeyPressGameKeyFromMotionGestureEventListener;
import { DownTrackballInputToGameKeyEventAction } from '../../../../../org/allbinary/input/motion/trackball/action/DownTrackballInputToGameKeyEventAction.js';
//not GWT import const DownTrackballInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.trackball.action.DownTrackballInputToGameKeyEventAction;
import { LeftTrackballInputToGameKeyEventAction } from '../../../../../org/allbinary/input/motion/trackball/action/LeftTrackballInputToGameKeyEventAction.js';
//not GWT import const LeftTrackballInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.trackball.action.LeftTrackballInputToGameKeyEventAction;
import { RightTrackballInputToGameKeyEventAction } from '../../../../../org/allbinary/input/motion/trackball/action/RightTrackballInputToGameKeyEventAction.js';
//not GWT import const RightTrackballInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.trackball.action.RightTrackballInputToGameKeyEventAction;
import { UpTrackballInputToGameKeyEventAction } from '../../../../../org/allbinary/input/motion/trackball/action/UpTrackballInputToGameKeyEventAction.js';
//not GWT import const UpTrackballInputToGameKeyEventAction = globalThis.org.allbinary.input.motion.trackball.action.UpTrackballInputToGameKeyEventAction;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MotionEventProcessor } from './MotionEventProcessor.js';
//not GWT import - same folder const MotionEventProcessor = globalThis.org.allbinary.android.input.motion.MotionEventProcessor;
export class TrackballGameInputMotionEventProcessor extends MotionEventProcessor {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return TrackballGameInputMotionEventProcessor.PROCESSOR;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.listener = new SingleKeyPressGameKeyFromMotionGestureEventListener();
        this.commonStrings = CommonStrings.getInstance();
    }
    process(motionEvent) {
        try {
            var x = motionEvent.getX();
            ;
            var y = motionEvent.getY();
            ;
            if (x < 0) {
                this.listener.onCompleteMotionGestureInputEvent(LeftTrackballInputToGameKeyEventAction.getInstance());
            }
            else if (x > 0) {
                this.listener.onCompleteMotionGestureInputEvent(RightTrackballInputToGameKeyEventAction.getInstance());
            }
            if (y < 0) {
                this.listener.onCompleteMotionGestureInputEvent(UpTrackballInputToGameKeyEventAction.getInstance());
            }
            else if (y > 0) {
                this.listener.onCompleteMotionGestureInputEvent(DownTrackballInputToGameKeyEventAction.getInstance());
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.PROCESS, e);
        }
    }
}
TrackballGameInputMotionEventProcessor.PROCESSOR = new TrackballGameInputMotionEventProcessor();
