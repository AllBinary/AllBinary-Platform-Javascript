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
//not GWT import const AnimationBehavior
import { RotationAnimation } from '../../../../../org/allbinary/animation/RotationAnimation.js';
//not GWT import const RotationAnimation
import { PrimitiveIntUtil } from '../../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//not GWT import const AngleInfo
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class HackRotationSpriteIndexedAnimation extends RotationAnimation {
    constructor(sprite, image, angleInfo, animationBehavior) {
        super(angleInfo, CircularIndexUtil.createInstance(360 / angleInfo.getAngleIncrementInfo().getAngleIncrement()), animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.sprite = sprite;
        this.image = image;
    }
    //@Throws(Exception.constructor)
    getAnimationSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getSize();
        ;
    }
    paintFrame(g, frame, x, y) {
        this.setFrame(frame);
        this.paintXY(g, x, y);
    }
    paintXY(g, x, y) {
        this.sprite.setPosition(x, y);
        this.paint(g);
    }
    paint(g) {
        this.sprite.paint(g);
    }
    nextRotation() {
        this.sprite.nextFrame();
    }
    previousRotation() {
        this.sprite.prevFrame();
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sprite.getRawFrameCount();
        ;
    }
    setFrame(frame) {
        this.sprite.setFrame(frame);
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.sprite.getFrame();
        ;
    }
    setSequence(sequence) {
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimitiveIntUtil.getArrayInstance();
        ;
    }
}
