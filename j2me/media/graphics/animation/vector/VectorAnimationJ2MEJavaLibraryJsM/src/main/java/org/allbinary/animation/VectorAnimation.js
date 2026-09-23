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
//not GWT import const BasicColor
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { PrimitiveIntUtil } from '../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//not GWT import const PrimitiveIntUtil
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { IndexedAnimation } from './IndexedAnimation.js';
//not GWT import - same folder const AnimationBehavior
export class VectorAnimation extends IndexedAnimation {
    static createVectorAnimation(currentPoints2, basicColor, animationBehavior) {
        var currentPoints = Array.from({ length: 1 }, () => Array.from({ length: currentPoints2.length }, () => new Array(0).fill(2)));
        ;
        var size = currentPoints2.length;
        ;
        for (var index = 0; index < size; index++) {
            currentPoints[0][index][0] = currentPoints2[index][0];
            currentPoints[0][index][1] = currentPoints2[index][1];
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return new VectorAnimation(currentPoints, basicColor, animationBehavior);
    }
    constructor(currentPoints, basicColor, animationBehavior) {
        super(animationBehavior);
        this.logUtil = LogUtil.getInstance();
        this.currentPoints = NullUtil.getInstance().NULL_INT_ARRAY_ARRAY_ARRAY;
        this.circularIndexUtil = CircularIndexUtil.createInstance(0);
        //For kotlin this is before the body of the constructor.
        this.setPoints(currentPoints);
        this.setBasicColorP(basicColor);
    }
    setBasicColorP(basicColor) {
        var changed = false;
        ;
        if (this.getBasicColorP() ==
            null
            || this.getBasicColorP().intValue() != basicColor.intValue()) {
            changed = true;
        }
        super.setBasicColorP(basicColor);
        if (changed) {
            this.updateModifiers();
        }
    }
    changeBasicColor(basicColor) {
        var changed = false;
        ;
        if (this.getChangeBasicColor() ==
            null
            || this.getChangeBasicColor().intValue() != basicColor.intValue()) {
            changed = true;
        }
        super.changeBasicColor(basicColor);
        if (changed) {
            this.updateModifiers();
        }
    }
    setAlpha(alpha) {
        var changed = false;
        ;
        if (this.alphaP != alpha) {
            changed = true;
        }
        super.setAlpha(alpha);
        if (changed) {
            this.updateModifiers();
        }
    }
    setScale(scaleX, scaleY) {
    }
    setMaxScale(maxScaleX, maxScaleY) {
    }
    updateModifiers() {
    }
    //@Throws(Exception.constructor)
    getAnimationSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getSize();
        ;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentPoints.length;
    }
    setSequence(sequence) {
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimitiveIntUtil.getArrayInstance();
        ;
    }
    nextFrame() {
        this.circularIndexUtil.next();
    }
    previousFrame() {
        this.circularIndexUtil.previous();
    }
    paintVectors(graphics, x, y) {
        try {
            var nextPointX = 0;
            ;
            var nextPointY = 0;
            ;
            var nextPoint;
            ;
            var point;
            ;
            var currentPointsFrame = this.currentPoints[this.circularIndexUtil.getIndex()];
            ;
            var size = currentPointsFrame.length;
            ;
            var index = size - 2;
            ;
            while (--index >= 0) {
                nextPoint = currentPointsFrame[index];
                point = currentPointsFrame[index + 1];
                nextPointX = nextPoint[0];
                nextPointY = nextPoint[1];
                if (nextPointX != 1000) {
                    graphics.drawLine(point[0] + x, point[1] + y, nextPointX + x, nextPointY + y);
                }
                else {
                    index--;
                }
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "paintVectors", e);
        }
    }
    paintXY(graphics, x, y) {
        this.basicSetColorUtil.setBasicColorP(graphics, this.basicColor);
        this.paintVectors(graphics, x, y);
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.circularIndexUtil.getIndex();
        ;
    }
    setFrame(index) {
        this.circularIndexUtil.setIndex(index);
    }
    getPoints(frame) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentPoints[frame];
    }
    setPoints(currentPoints) {
        this.currentPoints = currentPoints;
        this.circularIndexUtil = CircularIndexUtil.createInstance(currentPoints.length);
    }
}
