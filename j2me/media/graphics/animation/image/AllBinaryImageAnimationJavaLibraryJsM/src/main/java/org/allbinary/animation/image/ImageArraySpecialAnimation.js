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
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
import { GameTickTimeDelayHelperFactory } from '../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageArrayAnimation } from './ImageArrayAnimation.js';
export class ImageArraySpecialAnimation extends ImageArrayAnimation {
    constructor(imageArray, animationBehavior) {
        super(imageArray, animationBehavior);
        this.timeDelayHelper = new TimeDelayHelper(270);
        this.loopCount = 0;
        this.loopCountTotal = 1;
        //For kotlin this is before the body of the constructor.
        this.reset();
    }
    getLoopCount() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.loopCount;
    }
    setLastFrame() {
        this.circularIndexUtil.setIndex(this.circularIndexUtil.getSize() - 1);
    }
    reset() {
        this.setFrame(this.getSize() - 1);
        this.loopCount = 0;
    }
    nextFrame() {
        if (this.getFrame() > 0) {
            if (this.timeDelayHelper.isTime(GameTickTimeDelayHelperFactory.getInstance().startTime)) {
                this.previousFrame();
                if (this.getFrame() == 0) {
                    this.loopCount++;
                }
            }
        }
    }
    isComplete() {
        if (this.loopCount < this.loopCountTotal || this.getFrame() != 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    paintXY(graphics, x, y) {
        x = DisplayInfoSingleton.getInstance().getLastHalfWidth() - (this.getImage(this.circularIndexUtil.getIndex()).getWidth() >> 1);
        y = 5;
        super.paintXY(graphics, x, y);
    }
}
