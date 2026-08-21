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
import { GameTickTimeDelayHelperFactory } from '../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
import { TimeDelayHelper } from '../../../org/allbinary/time/TimeDelayHelper.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { VectorAnimation } from './VectorAnimation.js';
export class TimedVectorAnimation extends VectorAnimation {
    constructor(currentPoints, basicColor, animationBehavior) {
        super(currentPoints, basicColor, animationBehavior);
        this.timeElapsedHelper = new TimeDelayHelper(200);
        //For kotlin this is before the body of the constructor.
    }
    nextFrame() {
        if (this.timeElapsedHelper.isTime(GameTickTimeDelayHelperFactory.getInstance().startTime)) {
            super.nextFrame();
        }
    }
}
