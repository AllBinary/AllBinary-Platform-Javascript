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
import { AnimationEventHandler } from '../../../../org/allbinary/animation/AnimationEventHandler.js';
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
import { PrimitiveIntUtil } from '../../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
import { AllBinaryEventObject } from '../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
import { GameTickTimeDelayHelperFactory } from '../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CaptionIndexedAnimation extends IndexedAnimation {
    constructor(animationInterface, movieIndexedAnimationInterface, player, captionDx, captionDy, dx, dy, time, animationBehavior) {
        super(animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.animationInterface = animationInterface;
        this.movieIndexedAnimationInterface = movieIndexedAnimationInterface;
        this.captionDx = captionDx;
        this.captionDy = captionDy;
        this.dx = dx;
        this.dy = dy;
        this.time = time;
        this.END_EVENT = new AllBinaryEventObject(this);
        var timePerFrame = this.time / this.getSize();
        ;
        this.timeDelayHelper = new TimeDelayHelper(timePerFrame);
        this.player = player;
        this.player.start();
    }
    //@Throws(Exception.constructor)
    nextFrame() {
        if (this.timeDelayHelper.isTime(GameTickTimeDelayHelperFactory.getInstance().startTime)) {
            this.movieIndexedAnimationInterface.nextFrame();
        }
        if (this.isLastFrame()) {
            AnimationEventHandler.getInstance().fireEvent(this.END_EVENT);
        }
    }
    isLastFrame() {
        if (this.movieIndexedAnimationInterface.getFrame() == this.getSize() - 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    previousFrame() {
        this.movieIndexedAnimationInterface.previousFrame();
    }
    setFrame(index) {
        this.movieIndexedAnimationInterface.setFrame(index);
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.movieIndexedAnimationInterface.getFrame();
        ;
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.movieIndexedAnimationInterface.getSize();
        ;
    }
    setSequence(sequence) {
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimitiveIntUtil.getArrayInstance();
        ;
    }
    paintXY(graphics, x, y) {
        this.animationInterface.paintXY(graphics, x + this.captionDx, y + this.captionDy);
        this.movieIndexedAnimationInterface.paintXY(graphics, x + this.captionDx + this.dx, y + this.captionDy + this.dy);
    }
    paintThreedXYZ(graphics, x, y, z) {
        this.animationInterface.paintThreedXYZ(graphics, x + this.captionDx, y + this.captionDy, z);
        this.movieIndexedAnimationInterface.paintThreedXYZ(graphics, x + this.captionDx + this.dx, y + this.captionDy + this.dy, z);
    }
}
