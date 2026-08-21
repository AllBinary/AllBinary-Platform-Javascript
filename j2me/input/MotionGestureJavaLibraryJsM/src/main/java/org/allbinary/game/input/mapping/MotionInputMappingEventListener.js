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
import { GameKeyCompleteMotionGestureInputEventFactory } from '../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEventFactory.js';
import { BasicTouchInputFactory } from '../../../../../org/allbinary/input/motion/button/BasicTouchInputFactory.js';
import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MotionInputMappingEventListener extends Object {
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    //@Throws(Exception.constructor)
    onInputMappingEvent(inputMappingEvent) {
        GameKeyCompleteMotionGestureInputEventFactory.getInstance().updateAll();
        BasicTouchInputFactory.getInstance().updateAll(inputMappingEvent.getInputToGameKeyMapping());
    }
}
