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
import { TransistionTypes } from '../../../../../../org/allbinary/animation/transition/TransistionTypes.js';
//not GWT import const TransistionTypes = globalThis.org.allbinary.animation.transition.TransistionTypes;
//not plain js import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const Activity = globalThis.android.app.Activity;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ProgressRunnable } from './ProgressRunnable.js';
//not GWT import const ProgressCanvas = globalThis.org.allbinary.graphics.canvas.transition.progress.ProgressCanvas;
export class ShowTitleProgressBarRunnable extends ProgressRunnable {
    constructor(midletActivity, progressCanvas) {
        super(midletActivity, progressCanvas);
        this.logUtil = LogUtil.getInstance();
        this.FADE_IN_HALF = [TransistionTypes.getInstance().FADE_IN_TO_HALF_ALPHA, TransistionTypes.getInstance().FADE_IN_FROM_HALF_ALPHA];
        //For kotlin this is before the body of the constructor.
    }
    run() {
        try {
            this.midletActivity.onShowProgress(false, this.FADE_IN_HALF);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
        }
    }
}
