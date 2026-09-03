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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Image } from '../../../../../javax/microedition/lcdui/Image.js';
const Image = globalThis.javax.microedition.lcdui.Image;
//not plain js import { Sprite } from '../../../../../javax/microedition/lcdui/game/Sprite.js';
const Sprite = globalThis.javax.microedition.lcdui.game.Sprite;
//not GWT import const Direction = globalThis.org.allbinary.direction.Direction;
//not plain js import { Angle } from '../../../../../org/allbinary/math/Angle.js';
const Angle = globalThis.org.allbinary.math.Angle;
//not plain js import { AngleFactory } from '../../../../../org/allbinary/math/AngleFactory.js';
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not plain js import { AngleInfo } from '../../../../../org/allbinary/math/AngleInfo.js';
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HackRotationSpriteIndexedAnimation } from './HackRotationSpriteIndexedAnimation.js';
//not GWT import const HackRotationSpriteIndexedAnimation = globalThis.org.allbinary.animation.image.sprite.HackRotationSpriteIndexedAnimation;
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
