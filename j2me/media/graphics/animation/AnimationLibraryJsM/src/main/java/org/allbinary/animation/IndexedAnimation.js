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
import { Exception } from '../../../java/lang/Exception.js';
import { PrimitiveIntUtil } from '../../../org/allbinary/logic/math/PrimitiveIntUtil.js';
//not GWT import const PrimitiveIntUtil
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Animation } from './Animation.js';
//not GWT import - same folder const AnimationBehavior
export class IndexedAnimation extends Animation {
    constructor(animationBehavior) {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.animationBehaviorP = animationBehavior;
    }
    getAnimationBehavior() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.animationBehaviorP;
    }
    reset() {
        this.animationBehaviorP.reset();
        this.setFrame(0);
    }
    setFrame(index) {
    }
    getFrame() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    //@Throws(Exception.constructor)
    getAnimationSize() {
        throw new Exception(this.commonStrings.NOT_IMPLEMENTED);
    }
    getSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    previousFrame() {
    }
    isLastFrame() {
        if (this.getFrame() == this.getSize() - 1) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    setSequence(sequence) {
    }
    getSequence() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PrimitiveIntUtil.getArrayInstance();
        ;
    }
    setState(indexedAnimation) {
        this.setFrame(indexedAnimation.getFrame());
        this.setDx(indexedAnimation.getDx());
        this.setDy(indexedAnimation.getDy());
    }
    getWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
}
