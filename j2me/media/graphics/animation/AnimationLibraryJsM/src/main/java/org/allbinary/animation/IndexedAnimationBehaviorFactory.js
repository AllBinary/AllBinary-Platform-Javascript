/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AnimationBehaviorFactory } from './AnimationBehaviorFactory.js';
import { IndexedAnimationBehavior } from './IndexedAnimationBehavior.js';
export class IndexedAnimationBehaviorFactory extends AnimationBehaviorFactory {
    constructor(loopTotal, frameDelayTime) {
        super();
        this.loopTotal = loopTotal;
        this.frameDelayTime = frameDelayTime;
    }
    getOrCreateInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new IndexedAnimationBehavior(this.loopTotal, this.frameDelayTime);
    }
}
