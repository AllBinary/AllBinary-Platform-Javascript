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
import { System } from '../../../java/lang/System.js';
import { Thread } from '../../../java/lang/Thread.js';
import { NullImage } from '../../../javax/microedition/lcdui/NullImage.js';
import { ResourceUtil } from '../../../org/allbinary/data/resource/ResourceUtil.js';
import { GDResources } from '../../../org/allbinary/game/gd/resource/GDResources.js';
import { StringMaker } from '../../../org/allbinary/logic/string/StringMaker.js';
import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
import { Memory } from '../../../org/allbinary/system/Memory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageCacheBase } from './ImageCacheBase.js';
export class ImageCache extends ImageCacheBase {
    constructor() {
        super();
        this.commonStrings = CommonStrings.getInstance();
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
                System.gc();
                this.volume = 0;
            }
            image = this.createImage(caller, width, height);
            var widths = this.widths;
            ;
            if (this.nextIndex > widths.length - 1) {
                if (foundIndex == -1) {
                    foundIndex = this.nextIndex;
                    widths[this.nextIndex] = width;
                    this.heights[this.nextIndex] = height;
                    this.nextIndex++;
                }
                this.listOfList[foundIndex].add(image);
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    //@Throws(Exception.constructor)
    getWithKey(key = {}) {
        var image = this.getImage(key);
        ;
        if (image == NullImage.NULL_IMAGE) {
            var resourceUtil = ResourceUtil.getInstance();
            ;
            var inputStream = resourceUtil.getResourceAsStream(key);
            ;
            if (inputStream ==
                null) {
                throw new RuntimeException(new StringMaker().append("Image resource is not available for key: ").append(StringUtil.getInstance().toString(key)).toString());
            }
            try {
                image = this.createImageFromInputStream(key, inputStream);
                //: 
            }
            catch (e) {
                this.logUtil.put("Exception: Trying Again After GC", this, this.commonStrings.GET, e);
                this.logUtil.putF(new StringMaker().append("InputStream: ").append(StringUtil.getInstance().toString(inputStream)).toString(), this, this.commonStrings.GET);
                System.gc();
                System.gc();
                this.logUtil.putF(Memory.getInfo(), this, this.commonStrings.GET);
                Thread.sleep(100);
                image = this.createImageFromInputStream(key, inputStream);
            }
            inputStream.close();
            this.hashtable.put(key, image);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return image;
    }
    //@Throws(Exception.constructor)
    loadImageForAnimation() {
    }
    progressEnded() {
    }
    runTask() {
    }
    isLazy() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
ImageCache.NULL_IMAGE_CACHE = new ImageCache();
