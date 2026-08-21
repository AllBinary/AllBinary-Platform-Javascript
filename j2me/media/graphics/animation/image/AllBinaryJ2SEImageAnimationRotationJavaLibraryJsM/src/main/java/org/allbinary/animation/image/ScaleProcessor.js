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
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { ImageScaleUtil } from '../../../../org/allbinary/media/image/ImageScaleUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ScaleBaseProcessor } from './ScaleBaseProcessor.js';
export class ScaleProcessor extends ScaleBaseProcessor {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.imageScaleUtil = ImageScaleUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ScaleProcessor.instanceC;
    }
    update(originalImage, originalImageArray, ximageToShowArray, unused, scaleX, scaleY, maxScaleX, maxScaleY) {
        try {
            this.imageScaleUtil.scale2(originalImage, originalImageArray, ximageToShowArray, unused, scaleX, scaleY, maxScaleX, maxScaleY);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.UPDATE, e);
        }
    }
}
ScaleProcessor.instanceC = new ScaleProcessor();
