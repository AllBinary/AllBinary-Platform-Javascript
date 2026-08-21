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
import { Integer } from '../../../../java/lang/Integer.js';
import { IndexedAnimationBehavior } from '../../../../org/allbinary/animation/IndexedAnimationBehavior.js';
import { BasicColorFactory } from '../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SpecialAnimation } from './SpecialAnimation.js';
export class TitleAnimation extends SpecialAnimation {
    static createAnimation(animationInterfaceArray, basicColorArray, dxArray, dyArray, y, width) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new TitleAnimation(animationInterfaceArray, basicColorArray, dxArray, dyArray, y, width, new IndexedAnimationBehavior(1, 250));
    }
    constructor(animationInterfaceArray, basicColorArray, dxArray, dyArray, y, width, animationBehavior) {
        super(animationBehavior);
        this.logUtil = LogUtil.getInstance();
        this.deltaX = 0.0;
        this.deltaY = 0.0;
        this.deltaZ = 0.0;
        this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
        this.CLEAR_COLOR = BasicColorFactory.getInstance().CLEAR_COLOR;
        //For kotlin this is before the body of the constructor.
        this.lastFrameStartTime = Date.now();
        this.animationInterfaceArray = animationInterfaceArray;
        this.sizeP = this.animationInterfaceArray.length;
        this.basicColorArray = basicColorArray;
        this.dxArray = dxArray;
        this.dyArray = dyArray;
        this.y = y;
        this.widthP = width;
        this.reset();
    }
    nextFrame() {
        var currentTime = Date.now();
        ;
        var totalTimeElapsed = currentTime - this.lastFrameStartTime;
        ;
        var indexedAnimationBehavior = this.getAnimationBehavior();
        ;
        if (totalTimeElapsed > indexedAnimationBehavior.frameDelayTime) {
            this.previousFrame();
            this.lastFrameStartTime = currentTime;
        }
        if (this.animationInterfaceArray[0].getFrame() == 0) {
            indexedAnimationBehavior.loopIndex++;
        }
    }
    isComplete() {
        var indexedAnimationBehavior = this.getAnimationBehavior();
        ;
        if (indexedAnimationBehavior.loopTotal == -1 || indexedAnimationBehavior.loopIndex < indexedAnimationBehavior.loopTotal || this.getFrame() != 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    setSequence(sequence) {
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimitiveIntUtil.getArrayInstance();
        ;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceArray[0].getSize();
        ;
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceArray[0].getFrame();
        ;
    }
    setFrame(frame) {
        for (var index = 0; index < this.sizeP; index++) {
            this.animationInterfaceArray[index].setFrame(frame);
        }
    }
    setLastFrame() {
        this.setFrame(this.getSize() - 1);
    }
    reset() {
        this.setLastFrame();
        var indexedAnimationBehavior = this.getAnimationBehavior();
        ;
        indexedAnimationBehavior.reset();
    }
    previousFrame() {
        for (var index = 0; index < this.sizeP; index++) {
            this.animationInterfaceArray[index].previousFrame();
        }
    }
    paintFrameXY(graphics, frame, x, y) {
        this.setFrame(frame);
        this.paintXY(graphics, x, y);
    }
    paintXY(graphics, ax, ay) {
        var x = 0;
        ;
        if (this.widthP != Integer.MIN_VALUE) {
            x = ((this.displayInfoSingleton.getLastWidth() - this.widthP) / 2);
        }
        var deltaX = 0;
        ;
        var deltaY = 0;
        ;
        for (var index = 0; index < this.sizeP; index++) {
            deltaX = this.dxArray[index] + x;
            deltaY = this.dyArray[index] + this.y;
            if (this.basicColorArray[index] != this.CLEAR_COLOR) {
                this.basicSetColorUtil.setBasicColorP(graphics, this.basicColorArray[index]);
            }
            this.animationInterfaceArray[index].paintXY(graphics, deltaX, deltaY);
        }
    }
}
