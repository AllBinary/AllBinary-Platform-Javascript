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
//not GWT import const Activity = globalThis.android.app.Activity;
import { Context } from '../../../../../android/content/Context.js';
//not GWT import const View = globalThis.android.view.View;
import { InputMethodManager } from '../../../../../android/view/inputmethod/InputMethodManager.js';
//not GWT import const ViewCompositeInterface = globalThis.org.allbinary.android.activity.ViewCompositeInterface;
//not plain js import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ShowVirtualKeyboardRunnable extends Object {
    constructor(activity) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.activity = activity;
    }
    run() {
        try {
            var inputMethodManager = this.activity.getSystemService(Context.INPUT_METHOD_SERVICE);
            ;
            var viewCompositeInterface = this.activity;
            ;
            if (viewCompositeInterface ==
                null) {
                ForcedLogUtil.log("Activity Null", this);
            }
            var view = viewCompositeInterface.getView();
            ;
            inputMethodManager.toggleSoftInputFromWindow(view.getWindowToken(), InputMethodManager.SHOW_FORCED, 0);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN, e);
        }
    }
}
