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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageArrayRotationAnimation } from './ImageArrayRotationAnimation.js';
//TWB - Adjustments should be done in the resource creation and not at the animation level
export class AdjustedImageArrayRotationAnimation extends ImageArrayRotationAnimation {
    //@Throws(Exception.constructor)
    static createAdjustedImageArrayRotationAnimationInfo(anyType = {}, animationBehavior) {
        var imageRotationAnimationInfo = anyType;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AdjustedImageArrayRotationAnimation(imageRotationAnimationInfo.getImageArray(), imageRotationAnimationInfo.getAngleInfoP(), imageRotationAnimationInfo.getTotalAngle(), imageRotationAnimationInfo.getDx(), imageRotationAnimationInfo.getDy(), animationBehavior);
    }
    //@Throws(Exception.constructor)
    static createAnimation(imageArray, angleInfo, totalAngle, animationBehavior) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new AdjustedImageArrayRotationAnimation(imageArray, angleInfo, totalAngle, -(imageArray[0].getWidth() >> 2), -(imageArray[0].getHeight() >> 2), animationBehavior);
    }
    constructor(imageArray, angleInfo, totalAngle, dx, dy, animationBehavior) {
        super(imageArray, angleInfo, totalAngle, animationBehavior);
        this.dx = 0;
        this.dy = 0;
        //For kotlin this is before the body of the constructor.
        this.init(dx, dy);
    }
    //@Throws(Exception.constructor)
    init(dx, dy) {
        this.setDx(dx);
        this.setDy(dy);
    }
    paintXY(graphics, x, y) {
        super.paintXY(graphics, x + this.dx, y + this.dy);
    }
    setDx(dx) {
        this.dx = dx;
    }
    getDx() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.dx;
    }
    setDy(dy) {
        this.dy = dy;
    }
    getDy() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.dy;
    }
}
