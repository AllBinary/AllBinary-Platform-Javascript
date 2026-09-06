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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { AngleFactory } 
const AngleFactory = globalThis.org.allbinary.math.AngleFactory;
//not plain js import { AngleInfo } 
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//not GWT import const ScaleProperties = globalThis.org.allbinary.media.ScaleProperties;
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//not GWT import - same folder const RotationAnimation = globalThis.org.allbinary.animation.RotationAnimation;
import { NullRotationAnimation } from './NullRotationAnimation.js';
//not GWT import - same folder const NullRotationAnimation = globalThis.org.allbinary.animation.NullRotationAnimation;
import { IndexedAnimationBehavior } from './IndexedAnimationBehavior.js';
//not GWT import - same folder const Animation = globalThis.org.allbinary.animation.Animation;
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
