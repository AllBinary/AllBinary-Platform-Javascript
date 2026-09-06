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
//not plain js import { Image } 
const Image = globalThis.javax.microedition.lcdui.Image;
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage = globalThis.javax.microedition.lcdui.NullImage;
import { GameFeatureImageCacheFactory } from '../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
//not GWT import const AnimationBehaviorFactory = globalThis.org.allbinary.animation.AnimationBehaviorFactory;
import { ScreenRelationalUtil } from '../../../../org/allbinary/graphics/displayable/ScreenRelationalUtil.js';
//not GWT import const ScreenRelationalUtil = globalThis.org.allbinary.graphics.displayable.ScreenRelationalUtil;
//not plain js import { PrimitiveIntUtil } 
const PrimitiveIntUtil = globalThis.org.allbinary.logic.math.PrimitiveIntUtil;
import { ImageScaleUtil } from '../../../../org/allbinary/media/image/ImageScaleUtil.js';
//not GWT import const AndroidImageInterface = globalThis.org.microemu.android.device.AndroidImageInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseImageAnimationFactory } from './BaseImageAnimationFactory.js';
//not GWT import - same folder const BaseImageAnimationFactory = globalThis.org.allbinary.animation.image.BaseImageAnimationFactory;
import { ImageAnimation } from './ImageAnimation.js';
//not GWT import - same folder const ImageAnimation = globalThis.org.allbinary.animation.image.ImageAnimation;
export class AllBinaryScreenRelationalImageAnimationInterfaceFactory extends BaseImageAnimationFactory {
    constructor(image, animationBehaviorFactory) {
        super(image, PrimitiveIntUtil.getArrayInstance(), 0, 0, 0, 0, animationBehaviorFactory);
        this.lastImage = NullImage.NULL_IMAGE;
        //For kotlin this is before the body of the constructor.
        if (this.lastImage != NullImage.NULL_IMAGE) {
            var androidImageInterface = this.lastImage;
            ;
            androidImageInterface.getBitmap().recycle();
        }
        var scale = ScreenRelationalUtil.getInstance().getScaleImage(image);
        ;
        this.lastImage = ImageScaleUtil.getInstance().createImage(GameFeatureImageCacheFactory.getInstance(), this.getImage(), scale, scale, false);
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ImageAnimation(this.lastImage, this.animationBehaviorFactory.getOrCreateInstance());
    }
}
