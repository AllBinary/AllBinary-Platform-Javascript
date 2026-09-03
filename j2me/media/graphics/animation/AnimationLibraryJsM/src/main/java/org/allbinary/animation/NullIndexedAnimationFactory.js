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
//not plain js import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const IndexedAnimationInterface = globalThis.org.allbinary.animation.IndexedAnimationInterface;
import { NullIndexedAnimation } from './NullIndexedAnimation.js';
//not GWT import const NullIndexedAnimation = globalThis.org.allbinary.animation.NullIndexedAnimation;
import { IndexedAnimationBehavior } from './IndexedAnimationBehavior.js';
//not GWT import const Animation = globalThis.org.allbinary.animation.Animation;
export class NullIndexedAnimationFactory extends Object {
    static getFactoryInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullIndexedAnimationFactory.NULL_INDEXED_ANIMATION_FACTORY;
    }
    constructor() {
        super();
        //inner= member=true isStatic=
        this.NullIndexedAnimationInner = class extends NullIndexedAnimation {
            /*Static stuff is not allowed for TypeScript inner classes*/ /**/
            constructor() {
                super(new IndexedAnimationBehavior(1, 250));
                //For kotlin this is before the body of the constructor.
            }
            paintXY(graphics, x, y) {
            }
        };
        this.NULL_ANIMATION = new this.NullIndexedAnimationInner();
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
