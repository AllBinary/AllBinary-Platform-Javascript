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
import { Object } from '../../java/lang/Object.js';
import { Integer } from '../../java/lang/Integer.js';
import { Activity } from '../../android/app/Activity.js';
//not GWT import const Activity = globalThis.android.app.Activity;
import { Build } from '../../android/os/Build.js';
//not GWT import const Build = globalThis.android.os.Build;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AndroidUtil extends Object {
    static isMemoryRestrictive() {
        if (AndroidUtil.version < 30) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    static isAndroid() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
}
AndroidUtil.NULL_ACTIVITY = new Activity();
AndroidUtil.version = Integer.parseInt(Build.VERSION.SDK);
