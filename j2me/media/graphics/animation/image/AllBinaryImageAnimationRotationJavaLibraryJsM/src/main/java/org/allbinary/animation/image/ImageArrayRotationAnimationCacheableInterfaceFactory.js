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
import { AnimationBehavior } from '../../../../org/allbinary/animation/AnimationBehavior.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageArrayRotationAnimationCacheable } from './ImageArrayRotationAnimationCacheable.js';
export class ImageArrayRotationAnimationCacheableInterfaceFactory extends Object {
    //@Throws(Exception.constructor)
    getInstance(key = {}) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new ImageArrayRotationAnimationCacheable(key, AnimationBehavior.getInstance());
    }
}
