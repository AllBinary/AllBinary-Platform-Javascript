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
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { AngleFactory } 
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not plain js - same folder import { FrameUtil } 
const FrameUtil = globalThis.org.allbinary.math.FrameUtil;
export class AngleIncrementInfo extends Object {
    constructor(angleIncrement) {
        super();
        this.frameUtil = FrameUtil.getInstance();
        this.angleIncrement = angleIncrement;
        var angleFactory = AngleFactory.getInstance();
        ;
        var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        ;
        this.DOWN_FRAME = smallIntegerSingletonFactory.getAt(angleFactory.DOWN.getValue() / this.angleIncrement);
        this.UP_FRAME = smallIntegerSingletonFactory.getAt(Math.round(angleFactory.UP.getValue()));
        this.LEFT_FRAME = smallIntegerSingletonFactory.getAt(angleFactory.LEFT.getValue() / this.angleIncrement);
        this.RIGHT_FRAME = smallIntegerSingletonFactory.getAt(angleFactory.RIGHT.getValue() / this.angleIncrement);
    }
    getFrameAngle(frame) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.frameUtil.getFrameAngle(frame, Math.round(this.angleIncrement));
        ;
    }
    getAngleIncrement() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.angleIncrement;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(AngleIncrementInfo.INCREMENT).appendshort(this.angleIncrement).toString();
        ;
    }
    getClosestGeneralDirection(angle) {
        var closestDirection = SmallIntegerSingletonFactory.getInstance().getAt(360);
        ;
        if (this.UP_FRAME.intValue() - angle < closestDirection.intValue() - angle) {
            closestDirection = this.UP_FRAME;
        }
        if (this.DOWN_FRAME.intValue() - angle < closestDirection.intValue() - angle) {
            closestDirection = this.DOWN_FRAME;
        }
        if (this.LEFT_FRAME.intValue() - angle < closestDirection.intValue() - angle) {
            closestDirection = this.LEFT_FRAME;
        }
        if (this.RIGHT_FRAME.intValue() - angle < closestDirection.intValue() - angle) {
            closestDirection = this.RIGHT_FRAME;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return closestDirection.intValue();
        ;
    }
}
AngleIncrementInfo.INCREMENT = "Inc: ";
