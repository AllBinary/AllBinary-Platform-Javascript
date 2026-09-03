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
//not GWT import const AnimationInterfaceFactoryInterface = globalThis.org.allbinary.animation.AnimationInterfaceFactoryInterface;
import { NullAnimationFactory } from '../../../../org/allbinary/animation/NullAnimationFactory.js';
//not GWT import const NullAnimationFactory = globalThis.org.allbinary.animation.NullAnimationFactory;
//not plain js import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CompoundAnimationInterfaceFactory extends Object {
    constructor(basicAnimationInterfaceFactoryInterfaceArray, animationBehaviorFactory) {
        super();
        this.basicAnimationInterfaceFactoryInterfaceArrayP = basicAnimationInterfaceFactoryInterfaceArray;
        this.animationBehaviorFactory = animationBehaviorFactory;
    }
    //@Throws(Exception.constructor)
    getInstance(instanceId) {
        var size = this.basicAnimationInterfaceFactoryInterfaceArrayP.length;
        ;
        var animationInterfaceArray = this.createArray(size);
        ;
        for (var index = 0; index < size; index++) {
            animationInterfaceArray[index] = this.basicAnimationInterfaceFactoryInterfaceArrayP[index].getInstance(instanceId);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.createAnimation(animationInterfaceArray);
        ;
    }
    createArray(size) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullAnimationFactory.getFactoryInstance().EMPTY_ARRAY;
    }
    createAnimation(animationInterfaceArray) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullAnimationFactory.getFactoryInstance().getInstance(0);
        ;
    }
    getBasicAnimationInterfaceFactoryInterfaceArray() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicAnimationInterfaceFactoryInterfaceArrayP;
    }
    setInitialScale(scaleProperties) {
        var size = this.basicAnimationInterfaceFactoryInterfaceArrayP.length;
        ;
        for (var index = 0; index < size; index++) {
            this.basicAnimationInterfaceFactoryInterfaceArrayP[index].setInitialScale(scaleProperties);
        }
    }
}
