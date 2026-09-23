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
import { Exception } from '../../../../java/lang/Exception.js';
//not GWT import const Image
import { GameFeatureImageCacheFactory } from '../../../../org/allbinary/image/GameFeatureImageCacheFactory.js';
//not GWT import const GameFeatureImageCacheFactory
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { HashtableUtil } 
const HashtableUtil = globalThis.org.allbinary.util.HashtableUtil;
//not GWT import const PlaynImage
//not plain js import { CoreImage } 
const CoreImage = globalThis.playn.core.CoreImage;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ImageCompleteUtil } from './ImageCompleteUtil.js';
//not GWT import - same folder const ImageCompleteUtil
export class ImageWaitCompleteUtil extends ImageCompleteUtil {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.timeDelayHelper = new TimeDelayHelper(18000);
        this.allTimeDelayHelper = new TimeDelayHelper(120000);
    }
    //@Throws(Exception.constructor)
    waitForImage(image, name) {
        this.timeDelayHelper.setStartTimeTNT();
        this.waitForATime(image, name, this.timeDelayHelper);
    }
    //@Throws(Exception.constructor)
    handleTimeout(name) {
        if (this.timeDelayHelper.isTimeTNT()) {
            throw new Exception("isReady: Timeout Waiting or GameHtmlHasLoadedResourcesProcessor does not have this Image: " + name);
        }
    }
    //@Throws(Exception.constructor)
    waitForATime(image, name, timeDelayHelper) {
        var playnImage = image;
        ;
        var playnCoreImage = playnImage.getImage();
        ;
        while (!playnCoreImage.isReady() || playnCoreImage.width() + playnCoreImage.height() <= 0) {
            if (timeDelayHelper.isTimeTNT()) {
                throw new Exception("waitFor: Timeout Waiting or GameHtmlHasLoadedResourcesProcessor does not have this Image: " + name);
            }
        }
        if (!image.isReady()) {
            image.init(image.getImage());
        }
    }
    //@Throws(Exception.constructor)
    waitForAll() {
        this.allTimeDelayHelper.setStartTimeTNT();
        var hashtable = GameFeatureImageCacheFactory.getInstance().getHashtableP();
        ;
        var objectArray = HashtableUtil.getInstance().getKeysAsArray(hashtable);
        ;
        var size = objectArray.length;
        ;
        PreLogUtil.put("Image Total: " + size, this, "waitForAll");
        for (var index = 0; index < size; index++) {
            this.waitForATime(hashtable.get(objectArray[index]), objectArray[index], this.allTimeDelayHelper);
        }
    }
}
