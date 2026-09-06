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
import { Object } from '../../../../../../java/lang/Object.js';
import { InputFactory } from '../../../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;
import { TouchMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
//not GWT import const TouchMotionGestureFactory = globalThis.org.allbinary.input.motion.gesture.TouchMotionGestureFactory;
import { AllBinaryEventCircularPool } from '../../../../../../org/allbinary/logic/util/event/AllBinaryEventCircularPool.js';
//not GWT import const AllBinaryEventCircularPool = globalThis.org.allbinary.logic.util.event.AllBinaryEventCircularPool;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MotionEventFactory } from './MotionEventFactory.js';
//not GWT import - same folder const MotionGestureEvent = globalThis.org.allbinary.input.motion.gesture.observer.MotionGestureEvent;
export class MotionEventCircularPool extends Object {
    static createPool(id) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new MotionEventCircularPool(id);
    }
    constructor(id) {
        super();
        this.MIN = TouchMotionGestureFactory.getInstance().LAST_MOTION.getId();
        this.eventPool = new AllBinaryEventCircularPool((InputFactory.getInstance().MAX - 1) - this.MIN);
        this.eventPool.initAllBinaryEventCircularPool(new MotionEventFactory(this.eventPool, id));
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    getInstance(motionGestureInput) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.eventPool.getInstance(motionGestureInput.getId() - this.MIN);
    }
}
