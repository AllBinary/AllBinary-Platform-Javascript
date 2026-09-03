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
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;
//not plain js import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SimultaneousCompoundIndexedAnimation extends IndexedAnimation {
    constructor(animationInterfaceArray, animationBehavior) {
        super(animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.animationInterfaceArray = animationInterfaceArray;
    }
    setFrame(frameIndex) {
        var indexedAnimation;
        ;
        for (var index = this.animationInterfaceArray.length; --index >= 0;) {
            indexedAnimation = this.animationInterfaceArray[index];
            indexedAnimation.setFrame(frameIndex);
        }
    }
    getFrame() {
        var indexedAnimation = this.animationInterfaceArray[0];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return indexedAnimation.getFrame();
        ;
    }
    getSize() {
        var indexedAnimation = this.animationInterfaceArray[0];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return indexedAnimation.getSize();
        ;
    }
    previousFrame() {
        var indexedAnimation;
        ;
        for (var index = this.animationInterfaceArray.length; --index >= 0;) {
            indexedAnimation = this.animationInterfaceArray[index];
            indexedAnimation.previousFrame();
        }
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
        for (var index = this.animationInterfaceArray.length; --index >= 0;) {
            this.animationInterfaceArray[index].nextFrame();
        }
    }
    paintXY(graphics, x, y) {
        var size = this.animationInterfaceArray.length;
        ;
        for (var index = 0; index < size; index++) {
            this.animationInterfaceArray[index].paintXY(graphics, x, y);
        }
    }
    paintThreedXYZ(graphics, x, y, z) {
        var size = this.animationInterfaceArray.length;
        ;
        for (var index = 0; index < size; index++) {
            this.animationInterfaceArray[index].paintThreedXYZ(graphics, x, y, z);
        }
    }
    getAnimationInterfaceArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceArray;
    }
    setAnimationInterfaceArray(animationInterfaceArray) {
        this.animationInterfaceArray = animationInterfaceArray;
    }
}
