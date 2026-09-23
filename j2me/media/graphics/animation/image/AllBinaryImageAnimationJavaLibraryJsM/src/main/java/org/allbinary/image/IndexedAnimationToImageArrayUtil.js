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
//not GWT import const IndexedAnimation
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AnimationFrameToImageUtil } from './AnimationFrameToImageUtil.js';
//not GWT import - same folder const AnimationFrameToImageUtil
export class IndexedAnimationToImageArrayUtil extends Object {
    //@Throws(Exception.constructor)
    static getInstance(width, height, sequentialAnimationInterface) {
        var size = sequentialAnimationInterface.getAnimationSize();
        ;
        var imageArray = new Array(size);
        ;
        for (var index = 0; index < size; index++) {
            sequentialAnimationInterface.setFrame(index);
            imageArray[index] = AnimationFrameToImageUtil.getInstance().getInstanceWH(width, height, sequentialAnimationInterface);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return imageArray;
    }
}
