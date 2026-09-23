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
import { InputFactory } from '../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory
import { MotionGestureInput } from '../../../../org/allbinary/input/motion/gesture/MotionGestureInput.js';
//not GWT import const MotionGestureInput
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OrientationMotionGestureFactory extends Object {
    static getInstance() {
        if (OrientationMotionGestureFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            OrientationMotionGestureFactory.instance = new OrientationMotionGestureFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return OrientationMotionGestureFactory.instance;
    }
    constructor() {
        super();
        var MAX = InputFactory.getInstance().MAX;
        ;
        this.LEFT = new MotionGestureInput(MAX - 20, "Left Orient");
        this.RIGHT = new MotionGestureInput(MAX - 21, "Right Orient");
        this.UP = new MotionGestureInput(MAX - 22, "Up Orient");
        this.DOWN = new MotionGestureInput(MAX - 23, "Down Orient");
        this.ROLL_LEFT = new MotionGestureInput(MAX - 24, "Roll Left");
        this.ROLL_RIGHT = new MotionGestureInput(MAX - 25, "Roll Right");
    }
}
OrientationMotionGestureFactory.instance = NullUtil.getInstance().NULL_OBJECT;
