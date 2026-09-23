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
import { GameInputMotionEventProcessorFactory } from '../../../../../org/allbinary/android/input/motion/GameInputMotionEventProcessorFactory.js';
//not GWT import const GameInputMotionEventProcessorFactory
import { GameKeyEventHandler } from '../../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
//not GWT import const GameKeyEventHandler
import { BasicMotionGesturesHandler } from '../../../../../org/allbinary/input/motion/gesture/observer/BasicMotionGesturesHandler.js';
//not GWT import const BasicMotionGesturesHandler
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameEventHandlerUtil extends Object {
    static removeAllListeners() {
        BasicMotionGesturesHandler.getInstance().removeAllListeners();
        GameKeyEventHandler.getInstance().removeAllListeners();
        GameInputMotionEventProcessorFactory.getInstance().addListener();
    }
}
