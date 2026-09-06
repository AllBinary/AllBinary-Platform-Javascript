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
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
//not plain js import { Sprite } 
const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;
//not GWT import const Direction = globalThis.org.allbinary.direction.Direction;
//not plain js import { Angle } 
const Angle = globalThis.org.allbinary.math.Angle;
//not plain js import { AngleFactory } 
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HackRotationSpriteIndexedAnimation } from './HackRotationSpriteIndexedAnimation.js';
//not GWT import - same folder const HackRotationSpriteIndexedAnimation = globalThis.org.allbinary.animation.image.sprite.HackRotationSpriteIndexedAnimation;
export class AllBinarySpriteRotationAnimation extends HackRotationSpriteIndexedAnimation {
    constructor(sprite, image, animationBehavior) {
        super(sprite, image, AngleInfo.getInstance((AngleFactory.getInstance().TOTAL_ANGLE / sprite.getRawFrameCount())), animationBehavior);
        //For kotlin this is before the body of the constructor.
        this.angleInfo.adjustAngle(this.sprite.getFrame());
    }
    nextRotation() {
        this.sprite.nextFrame();
        this.angleInfo.adjustAngle(this.sprite.getFrame());
    }
    previousRotation() {
        this.sprite.prevFrame();
        this.angleInfo.adjustAngle(this.sprite.getFrame());
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
        this.sprite.setFrame(index);
        this.angleInfo.adjustAngle(this.getFrame());
    }
    adjustFrameToAngle(angle) {
        this.adjustFrame(angle.getValue());
    }
    adjustFrame(angle) {
        this.setFrame(this.frameUtil.getFrameForAngle(angle, Math.round(this.angleInfo.getAngleIncrementInfo().getAngleIncrement())));
    }
}
