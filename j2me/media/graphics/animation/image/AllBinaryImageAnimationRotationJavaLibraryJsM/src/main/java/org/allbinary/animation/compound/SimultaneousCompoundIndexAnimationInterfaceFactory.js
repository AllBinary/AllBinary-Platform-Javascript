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
import { Object } from '../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SimultaneousCompoundIndexAnimation } from './SimultaneousCompoundIndexAnimation.js';
export class SimultaneousCompoundIndexAnimationInterfaceFactory extends Object {
    constructor(basicAnimationInterfaceFactoryInterfaceArray, animationBehaviorFactory) {
        super();
        this.basicAnimationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray;
        this.animationBehaviorFactory = animationBehaviorFactory;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var size = this.basicAnimationInterfaceFactoryInterfaceArray.length;
        ;
        var animationInterfaceArray = new Array(size);
        ;
        for (var index = 0; index < size; index++) {
            animationInterfaceArray[index] = this.basicAnimationInterfaceFactoryInterfaceArray[index].getInstance(instanceId);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getOrCreate(animationInterfaceArray);
        ;
    }
    getOrCreate(animationInterfaceArray) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new SimultaneousCompoundIndexAnimation(animationInterfaceArray, this.animationBehaviorFactory.getOrCreateInstance());
    }
    getBasicAnimationInterfaceFactoryInterfaceArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicAnimationInterfaceFactoryInterfaceArray;
    }
    setInitialScale(scaleProperties) {
    }
}
