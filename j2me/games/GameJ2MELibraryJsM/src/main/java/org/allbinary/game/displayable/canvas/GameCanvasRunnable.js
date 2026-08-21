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
import { GameTickDisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/GameTickDisplayInfoSingleton.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameRunnable } from './GameRunnable.js';
export class GameCanvasRunnable extends GameRunnable {
    constructor(allBinaryGameCanvas) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.gameTickDisplayInfoSingleton = GameTickDisplayInfoSingleton.getInstance();
        this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
        this.allBinaryGameCanvas = allBinaryGameCanvas;
    }
    run() {
        try {
            this.allBinaryGameCanvas.getLoopTimeHelperP().setStartTime(this.gameTickTimeDelayHelper.setStartTime());
            this.gameTickDisplayInfoSingleton.update();
            this.allBinaryGameCanvas.processGame();
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
        }
    }
    //@Throws(Exception.constructor)
    processLoopSleep() {
        this.allBinaryGameCanvas.processLoopSleep();
    }
}
