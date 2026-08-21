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
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonLabels } from '../../../../org/allbinary/string/CommonLabels.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
import { DemoGameMidletEvent } from './DemoGameMidletEvent.js';
import { DemoGameMidletStateFactory } from './DemoGameMidletStateFactory.js';
import { DemoGameMidletEventHandler } from './DemoGameMidletEventHandler.js';
export class DemoRunnable extends Object {
    constructor(demoGameMidlet) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.demoGameMidlet = demoGameMidlet;
        this.startDemoGameMidletEvent = new DemoGameMidletEvent(this.demoGameMidlet, DemoGameMidletStateFactory.getInstance().START_DEMO);
    }
    run() {
        try {
            this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START_LABEL).append("GameCanvasRunnableInterface").toString(), this, this.commonStrings.RUN);
            this.demoGameMidlet.commandAction(MyCommandsFactory.getInstance().SET_DISPLAYABLE, ProgressCanvasFactory.getInstance());
            this.demoGameMidlet.setGameCanvasRunnableInterface(this.demoGameMidlet.createDemoGameCanvasRunnableInterface());
            this.demoGameMidlet.demoSetup();
            DemoGameMidletEventHandler.getInstance().fireEvent(this.startDemoGameMidletEvent);
            this.demoGameMidlet.startGameCanvasRunnableInterface();
            this.demoGameMidlet.postDemoSetup();
            this.logUtil.putF(this.commonStrings.END_RUNNABLE, this, this.commonStrings.RUN);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.RUN, e);
        }
    }
}
