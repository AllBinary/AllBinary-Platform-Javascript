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
import { Object } from '../../../../../java/lang/Object.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
export class CommandRunnable extends Object {
    constructor(commandFormInputProcessor, command) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.commandFormInputProcessor = commandFormInputProcessor;
        this.command = command;
    }
    run() {
        try {
            this.logUtil.putF(this.commonStrings.START_RUNNABLE, this, this.commonStrings.RUN);
            var canvas = this.commandFormInputProcessor.getCanvas();
            ;
            var commandListener = canvas.getCustomCommandListener();
            ;
            commandListener.commandAction(this.command, canvas);
            this.logUtil.putF(this.commonStrings.END_RUNNABLE, this, this.commonStrings.RUN);
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.RUN, e);
        }
    }
}
