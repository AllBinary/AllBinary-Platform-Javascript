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
import { ImageCache } from '../../../../org/allbinary/image/ImageCache.js';
//not GWT import const ImageCache = globalThis.org.allbinary.image.ImageCache;
//Current folder imports from return types, extended types, and scope (deduplicated)
//OpenGLNoneOtherJavaLibrary
export class OpenGLImageCacheFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLImageCacheFactory.IMAGE_CACHE;
    }
    static init() {
        if (OpenGLImageCacheFactory.IMAGE_CACHE ==
            null) {
        }
    }
}
OpenGLImageCacheFactory.IMAGE_CACHE = ImageCache.NULL_IMAGE_CACHE;
