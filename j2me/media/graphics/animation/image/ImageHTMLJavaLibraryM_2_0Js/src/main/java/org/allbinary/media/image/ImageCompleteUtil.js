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
//not GWT import const Image
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const PlaynImage
//not plain js import { CoreImage } 
const CoreImage = globalThis.playn.core.CoreImage;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ImageCompleteUtil extends Object {
    constructor() {
        super(...arguments);
        this.ISREADY = "isReady";
        this.COMPLETE = "Image loading complete for: ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ImageCompleteUtil.instance;
    }
    //@Throws(Exception.constructor)
    waitForImage(image, name) {
    }
    //@Throws(Exception.constructor)
    isReady(image, name, timeDelayHelper) {
        var playnImage = image;
        ;
        var playnCoreImage = playnImage.getImage();
        ;
        if (!playnCoreImage.isReady() || playnCoreImage.width() + playnCoreImage.height() <= 0) {
            this.handleTimeout(name);
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        if (!image.isReady()) {
            image.init(image.getImage());
            if (!image.isReady()) {
                PreLogUtil.put("Waiting for Not Ready Image: " + image.getName(), this, this.ISREADY);
            }
        }
        var commonStrings = CommonStrings.getInstance();
        ;
        PreLogUtil.put(this.COMPLETE + image.getName(), this, commonStrings.SUCCESS);
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    //@Throws(Exception.constructor)
    handleTimeout(name) {
    }
    //@Throws(Exception.constructor)
    waitForAll() {
    }
}
ImageCompleteUtil.instance = new ImageCompleteUtil();
