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
//not GWT import const AndroidInfoFactory = globalThis.org.allbinary.android.AndroidInfoFactory;
import { GameInputMotionEventProcessorAPI1 } from '../../../../../org/allbinary/android/input/motion/api1/GameInputMotionEventProcessorAPI1.js';
//not GWT import const GameInputMotionEventProcessorAPI1 = globalThis.org.allbinary.android.input.motion.api1.GameInputMotionEventProcessorAPI1;
import { GameInputMotionEventProcessorAPI5 } from '../../../../../org/allbinary/android/input/motion/api5/GameInputMotionEventProcessorAPI5.js';
//not GWT import - same folder const BaseGameInputMotionEventProcessor = globalThis.org.allbinary.android.input.motion.BaseGameInputMotionEventProcessor;
export class GameInputMotionEventProcessorFactory extends Object {
    static getInstance() {
        var SDK_VERSION = AndroidInfoFactory.getInstance().getVersion();
        ;
        if (SDK_VERSION <= 4) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return GameInputMotionEventProcessorAPI1.getInstance();
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return GameInputMotionEventProcessorAPI5.getInstance();
            ;
        }
    }
}
