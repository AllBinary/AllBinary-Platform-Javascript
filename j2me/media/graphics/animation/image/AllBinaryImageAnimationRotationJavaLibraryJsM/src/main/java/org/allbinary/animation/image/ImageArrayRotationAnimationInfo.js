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
/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
import { AngleInfo } from '../../../../org/allbinary/math/AngleInfo.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageArrayRotationAnimationInfo extends Object {
    constructor(imageArray, angleIncrement, totalAngle, dx, dy) {
        super();
        this.imageArray = imageArray;
        this.angleIncrement = angleIncrement;
        this.totalAngle = totalAngle;
        this.dx = dx;
        this.dy = dy;
    }
    setImageArray(imageArray) {
        this.imageArray = imageArray;
    }
    getImageArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.imageArray;
    }
    getAngleInfoP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AngleInfo.getInstance(this.angleIncrement);
        ;
    }
    setTotalAngle(totalAngle) {
        this.totalAngle = totalAngle;
    }
    getTotalAngle() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.totalAngle;
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
