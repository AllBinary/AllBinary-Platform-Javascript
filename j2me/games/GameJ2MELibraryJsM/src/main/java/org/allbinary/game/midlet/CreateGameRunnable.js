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
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
import { DemoGameMidletEvent } from './DemoGameMidletEvent.js';
import { DemoGameMidletStateFactory } from './DemoGameMidletStateFactory.js';
import { DemoGameMidletEventHandler } from './DemoGameMidletEventHandler.js';
export class CreateGameRunnable extends Object {
    constructor(demoGameMidlet, hashtable) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.demoGameMidlet = demoGameMidlet;
        this.hashtable = hashtable;
        this.startGameMidletEvent = new DemoGameMidletEvent(this, DemoGameMidletStateFactory.getInstance().START_GAME);
    }
    run() {
        try {
            this.logUtil.putF(this.commonStrings.START_RUNNABLE, this, this.commonStrings.RUN);
            var progressCanvas = ProgressCanvasFactory.getInstance();
            ;
            this.demoGameMidlet.commandAction(MyCommandsFactory.getInstance().SET_DISPLAYABLE, progressCanvas);
            this.demoGameMidlet.stopGameCanvasRunnableInterface();
            this.demoGameMidlet.setGameCanvasRunnableInterface(this.demoGameMidlet.createGameCanvasRunnableInterface());
            this.demoGameMidlet.getGameCanvasRunnableInterface().setLoadStateHashtable(this.hashtable);
            this.demoGameMidlet.startGameCanvasRunnableInterface();
            DemoGameMidletEventHandler.getInstance().fireEvent(this.startGameMidletEvent);
            this.logUtil.putF(this.commonStrings.END_RUNNABLE, this, this.commonStrings.RUN);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.RUN, e);
        }
    }
}
