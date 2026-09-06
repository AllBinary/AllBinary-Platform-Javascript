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
//not GWT import const Direction = globalThis.org.allbinary.direction.Direction;
import { DirectionUtil } from '../../../org/allbinary/direction/DirectionUtil.js';
//not GWT import const DirectionUtil = globalThis.org.allbinary.direction.DirectionUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { Angle } 
const Angle = globalThis.org.allbinary.math.Angle;
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//not plain js import { FrameUtil } 
const FrameUtil = globalThis.org.allbinary.math.FrameUtil;
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { IndexedAnimation } from './IndexedAnimation.js';
//not GWT import - same folder const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
export class RotationAnimation extends IndexedAnimation {
    constructor(angleInfo, circularIndexUtil, animationBehavior) {
        super(animationBehavior);
        this.frameUtil = FrameUtil.getInstance();
        this.directionUtil = DirectionUtil.getInstance();
        //For kotlin this is before the body of the constructor.
        this.angleInfo = angleInfo;
        this.circularIndexUtil = circularIndexUtil;
    }
    nextRotationX() {
    }
    previousRotationX() {
    }
    nextRotation() {
        this.angleInfo.adjustAngle(this.circularIndexUtil.next());
    }
    previousRotation() {
        this.angleInfo.adjustAngle(this.circularIndexUtil.previous());
    }
    nextRotationZ() {
    }
    previousRotationZ() {
    }
    setFrame(index) {
        this.circularIndexUtil.setIndex(index);
        var newFrame = this.circularIndexUtil.getIndex();
        ;
        this.angleInfo.adjustAngle(newFrame);
    }
    setFrameByDirection(direction) {
        var angle = this.directionUtil.getFrameAngle(direction);
        ;
        this.adjustFrameToAngle(angle);
    }
    setFrameToAngle(angle) {
        this.adjustFrameToAngle(angle);
    }
    adjustFrameToAngle(angle) {
        this.adjustFrame(angle.getValue());
    }
    adjustFrame(angle) {
        this.setFrame(this.frameUtil.getFrameForAngle(angle, Math.round(this.angleInfo.getAngleIncrementInfo().getAngleIncrement())));
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.circularIndexUtil.getIndex();
        ;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.circularIndexUtil.getSize();
        ;
    }
    getAngleInfoP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.angleInfo;
    }
    toString() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StringMaker().append(super.toString()).append("circularIndexUtil: ").append(this.circularIndexUtil.toString()).append("angleInfo: ").append(this.angleInfo.toString()).toString();
        ;
    }
}
