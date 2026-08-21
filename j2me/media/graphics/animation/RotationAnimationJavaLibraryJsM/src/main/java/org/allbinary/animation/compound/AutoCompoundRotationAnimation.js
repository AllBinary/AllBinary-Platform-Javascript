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
import { RotationAnimation } from '../../../../org/allbinary/animation/RotationAnimation.js';
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
import { AngleFactory } from '../../../../org/allbinary/math/AngleFactory.js';
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
export class AutoCompoundRotationAnimation extends RotationAnimation {
    constructor(animationInterfaceArray, animationBehavior) {
        super(AngleInfo.getInstance(AngleFactory.getInstance().QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.animationInterfaceArray = animationInterfaceArray;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.animationInterfaceArray.length);
    }
    setFrame(index) {
        this.animationInterfaceArray[this.circularIndexUtil.getIndex()].setFrame(index);
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceArray[this.circularIndexUtil.getIndex()].getFrame();
        ;
    }
    //@Throws(Exception.constructor)
    getAnimationSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceArray[this.circularIndexUtil.getIndex()].getAnimationSize();
        ;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceArray[this.circularIndexUtil.getIndex()].getSize();
        ;
    }
    previousFrame() {
        this.circularIndexUtil.previous();
        this.animationInterfaceArray[this.circularIndexUtil.getIndex()].previousFrame();
    }
    //@Throws(Exception.constructor)
    nextFrame() {
        this.circularIndexUtil.next();
        this.animationInterfaceArray[this.circularIndexUtil.getIndex()].nextFrame();
    }
    previousRotation() {
        this.animationInterfaceArray[this.circularIndexUtil.getIndex()].previousRotation();
    }
    nextRotation() {
        this.animationInterfaceArray[this.circularIndexUtil.getIndex()].nextRotation();
    }
    setSequence(sequence) {
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimitiveIntUtil.getArrayInstance();
        ;
    }
    paintXY(graphics, x, y) {
        this.animationInterfaceArray[this.circularIndexUtil.getIndex()].paintXY(graphics, x, y);
    }
    paintThreedXYZ(graphics, x, y, z) {
        this.animationInterfaceArray[this.circularIndexUtil.getIndex()].paintThreedXYZ(graphics, x, y, z);
    }
    getCurrentAnimation() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceArray[this.circularIndexUtil.getIndex()];
    }
    nextAnimation() {
        var frame = this.getFrame();
        ;
        this.circularIndexUtil.next();
        this.setFrame(frame);
    }
    previousAnimation() {
        var frame = this.getFrame();
        ;
        this.circularIndexUtil.previous();
        this.setFrame(frame);
    }
    setAnimation(index) {
        var frame = this.getFrame();
        ;
        this.circularIndexUtil.setIndex(index);
        this.setFrame(frame);
    }
    setFrameByDirection(direction) {
        this.animationInterfaceArray[this.circularIndexUtil.getIndex()].setFrameByDirection(direction);
    }
    setFrameToAngle(angle) {
        this.animationInterfaceArray[this.circularIndexUtil.getIndex()].setFrameToAngle(angle);
    }
    adjustFrameToAngle(newAngle) {
        this.adjustFrame(newAngle.getValue());
    }
    adjustFrame(angle) {
        this.animationInterfaceArray[this.circularIndexUtil.getIndex()].adjustFrame(angle);
    }
    getAngleInfoP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceArray[this.circularIndexUtil.getIndex()].getAngleInfoP();
        ;
    }
    getAnimationInterfaceArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceArray;
    }
    setAnimationInterfaceArray(animationInterfaceArray) {
        this.animationInterfaceArray = animationInterfaceArray;
    }
    //@Throws(Exception.constructor)
    set(gl) {
        for (var index = this.animationInterfaceArray.length; --index >= 0;) {
            this.animationInterfaceArray[index].set(gl);
        }
    }
}
