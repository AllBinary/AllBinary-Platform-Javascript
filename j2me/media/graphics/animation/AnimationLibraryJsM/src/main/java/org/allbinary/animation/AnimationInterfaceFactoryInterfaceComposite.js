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
import { Object } from '../../../java/lang/Object.js';
//not GWT import - same folder const AnimationInterfaceFactoryInterface
import { NullAnimationFactory } from './NullAnimationFactory.js';
//not GWT import - same folder const Animation
export class AnimationInterfaceFactoryInterfaceComposite extends Object {
    constructor(basicAnimationInterfaceFactoryInterfaceArray) {
        super();
        this.animationInterfaceFactoryInterfaceArray = basicAnimationInterfaceFactoryInterfaceArray;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullAnimationFactory.getFactoryInstance().getInstance(0);
        ;
    }
    getAnimationInterfaceFactoryInterfaceArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationInterfaceFactoryInterfaceArray;
    }
    setInitialScale(scaleProperties) {
    }
}
