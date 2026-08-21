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
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
import { OpenGLFeatureFactory } from '../../../../../org/allbinary/graphics/opengles/OpenGLFeatureFactory.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameRunnable } from './GameRunnable.js';
export class GameCanvasPauseRunnable extends GameRunnable {
    constructor(allBinaryGameCanvas) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.allBinaryGameCanvas = allBinaryGameCanvas;
    }
    run() {
    }
    //@Throws(Exception.constructor)
    processLoopSleep() {
        try {
            var features = Features.getInstance();
            ;
            var isOpenGL = features.isDefault(OpenGLFeatureFactory.getInstance().OPENGL);
            ;
            if (isOpenGL) {
                this.allBinaryGameCanvas.processSleep();
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
        }
    }
}
