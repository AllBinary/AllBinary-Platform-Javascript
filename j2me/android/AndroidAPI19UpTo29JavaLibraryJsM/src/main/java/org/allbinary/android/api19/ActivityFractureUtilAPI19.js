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
//not GWT import const Activity = globalThis.android.app.Activity;
import { View } from '../../../../android/view/View.js';
//not GWT import const View = globalThis.android.view.View;
import { ActivityFractureUtilAPI5 } from '../../../../org/allbinary/android/api5/ActivityFractureUtilAPI5.js';
//not GWT import const ActivityFractureUtilAPI5 = globalThis.org.allbinary.android.api5.ActivityFractureUtilAPI5;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ActivityFractureUtilAPI19 extends ActivityFractureUtilAPI5 {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ActivityFractureUtilAPI19.instance19;
    }
    setFullScreen(activity) {
        var decorView = activity.getWindow().getDecorView();
        ;
        var visibility = View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY | View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | View.SYSTEM_UI_FLAG_FULLSCREEN;
        ;
        decorView.setSystemUiVisibility(visibility);
    }
}
ActivityFractureUtilAPI19.instance19 = new ActivityFractureUtilAPI19();
