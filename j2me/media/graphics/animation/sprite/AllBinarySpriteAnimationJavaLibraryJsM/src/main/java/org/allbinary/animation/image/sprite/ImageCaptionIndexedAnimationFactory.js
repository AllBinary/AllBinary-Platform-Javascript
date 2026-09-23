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
import { Object } from '../../../../../java/lang/Object.js';
import { Exception } from '../../../../../java/lang/Exception.js';
//not GWT import const Animation
import { AnimationBehaviorFactory } from '../../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const IndexedAnimation
import { CaptionIndexedAnimation } from '../../../../../org/allbinary/animation/caption/CaptionIndexedAnimation.js';
//not GWT import const CaptionIndexedAnimation
import { ImageAnimation } from '../../../../../org/allbinary/animation/image/ImageAnimation.js';
//not GWT import const ImageAnimation
import { BasicColorUtil } from '../../../../../org/allbinary/graphics/color/BasicColorUtil.js';
//not GWT import const BasicColorUtil
import { AnimationFactoryImageScaleUtil } from '../../../../../org/allbinary/image/AnimationFactoryImageScaleUtil.js';
//not GWT import const AnimationFactoryImageScaleUtil
import { AnimationFactorySpriteScaleUtil } from '../../../../../org/allbinary/image/sprite/AnimationFactorySpriteScaleUtil.js';
//not GWT import const AnimationFactorySpriteScaleUtil
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
import { ScaleProperties } from '../../../../../org/allbinary/media/ScaleProperties.js';
//not GWT import const Sound
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SpriteIndexedAnimation } from './SpriteIndexedAnimation.js';
//not GWT import - same folder const SpriteIndexedAnimation
export class ImageCaptionIndexedAnimationFactory extends Object {
    constructor(captionImage, spriteMovieImage, soundInterface, frameWidth, frameHeight, captionDx, captionDy, dx, dy, time, animationBehaviorFactory) {
        super();
        this.animationFactoryImageScaleUtil = AnimationFactoryImageScaleUtil.getInstance();
        this.animationFactorySpriteScaleUtil = AnimationFactorySpriteScaleUtil.getInstance();
        this.scaleProperties = ScaleProperties.instance;
        if (animationBehaviorFactory == AnimationBehaviorFactory.getInstance()) {
            ForcedLogUtil.log("Using default AnimationBehaviorFactory with IndexedAnimationFactory", this);
        }
        this.captionImage = captionImage;
        this.spriteMovieImage = spriteMovieImage;
        this.frameWidth = frameWidth;
        this.frameHeight = frameHeight;
        this.captionDx = captionDx;
        this.captionDy = captionDy;
        this.dx = dx;
        this.dy = dy;
        this.time = time;
        this.soundInterface = soundInterface;
        this.animationBehaviorFactory = animationBehaviorFactory;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var scaledImage = this.animationFactoryImageScaleUtil.createImage(this.captionImage, this.captionImage.getWidth(), this.captionImage.getHeight(), this.scaleProperties.scaleWidth, this.scaleProperties.scaleHeight);
        ;
        var animationInterface = new ImageAnimation(scaledImage, this.animationBehaviorFactory.getOrCreateInstance());
        ;
        var sprite = this.animationFactorySpriteScaleUtil.createImage(this.spriteMovieImage, this.frameWidth, this.frameHeight, this.scaleProperties.scaleWidth, this.scaleProperties.scaleHeight);
        ;
        var movieIndexedAnimationInterface = new SpriteIndexedAnimation(sprite, this.spriteMovieImage, BasicColorUtil.getInstance().ZERO_ARRAY, this.animationBehaviorFactory.getOrCreateInstance());
        ;
        var player = this.soundInterface.getPlayerP();
        ;
        if (player ==
            null) {
            throw new Exception("Sound Was not Initialized");
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return new CaptionIndexedAnimation(animationInterface, movieIndexedAnimationInterface, player, this.captionDx, this.captionDy, this.dx, this.dy, this.time, this.animationBehaviorFactory.getOrCreateInstance());
    }
    setInitialScale(scaleProperties) {
        this.scaleProperties = scaleProperties;
    }
}
