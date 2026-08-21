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
import { AngleFactory } from '../../../org/allbinary/math/AngleFactory.js';
import { AngleInfo } from '../../../org/allbinary/math/AngleInfo.js';
import { CircularIndexUtil } from '../../../org/allbinary/util/CircularIndexUtil.js';
import { NullRotationAnimation } from './NullRotationAnimation.js';
import { IndexedAnimationBehavior } from './IndexedAnimationBehavior.js';
export class NullRotationAnimationFactory extends Object {
    static getFactoryInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullRotationAnimationFactory.NULL_ROTATION_ANIMATION_FACTORY;
    }
    constructor() {
        super();
        this.NULL_ROTATION_ANIMATION_ARRAY = [];
        //inner= member=true isStatic=
        this.NullRotationAnimation2 = class extends NullRotationAnimation {
            /*Static stuff is not allowed for TypeScript inner classes*/ /**/
            constructor() {
                super(AngleInfo.getInstance(AngleFactory.getInstance().QUARTER_TOTAL_ANGLE), CircularIndexUtil.createInstance(4), new IndexedAnimationBehavior(1, 250));
                //For kotlin this is before the body of the constructor.
            }
            paintXY(graphics, x, y) {
            }
        };
        this.NULL_ANIMATION = new this.NullRotationAnimation2();
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
