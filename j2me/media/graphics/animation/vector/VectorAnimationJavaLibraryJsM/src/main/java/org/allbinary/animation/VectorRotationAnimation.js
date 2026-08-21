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
import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VectorBaseRotationAnimation } from './VectorBaseRotationAnimation.js';
export class VectorRotationAnimation extends VectorBaseRotationAnimation {
    constructor(currentPoints, basicColor, animationBehavior) {
        super(AngleInfo.getInstance((AngleFactory.getInstance().TOTAL_ANGLE / currentPoints.length)), currentPoints, basicColor, animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.angleInfo.adjustAngle(this.getFrame());
    }
    setFrameByDirection(direction) {
        var angle = this.directionUtil.getFrameAngle(direction);
        ;
        this.adjustFrameToAngle(angle);
    }
    setFrameToAngle(angle) {
        this.adjustFrameToAngle(angle);
    }
    setFrame(index) {
        super.setFrame(index);
        this.angleInfo.adjustAngle(this.getFrame());
    }
    adjustFrame(newAngle) {
        this.setFrame(this.frameUtil.getFrameForAngle(newAngle, Math.round(this.angleInfo.getAngleIncrementInfo().getAngleIncrement())));
    }
    adjustFrameToAngle(newAngle) {
        this.adjustFrame(newAngle.getValue());
    }
}
