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
import { Object } from '../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js - same folder import { AngleFactory } 
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
export class FrameUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return FrameUtil.instance;
    }
    constructor() {
        super();
    }
    getFrameForAngle(angle, angleIncrement) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adjustAngleToFrameAngle(Math.round(angle)) / angleIncrement;
    }
    getFrameAngle(frame, angleIncrement) {
        var frameAngle = angleIncrement * frame - 90;
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adjustAngleToFrameAngle(frameAngle);
        ;
    }
    adjustAngleToFrameAngle(currentAngle) {
        var angleFactory = AngleFactory.getInstance();
        ;
        if (currentAngle > 359) {
            currentAngle = (currentAngle - angleFactory.TOTAL_ANGLE);
            while (currentAngle > 359) {
                currentAngle = (currentAngle - angleFactory.TOTAL_ANGLE);
            }
        }
        if (currentAngle < 0) {
            currentAngle = (currentAngle + angleFactory.TOTAL_ANGLE);
            while (currentAngle < 0) {
                currentAngle = (currentAngle + angleFactory.TOTAL_ANGLE);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return currentAngle;
    }
}
FrameUtil.instance = new FrameUtil();
