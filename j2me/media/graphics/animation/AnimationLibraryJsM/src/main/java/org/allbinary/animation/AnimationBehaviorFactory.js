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
import { Object } from '../../../java/lang/Object.js';
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AnimationBehavior } from './AnimationBehavior.js';
//not GWT import const AnimationBehavior = globalThis.org.allbinary.animation.AnimationBehavior;
export class AnimationBehaviorFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AnimationBehaviorFactory.instance;
    }
    getOrCreateInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AnimationBehavior.getInstance();
        ;
    }
}
AnimationBehaviorFactory.instance = new AnimationBehaviorFactory();
