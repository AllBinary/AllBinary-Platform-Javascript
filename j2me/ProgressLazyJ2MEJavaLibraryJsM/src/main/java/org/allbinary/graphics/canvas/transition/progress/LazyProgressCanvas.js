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
import { Processor } from '../../../../../../org/allbinary/canvas/Processor.js';
//not GWT import const BasicColor
import { NullPaintable } from '../../../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const NullPaintable
import { ImageCacheFactory } from '../../../../../../org/allbinary/image/ImageCacheFactory.js';
//not GWT import const ImageCacheFactory
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ProgressCanvas } from './ProgressCanvas.js';
//not GWT import - same folder const ProgressCanvas
export class LazyProgressCanvas extends ProgressCanvas {
    constructor(title, backgroundBasicColor, foregroundBasicColor) {
        super(title, backgroundBasicColor, foregroundBasicColor);
        this.logUtil = LogUtil.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    start() {
        super.start();
        this.hasPainted = false;
    }
    end() {
        try {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.END_METHOD_NAME);
            this.endActual();
            this.paintable = GAUGE_PAINTABLE;
            ImageCacheFactory.getInstance().runTask();
            ImageCacheFactory.getInstance().progressEnded();
            //: 
        }
        catch (e) {
            this.logUtil.putF(this.commonStrings.EXCEPTION, this, this.commonStrings.END_METHOD_NAME);
        }
    }
    inGame() {
        inGameProcessor = Processor.getInstance();
    }
    endFromInitialLazyLoadingComplete() {
        super.endFromInitialLazyLoadingComplete();
        this.paintable = NullPaintable.getInstance();
    }
    endIfPaintedSinceStart() {
        if (this.paintable == GAUGE_PAINTABLE && this.hasPainted) {
            this.endFromInitialLazyLoadingComplete();
        }
    }
}
