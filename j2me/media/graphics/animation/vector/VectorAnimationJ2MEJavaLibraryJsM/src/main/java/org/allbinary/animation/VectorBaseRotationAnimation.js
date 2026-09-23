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
//not GWT import const AngleInfo
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RotationAnimation } from './RotationAnimation.js';
//not GWT import - same folder const AnimationBehavior
export class VectorBaseRotationAnimation extends RotationAnimation {
    constructor(angleInfo, currentPoints, basicColor, animationBehavior) {
        super(angleInfo, CircularIndexUtil.createInstance(360 / angleInfo.getAngleIncrementInfo().getAngleIncrement()), animationBehavior);
        this.logUtil = LogUtil.getInstance();
        this.currentPoints = NullUtil.getInstance().NULL_INT_ARRAY_ARRAY_ARRAY;
        //For kotlin this is before the body of the constructor.
        this.setPoints(currentPoints);
        this.setBasicColorP(basicColor);
    }
    //@Throws(Exception.constructor)
    getAnimationSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getSize();
        ;
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.circularIndexUtil.getIndex();
        ;
    }
    setFrame(index) {
        this.circularIndexUtil.setIndex(index);
    }
    nextFrame() {
        this.circularIndexUtil.next();
    }
    previousFrame() {
        this.circularIndexUtil.previous();
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
    paintXY(graphics, x, y) {
        this.basicSetColorUtil.setBasicColorP(graphics, this.basicColor);
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
    getPoints(frame) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentPoints[frame];
    }
    setPoints(currentPoints) {
        this.currentPoints = currentPoints;
        this.circularIndexUtil = CircularIndexUtil.createInstance(this.currentPoints.length);
    }
}
