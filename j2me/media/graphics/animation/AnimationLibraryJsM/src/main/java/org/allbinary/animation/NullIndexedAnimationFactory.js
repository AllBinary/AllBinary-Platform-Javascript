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
//sameFolderImports - not GWT import - same folder const IndexedAnimation
import { NullIndexedAnimationInner } from './NullIndexedAnimationInner.js';
//sameFolderImports - not GWT import - same folder const Animation
export class NullIndexedAnimationFactory extends Object {
    static getFactoryInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullIndexedAnimationFactory.NULL_INDEXED_ANIMATION_FACTORY;
    }
    constructor() {
        super();
        this.NULL_ANIMATION = new NullIndexedAnimationInner();
    }
    //@Throws(Exception.constructor)
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
NullIndexedAnimationFactory.NULL_INDEXED_ANIMATION_ARRAY = [];
NullIndexedAnimationFactory.NULL_INDEXED_ANIMATION_FACTORY = new NullIndexedAnimationFactory();
