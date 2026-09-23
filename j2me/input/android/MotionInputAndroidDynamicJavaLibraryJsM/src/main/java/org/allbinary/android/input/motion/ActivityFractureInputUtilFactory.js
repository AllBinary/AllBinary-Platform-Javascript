/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2009 AllBinary
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
//not GWT import const ActivityFractureUtil
import { AndroidInfoFactory } from '../../../../../org/allbinary/android/AndroidInfoFactory.js';
//not GWT import const AndroidInfoFactory
import { ActivityFractureUtilAPI1 } from '../../../../../org/allbinary/android/api1/ActivityFractureUtilAPI1.js';
//not GWT import const ActivityFractureUtilAPI1
import { ActivityFractureUtilAPI16 } from '../../../../../org/allbinary/android/api16/ActivityFractureUtilAPI16.js';
//not GWT import const ActivityFractureUtilAPI16
import { ActivityFractureUtilAPI19 } from '../../../../../org/allbinary/android/api19/ActivityFractureUtilAPI19.js';
//not GWT import const ActivityFractureUtilAPI19
import { ActivityFractureUtilAPI5 } from '../../../../../org/allbinary/android/api5/ActivityFractureUtilAPI5.js';
//not GWT import const ActivityFractureUtilAPI5
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ActivityFractureInputUtilFactory extends Object {
    static getInstance() {
        var SDK_VERSION = AndroidInfoFactory.getInstance().getVersion();
        ;
        if (SDK_VERSION <= 4) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return ActivityFractureUtilAPI1.getInstance();
            ;
        }
        else if (SDK_VERSION <= 15) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return ActivityFractureUtilAPI5.getInstance();
            ;
        }
        else if (SDK_VERSION <= 16) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return ActivityFractureUtilAPI16.getInstance();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return ActivityFractureUtilAPI19.getInstance();
            ;
        }
    }
}
