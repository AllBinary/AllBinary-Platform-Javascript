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
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
import { TextAnimation } from '../../../../org/allbinary/animation/text/TextAnimation.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { GameTickTimeDelayHelperFactory } from '../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CaptionAnimationHelperBase } from './CaptionAnimationHelperBase.js';
import { CaptionAnimation } from './CaptionAnimation.js';
export class CaptionAnimationHelper extends CaptionAnimationHelperBase {
    constructor(captionAnimation, captionDx, captionDy, dx, dy) {
        super();
        this.timeHelper = new TimeDelayHelper(620);
        this.textAnimation = new TextAnimation(StringUtil.getInstance().EMPTY_STRING, AnimationBehavior.getInstance());
        this.animation = NullAnimationFactory.getFactoryInstance().getInstance(0);
        this.captionAnimation = new CaptionAnimation(captionAnimation, this.textAnimation, captionDx, captionDy, dx, dy);
    }
    isShowing() {
        if (this.animation == this.captionAnimation) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    tick() {
        if (this.timeHelper.isTime(GameTickTimeDelayHelperFactory.getInstance().startTime)) {
            this.animation = NullAnimationFactory.getFactoryInstance().getInstance(0);
        }
    }
    update(message, basicColor) {
        this.textAnimation.setBasicColorP(basicColor);
        this.textAnimation.setText(message);
        this.animation = this.captionAnimation;
        this.timeHelper.setStartTimeTNT();
    }
    paintXY(graphics, x, y) {
        this.animation.paintXY(graphics, x, y);
    }
}
