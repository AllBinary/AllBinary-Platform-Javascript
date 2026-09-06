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
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
import { IndexedAnimation } from '../../../../org/allbinary/animation/IndexedAnimation.js';
//not GWT import const IndexedAnimation = globalThis.org.allbinary.animation.IndexedAnimation;
import { IndexedAnimationBehavior } from '../../../../org/allbinary/animation/IndexedAnimationBehavior.js';
//not GWT import - same folder const SpecialAnimationInterface = globalThis.org.allbinary.animation.special.SpecialAnimationInterface;
export class SpecialAnimation extends IndexedAnimation {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SpecialAnimation.NULL_SPECIAL_ANIMATION;
    }
    constructor(animationBehavior) {
        super(animationBehavior);
        //For kotlin this is before the body of the constructor.
    }
    nextFrame() {
        var indexedAnimationBehavior = this.animationBehaviorP;
        ;
        indexedAnimationBehavior.loopIndex++;
    }
    setLastFrame() {
    }
    isComplete() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    open() {
    }
    close() {
    }
    process() {
    }
}
SpecialAnimation.NULL_SPECIAL_ANIMATION = new SpecialAnimation(new IndexedAnimationBehavior(1, 250));
