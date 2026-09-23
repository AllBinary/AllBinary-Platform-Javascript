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
//not GWT import const Animation
import { AnimationBehaviorFactory } from '../../../../org/allbinary/animation/AnimationBehaviorFactory.js';
//not GWT import const RotationAnimation
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CompoundAnimationInterfaceFactory } from './CompoundAnimationInterfaceFactory.js';
//not GWT import - same folder const CompoundAnimationInterfaceFactory
import { CompoundRotationAnimation } from './CompoundRotationAnimation.js';
//not GWT import - same folder const CompoundRotationAnimation
export class CompoundRotationAnimationInterfaceFactory extends CompoundAnimationInterfaceFactory {
    constructor(basicAnimationInterfaceFactoryInterfaceArray, animationBehaviorFactory) {
        super(basicAnimationInterfaceFactoryInterfaceArray, animationBehaviorFactory);
        //For kotlin this is before the body of the constructor.
        if (animationBehaviorFactory == AnimationBehaviorFactory.getInstance()) {
            ForcedLogUtil.log("Using default AnimationBehaviorFactory with IndexedAnimationFactory", this);
        }
    }
    createArray(size) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Array(size);
    }
    createAnimation(animationInterfaceArray) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new CompoundRotationAnimation(animationInterfaceArray, this.animationBehaviorFactory.getOrCreateInstance());
    }
}
