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
import { ActivityFractureUtil } from '../../../../org/allbinary/android/ActivityFractureUtil.js';
//not GWT import const Activity = globalThis.android.app.Activity;
import { WindowManager } from '../../../../android/view/WindowManager.js';
//not GWT import const WindowManager = globalThis.android.view.WindowManager;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ActivityFractureUtilAPI1 extends ActivityFractureUtil {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ActivityFractureUtilAPI1.instance;
    }
    //@Throws(Exception.constructor)
    process(activity) {
    }
    setFullScreen(activity) {
        activity.getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
    }
}
ActivityFractureUtilAPI1.instance = new ActivityFractureUtilAPI1();
