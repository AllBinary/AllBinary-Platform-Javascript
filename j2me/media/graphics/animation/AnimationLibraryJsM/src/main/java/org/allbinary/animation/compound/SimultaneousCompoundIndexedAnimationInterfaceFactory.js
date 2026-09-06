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
//not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CompoundAnimationInterfaceFactory } from './CompoundAnimationInterfaceFactory.js';
//not GWT import - same folder const CompoundAnimationInterfaceFactory = globalThis.org.allbinary.animation.compound.CompoundAnimationInterfaceFactory;
import { SimultaneousCompoundIndexedAnimation } from './SimultaneousCompoundIndexedAnimation.js';
//not GWT import - same folder const SimultaneousCompoundIndexedAnimation = globalThis.org.allbinary.animation.compound.SimultaneousCompoundIndexedAnimation;
export class SimultaneousCompoundIndexedAnimationInterfaceFactory extends CompoundAnimationInterfaceFactory {
    constructor(basicAnimationInterfaceFactoryInterfaceArray, animationBehaviorFactory) {
        super(basicAnimationInterfaceFactoryInterfaceArray, animationBehaviorFactory);
        //For kotlin this is before the body of the constructor.
    }
    createArray(size) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Array(size);
    }
    createAnimation(animationArray) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new SimultaneousCompoundIndexedAnimation(animationArray, this.animationBehaviorFactory.getOrCreateInstance());
    }
}
