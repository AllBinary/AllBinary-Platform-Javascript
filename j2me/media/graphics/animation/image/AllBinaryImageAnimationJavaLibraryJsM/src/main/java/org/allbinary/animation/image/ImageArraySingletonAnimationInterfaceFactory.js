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
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;
import { SingletonAnimationInterfaceFactory } from '../../../../org/allbinary/animation/SingletonAnimationInterfaceFactory.js';
//not GWT import const IndexedAnimationToImageArrayUtil = globalThis.org.allbinary.image.IndexedAnimationToImageArrayUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageArrayAnimation } from './ImageArrayAnimation.js';
//not GWT import - same folder const ImageArrayAnimation = globalThis.org.allbinary.animation.image.ImageArrayAnimation;
export class ImageArraySingletonAnimationInterfaceFactory extends SingletonAnimationInterfaceFactory {
    constructor(imageArray) {
        super(new ImageArrayAnimation(imageArray, AnimationBehavior.getInstance()));
        //For kotlin this is before the body of the constructor.
    }
}
