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
//not GWT import const GL = globalThis.javax.microedition.khronos.opengles.GL;
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;
//not plain js import { CircularIndexUtil } from '../../../../org/allbinary/util/CircularIndexUtil.js';
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//not GWT import const CompoundAnimationInterface = globalThis.org.allbinary.animation.compound.CompoundAnimationInterface;
export class CompoundIndexedAnimation extends IndexedAnimation {
    constructor(animationInterfaceArray, animationBehavior) {
        super(animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.animationInterfaceArray = animationInterfaceArray;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.animationInterfaceArray.length);
    }
    setFrame(index) {
        var indexedAnimation = this.animationInterfaceArray[this.circularIndexUtil.getIndex()];
        ;
        indexedAnimation.setFrame(index);
    }
    getFrame() {
        var indexedAnimation = this.animationInterfaceArray[this.circularIndexUtil.getIndex()];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return indexedAnimation.getFrame();
        ;
    }
    getSize() {
        var indexedAnimation = this.animationInterfaceArray[this.circularIndexUtil.getIndex()];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return indexedAnimation.getSize();
        ;
    }
    previousFrame() {
        var indexedAnimation = this.animationInterfaceArray[this.circularIndexUtil.getIndex()];
        ;
        indexedAnimation.previousFrame();
    }
    setSequence(sequence) {
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimitiveIntUtil.getArrayInstance();
        ;
    }
    //@Throws(Exception.constructor)
    nextFrame() {
        this.animationInterfaceArray[this.circularIndexUtil.getIndex()].nextFrame();
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
