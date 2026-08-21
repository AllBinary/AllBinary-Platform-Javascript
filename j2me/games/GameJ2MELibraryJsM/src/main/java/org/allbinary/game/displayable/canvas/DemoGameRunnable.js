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
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameRunnable } from './GameRunnable.js';
export class DemoGameRunnable extends GameRunnable {
    constructor(demoCanvas) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
        this.demoCanvas = demoCanvas;
    }
    run() {
        try {
            this.demoCanvas.getLoopTimeHelperP().setStartTime(this.gameTickTimeDelayHelper.setStartTime());
            this.demoCanvas.processGame();
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
        this.demoCanvas.processLoopSleep();
    }
}
