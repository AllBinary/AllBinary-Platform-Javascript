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
import { TouchMotionGestureFactory } from '../../../../../../org/allbinary/input/motion/gesture/TouchMotionGestureFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MotionGestureEvent } from './MotionGestureEvent.js';
export class MotionEventFactory extends Object {
    constructor(source = {}, id) {
        super();
        this.source = source;
        this.id = id;
        MotionEventFactory.index = TouchMotionGestureFactory.getInstance().LAST_MOTION.getId();
    }
    getInstance() {
        var inputFactory = InputFactory.getInstance();
        ;
        var input = inputFactory.getInstanceById(MotionEventFactory.index++);
        ;
        if (input == inputFactory.NO_INPUT) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new MotionGestureEvent(this.source, this.id, TouchMotionGestureFactory.getInstance().NO_MOTION);
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new MotionGestureEvent(this.source, this.id, input);
        }
    }
}
MotionEventFactory.index = 0;
