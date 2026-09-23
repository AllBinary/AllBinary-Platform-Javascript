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
//not GWT import const TransistionTypes
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const Activity
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ProgressRunnable } from './ProgressRunnable.js';
//not GWT import - same folder const ProgressCanvas
export class DismissTitleProgressBarRunnable extends ProgressRunnable {
    constructor(midletActivity, progressCanvas) {
        super(midletActivity, progressCanvas);
        this.logUtil = LogUtil.getInstance();
        this.ZOOM_OUT_AND_IN = [TransistionTypes.getInstance().ZOOM_OUT, TransistionTypes.getInstance().ZOOM_IN];
        //For kotlin this is before the body of the constructor.
    }
    run() {
        try {
            this.midletActivity.onDismissProgress(this.ZOOM_OUT_AND_IN);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
        }
    }
}
