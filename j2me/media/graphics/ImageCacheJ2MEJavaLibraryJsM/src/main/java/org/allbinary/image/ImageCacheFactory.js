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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageCache } from './ImageCache.js';
//not GWT import - same folder const ImageCache
export class ImageCacheFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageCacheFactory.IMAGE_CACHE;
    }
    static init() {
    }
}
ImageCacheFactory.IMAGE_CACHE = new ImageCache();
//JSNI Expose so JSNI can access this class *** 
globalThis.org.allbinary = globalThis.org.allbinary || {};
globalThis.org.allbinary.image = globalThis.org.allbinary.image || {};
globalThis.org.allbinary.image.ImageCacheFactory = ImageCacheFactory;
console.log('Exported ImageCacheFactory as globalThis');
