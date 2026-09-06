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
/* Generated Code Do Not Modify */
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AnimationBehavior } from './AnimationBehavior.js';
//not GWT import - same folder const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
export class IndexedAnimationBehavior extends AnimationBehavior {
    constructor(loopTotal, frameDelayTime) {
        super();
        this.elapsedTime = 0;
        this.loopIndex = 0;
        this.loopTotal = loopTotal;
        this.frameDelayTime = frameDelayTime;
    }
    reset() {
        this.loopIndex = 0;
    }
}
