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
//not GWT import const ProgressCanvas
import { ProgressCanvasFactory } from '../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ImageCache
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BaseImageLoadingProcessor } from './BaseImageLoadingProcessor.js';
//not GWT import - same folder const BaseImageLoadingProcessor
import { ABRunnable } from './ABRunnable.js';
//not GWT import - same folder const ABRunnable
//import { ImageCacheRunnable } from './ImageCacheRunnable.js';
//not GWT import - same folder const ImageCacheRunnable
import { ImageThreadPool } from './ImageThreadPool.js';
//not GWT import - same folder const ImageThreadPool
export class ConcurrentImageLoadingProcessor extends BaseImageLoadingProcessor {
    constructor(imageCache) {
        super();
        this.logUtil = LogUtil.getInstance();
        //inner= member=true isStatic=
        this.ImageCacheRunnable = class extends ABRunnable {
            constructor(imageCache) {
                super();
                this.imageCache = imageCache;
            }
            run() {
                var logUtil = LogUtil.getInstance();
                ;
                try {
                    this.setRunning(true);
                    this.imageCache.waitForLoadNow();
                    this.imageCache.loadImages();
                    this.imageCache.loadRemainingAnimations();
                    this.setRunning(false);
                    var progressCanvas = ProgressCanvasFactory.getInstance();
                    ;
                    if (!progressCanvas.inProgress) {
                        progressCanvas.endFromInitialLazyLoadingComplete();
                    }
                    //: 
                }
                catch (e) {
                    this.setRunning(false);
                    var commonStrings = CommonStrings.getInstance();
                    ;
                    logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
                }
            }
        };
        this.runnable = new this.ImageCacheRunnable(imageCache);
    }
    runTask() {
        if (!this.runnable.isRunning()) {
            ImageThreadPool.getInstance().runTask(this.runnable);
        }
    }
}
