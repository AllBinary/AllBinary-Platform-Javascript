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
//sameFolderImports - not GWT import - same folder const RotationAnimation
import { NullRotationAnimation2 } from './NullRotationAnimation2.js';
//sameFolderImports - not GWT import - same folder const Animation
export class NullRotationAnimationFactory extends Object {
    static getFactoryInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullRotationAnimationFactory.NULL_ROTATION_ANIMATION_FACTORY;
    }
    constructor() {
        super();
        this.NULL_ROTATION_ANIMATION_ARRAY = [];
        this.NULL_ANIMATION = new NullRotationAnimation2();
    }
    getInstance(instanceId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.NULL_ANIMATION;
    }
    //@Throws(Exception.constructor)
    getInstanceAnimation(animationInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.NULL_ANIMATION;
    }
    setInitialScale(scaleProperties) {
    }
}
NullRotationAnimationFactory.NULL_ROTATION_ANIMATION_FACTORY = new NullRotationAnimationFactory();
