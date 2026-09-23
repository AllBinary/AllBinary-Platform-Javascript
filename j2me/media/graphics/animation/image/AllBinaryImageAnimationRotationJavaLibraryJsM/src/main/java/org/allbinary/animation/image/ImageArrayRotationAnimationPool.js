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
import { BasicArrayListResetablePool } from '../../../../org/allbinary/logic/util/cache/BasicArrayListResetablePool.js';
//not GWT import const PoolInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageArrayRotationAnimationCacheableInterfaceFactory } from './ImageArrayRotationAnimationCacheableInterfaceFactory.js';
//not GWT import - same folder const ImageArrayRotationAnimationCacheable
export class ImageArrayRotationAnimationPool extends BasicArrayListResetablePool {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageArrayRotationAnimationPool.IMAGE_ROTATION_ANIMATION_POOL;
    }
    constructor(cacheableInterfaceFactoryInterface) {
        super(cacheableInterfaceFactoryInterface);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    remove(key = {}) {
        var cacheableInterface = super.remove(key);
        ;
        var allBinaryImageRotationAnimationInfo = key;
        ;
        var imageArrayRotationAnimationCacheable = cacheableInterface;
        ;
        imageArrayRotationAnimationCacheable.setImageArray(allBinaryImageRotationAnimationInfo.getImageArray());
        //if statement needs to be on the same line and ternary does not work the same way.
        return cacheableInterface;
    }
}
ImageArrayRotationAnimationPool.IMAGE_ROTATION_ANIMATION_POOL = new ImageArrayRotationAnimationPool(new ImageArrayRotationAnimationCacheableInterfaceFactory());
