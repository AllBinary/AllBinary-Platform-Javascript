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
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const Activity = globalThis.android.app.Activity;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ProgressRunnable } from './ProgressRunnable.js';
//not GWT import - same folder const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;
export class TitleProgressBarSetProgressRunnable extends ProgressRunnable {
    constructor(midletActivity, progressCanvas) {
        super(midletActivity, progressCanvas);
        this.logUtil = LogUtil.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    run() {
        try {
            this.midletActivity.onSetProgress(Math.round(this.progressCanvas.getValue()), this.progressCanvas.getText());
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
        }
    }
}
