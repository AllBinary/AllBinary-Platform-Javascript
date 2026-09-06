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
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { ABRunnable } from '../../../../../org/allbinary/thread/ABRunnable.js';
//not GWT import - same folder const DemoCanvas = globalThis.org.allbinary.game.displayable.canvas.DemoCanvas;
export class DemoGameStartupRunnable extends ABRunnable {
    constructor(demoCanvas) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.demoCanvas = demoCanvas;
    }
    run() {
        try {
            this.setRunning(true);
            this.demoCanvas.stopGameDemo();
            this.demoCanvas.create();
            this.demoCanvas.start();
            this.setRunning(false);
            //: 
        }
        catch (e) {
            this.setRunning(false);
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
        }
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DemoGameStartupRunnable.TYPE;
    }
}
DemoGameStartupRunnable.TYPE = 4;
