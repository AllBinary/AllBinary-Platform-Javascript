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
import { BasicMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
//not GWT import const BasicMotionGesturesHandler = globalThis.org.allbinary.input.motion.gesture.observer.BasicMotionGesturesHandler;
import { GameMotionGestureListener } from '../../../../../org/allbinary/input/motion/gesture/observer/GameMotionGestureListener.js';
//not GWT import const GameMotionGestureListener = globalThis.org.allbinary.input.motion.gesture.observer.GameMotionGestureListener;
import { MotionGestureReceiveInterfaceFactory } from '../../../../../org/allbinary/input/motion/gesture/observer/MotionGestureReceiveInterfaceFactory.js';
//not GWT import const MotionGestureReceiveInterfaceFactory = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureReceiveInterfaceFactory;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MotionEventProcessor } from './MotionEventProcessor.js';
//not GWT import - same folder const MotionEventProcessor = globalThis.org.allbinary.android.input.motion.MotionEventProcessor;
export class BaseGameInputMotionEventProcessor extends MotionEventProcessor {
    constructor() {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.gameMotionGestureListener = new GameMotionGestureListener(MotionGestureReceiveInterfaceFactory.getInstance());
        this.addListener();
    }
    process(motionEvent) {
    }
    addListener() {
        var motionGesturesHandler = BasicMotionGesturesHandler.getInstance();
        ;
        motionGesturesHandler.addListenerInterface(this.gameMotionGestureListener);
    }
}
