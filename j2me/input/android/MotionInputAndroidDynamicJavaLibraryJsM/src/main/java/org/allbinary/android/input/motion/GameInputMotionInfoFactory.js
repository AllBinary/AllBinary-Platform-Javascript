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
import { AndroidInfoFactory } from '../../../../../org/allbinary/android/AndroidInfoFactory.js';
//not GWT import const AndroidInfoFactory
import { GameInputMotionInfoAPI1 } from '../../../../../org/allbinary/android/input/motion/api1/GameInputMotionInfoAPI1.js';
//not GWT import const GameInputMotionInfoAPI1
import { GameInputMotionInfoAPI5 } from '../../../../../org/allbinary/android/input/motion/api5/GameInputMotionInfoAPI5.js';
//not GWT import - same folder const GameInputMotionInfo
export class GameInputMotionInfoFactory extends Object {
    static getInstance() {
        var SDK_VERSION = AndroidInfoFactory.getInstance().getVersion();
        ;
        if (SDK_VERSION <= 4) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return GameInputMotionInfoAPI1.getInstance();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return GameInputMotionInfoAPI5.getInstance();
            ;
        }
    }
}
