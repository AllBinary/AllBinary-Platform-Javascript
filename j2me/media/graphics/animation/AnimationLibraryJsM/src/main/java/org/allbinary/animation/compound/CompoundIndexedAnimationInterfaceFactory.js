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
//not GWT import const AnimationInterfaceFactoryInterface
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CompoundAnimationInterfaceFactory } from './CompoundAnimationInterfaceFactory.js';
//not GWT import - same folder const CompoundAnimationInterfaceFactory
import { CompoundIndexedAnimation } from './CompoundIndexedAnimation.js';
//not GWT import - same folder const CompoundIndexedAnimation
export class CompoundIndexedAnimationInterfaceFactory extends CompoundAnimationInterfaceFactory {
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
        return new CompoundIndexedAnimation(animationArray, this.animationBehaviorFactory.getOrCreateInstance());
    }
}
