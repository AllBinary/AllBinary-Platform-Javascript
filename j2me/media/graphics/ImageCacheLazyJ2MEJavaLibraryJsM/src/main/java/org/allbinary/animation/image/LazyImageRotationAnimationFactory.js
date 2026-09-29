/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const Animation
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const AnimationInterfaceFactoryInterface
import { ImageCacheFactory } from '../../../../org/allbinary/image/ImageCacheFactory.js';
//not GWT import const ImageCacheFactory
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
import { ScaleProperties } from '../../../../org/allbinary/media/ScaleProperties.js';
//not GWT import - same folder const BaseImageAnimationFactory
import { LazyImageRotationAnimation } from './LazyImageRotationAnimation.js';
//not GWT import - same folder const LazyImageRotationAnimation
export class LazyImageRotationAnimationFactory extends Object {
    constructor(layoutIndex, associatedLazyAnimationId, animationInterfaceFactoryInterface) {
        super();
        this.scaleProperties = ScaleProperties.instance;
        this.layoutIndex = layoutIndex;
        this.animationInterfaceFactoryInterface = animationInterfaceFactoryInterface;
        ImageCacheFactory.getInstance().hasAnyLazyAnimationFactories = true;
        if (this.animationInterfaceFactoryInterface.animationBehaviorFactory == AnimationBehaviorFactory.getInstance()) {
            ForcedLogUtil.log("Using default AnimationBehaviorFactory with IndexedAnimationFactory", this);
        }
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        if (this.animationInterfaceFactoryInterface.getImage().isReady()) {
            this.animationInterfaceFactoryInterface.setInitialScale(this.scaleProperties);
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.animationInterfaceFactoryInterface.getInstance(instanceId);
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new LazyImageRotationAnimation(this.layoutIndex, instanceId, scaleProperties, this.animationInterfaceFactoryInterface, this.animationInterfaceFactoryInterface.animationBehaviorFactory.getOrCreateInstance());
        }
    }
    setInitialScale(scaleProperties) {
        this.scaleProperties = scaleProperties;
    }
}
