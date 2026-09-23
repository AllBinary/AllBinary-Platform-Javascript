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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import const Image
import { NullImage } from '../../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage
import { NullGL10 } from '../../../../org/allbinary/device/NullGL10.js';
//not GWT import const NullGL10
import { AllBinaryRendererBase3 } from '../../../../org/allbinary/graphics/opengles/renderer/AllBinaryRendererBase3.js';
//not GWT import const AllBinaryRendererBase3
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
import { ImageCache } from '../../../../org/allbinary/image/ImageCache.js';
//not GWT import const ImageCache
import { ImageCacheFactory } from '../../../../org/allbinary/image/ImageCacheFactory.js';
//not GWT import const ImageCacheFactory
import { PreResourceImageUtil } from '../../../../org/allbinary/image/PreResourceImageUtil.js';
//not GWT import const PreResourceImageUtil
import { SynchObject } from '../../../../org/allbinary/thread/SynchObject.js';
//not GWT import const SynchObject
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLESImage } from './OpenGLESImage.js';
//not GWT import - same folder const OpenGLESImage
//ImageCacheOpenGLESJavaLibrary
export class OpenGLImageCache extends ImageCache {
    constructor() {
        super();
        this.imageCache = ImageCacheFactory.getInstance();
        this.preResourceImageUtil = PreResourceImageUtil.getInstance();
        this.gl = NullGL10.NULL_GL10;
        this.lock = new SynchObject();
        this.list = new BasicArrayListD();
        this.renderer = new AllBinaryRendererBase3();
    }
    addListener(renderer = {}) {
        this.renderer = renderer;
    }
    //@Throws(Exception.constructor)
    update(gl) {
        this.gl = gl;
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 
        //mutex.withLock
        for (var index = this.list.size() - 1; index >= 0; index--) {
            var openGLESImage = this.list.objectArray[index];
            ;
            if (openGLESImage != OpenGLESImage.NULL_OPENGL_IMAGE) {
                openGLESImage.set(gl);
            }
        }
    }
    //@Throws(Exception.constructor)
    createImage(caller, width, height) {
        var textureSize = width;
        ;
        if (height > width) {
            textureSize = height;
        }
        while ((textureSize % 4) != 0) {
            textureSize++;
        }
        width = textureSize;
        height = textureSize;
        var image2 = this.imageCache.get(caller, width, height);
        ;
        var image = this.preResourceImageUtil.encapsulate(image2);
        ;
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 
        //mutex.withLock
        if (image != NullImage.NULL_IMAGE) {
            this.list.add(image);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    //@Throws(Exception.constructor)
    createImageFromInputStream(key = {}, inputStream) {
        var cachedImage = this.imageCache.getWithKey(key);
        ;
        var image = this.preResourceImageUtil.encapsulate(cachedImage);
        ;
        //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
        //synchronized(this.lock) 
        //mutex.withLock
        if (image != NullImage.NULL_IMAGE) {
            this.list.add(image);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    getGlP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gl;
    }
    init(image) {
        try {
            //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
            //synchronized(this.lock) 
            //mutex.withLock
            if (this.list.contains(image)) {
                throw new RuntimeException();
            }
            this.list.add(image);
            this.renderer.add(image);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.INIT, e);
        }
    }
}
