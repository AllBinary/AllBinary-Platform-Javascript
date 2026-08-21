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
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SimultaneousCompoundIndexAnimation extends IndexedAnimation {
    constructor(animationInterfaceArray, animationBehavior) {
        super(animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.animationInterfaceArray = animationInterfaceArray;
    }
    setFrame(frameIndex) {
        for (var index = this.animationInterfaceArray.length; --index >= 0;) {
            this.animationInterfaceArray[index].setFrame(frameIndex);
        }
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceArray[0].getFrame();
        ;
    }
    //@Throws(Exception.constructor)
    getAnimationSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceArray[0].getAnimationSize();
        ;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceArray[0].getSize();
        ;
    }
    previousFrame() {
        for (var index = this.animationInterfaceArray.length; --index >= 0;) {
            this.animationInterfaceArray[index].previousFrame();
        }
    }
    //@Throws(Exception.constructor)
    nextFrame() {
        for (var index = this.animationInterfaceArray.length; --index >= 0;) {
            this.animationInterfaceArray[index].nextFrame();
        }
    }
    setSequence(sequence) {
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimitiveIntUtil.getArrayInstance();
        ;
    }
    paintXY(graphics, x, y) {
        for (var index = this.animationInterfaceArray.length; --index >= 0;) {
            this.animationInterfaceArray[index].paintXY(graphics, x, y);
        }
    }
    paintThreedXYZ(graphics, x, y, z) {
        for (var index = this.animationInterfaceArray.length; --index >= 0;) {
            this.animationInterfaceArray[index].paintThreedXYZ(graphics, x, y, z);
        }
    }
    //@Throws(Exception.constructor)
    set(gl) {
        for (var index = this.animationInterfaceArray.length; --index >= 0;) {
            this.animationInterfaceArray[index].set(gl);
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
