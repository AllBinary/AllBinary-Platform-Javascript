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
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
import { Thread } from '../../../java/lang/Thread.js';
//not GWT import const Image
import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
//not GWT import const NullImage
import { TsUtil } from '../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
import { GDResources } from '../../../org/allbinary/game/gd/resource/GDResources.js';
//not GWT import const GDResources
//not plain js import { ABSystemWrapper } 
const ABSystemWrapper = globalThis.org.allbinary.logic.ABSystemWrapper;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { Memory } from '../../../org/allbinary/system/Memory.js';
//not GWT import const Memory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageCacheBase } from './ImageCacheBase.js';
//not GWT import - same folder const ImageCacheBase
export class ImageCache extends ImageCacheBase {
    constructor() {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.systemWrapper = ABSystemWrapper.getInstance();
        this.tsUtil = TsUtil.getInstance();
    }
    addListener(renderer = {}) {
    }
    getIndex(key = {}) {
        var gdResources = GDResources.getInstance();
        ;
        var resourceStringArray = gdResources.resourceStringArray;
        ;
        var size = resourceStringArray.length;
        ;
        for (var index = 0; index < size; index++) {
            if (resourceStringArray[index] == key) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return index;
            }
        }
        this.logUtil.putF(new StringMaker().append("unable to find key: ").append(StringUtil.getInstance().toString(key)).toString(), this, this.commonStrings.RUN);
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    get(caller, width, height) {
        var foundIndex = this.getIndexWH(width, height);
        ;
        var image = this.getFromAvailable(foundIndex, width, height);
        ;
        if (image == NullImage.NULL_IMAGE) {
            this.volume += width * height;
            if (this.volume > 32000) {
                this.tsUtil.gc();
                this.volume = 0;
            }
            image = this.createImage(caller, width, height);
            if (foundIndex == -1) {
                foundIndex = this.nextIndex;
                this.widths[this.nextIndex] = width;
                this.heights[this.nextIndex] = height;
                this.nextIndex++;
            }
            this.listOfList[foundIndex].add(image);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    //@Throws(Exception.constructor)
    getWithKey(key = {}) {
        var resourceUtil = ResourceUtil.getInstance();
        ;
        var resourceId = resourceUtil.getResourceId(key);
        ;
        var image = this.getImage(resourceId);
        ;
        if (image == NullImage.NULL_IMAGE) {
            var inputStream = resourceUtil.getResourceAsStream(key);
            ;
            try {
                this.logUtil.putF(Memory.getInfo(), this, this.commonStrings.GET);
                image = this.createImageFromInputStream(key, inputStream);
                //: 
            }
            catch (e) {
                this.logUtil.put("Exception: Trying Again After GC", this, this.commonStrings.GET, e);
                this.logUtil.putF(new StringMaker().append("InputStream: ").append(StringUtil.getInstance().toString(inputStream)).toString(), this, this.commonStrings.GET);
                this.tsUtil.gc();
                this.tsUtil.gc();
                this.logUtil.putF(Memory.getInfo(), this, this.commonStrings.GET);
                Thread.sleep(100);
                image = this.createImageFromInputStream(key, inputStream);
            }
            inputStream.close();
            this.hashtable.put(resourceId, image);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    runTask() {
    }
    isLazy() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
ImageCache.NULL_IMAGE_CACHE = new ImageCache();
