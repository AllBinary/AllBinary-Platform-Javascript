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
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory = globalThis.org.allbinary.game.input.InputFactory;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { MotionGestureInput } from './MotionGestureInput.js';
//not GWT import - same folder const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;
export class TrackballMotionGestureFactory extends Object {
    static getInstance() {
        if (TrackballMotionGestureFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            TrackballMotionGestureFactory.instance = new TrackballMotionGestureFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return TrackballMotionGestureFactory.instance;
    }
    constructor() {
        super();
        var MAX = InputFactory.getInstance().MAX;
        ;
        this.LEFT = new MotionGestureInput(MAX - 26, "L Trackball");
        this.RIGHT = new MotionGestureInput(MAX - 27, "R Trackball");
        this.UP = new MotionGestureInput(MAX - 28, "Up Trackball");
        this.DOWN = new MotionGestureInput(MAX - 29, "D Trackball");
    }
}
TrackballMotionGestureFactory.instance = NullUtil.getInstance().NULL_OBJECT;
