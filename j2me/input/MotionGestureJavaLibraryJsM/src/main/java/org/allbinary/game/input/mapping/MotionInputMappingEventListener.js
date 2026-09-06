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
//not GWT import const InputMappingEventListenerInterface = globalThis.org.allbinary.game.input.mapping.event.InputMappingEventListenerInterface;
import { GameKeyCompleteMotionGestureInputEventFactory } from '../../../../../org/allbinary/game/input/motion/action/GameKeyCompleteMotionGestureInputEventFactory.js';
//not GWT import const GameKeyCompleteMotionGestureInputEventFactory = globalThis.org.allbinary.game.input.motion.action.GameKeyCompleteMotionGestureInputEventFactory;
import { BasicTouchInputFactory } from '../../../../../org/allbinary/input/motion/button/BasicTouchInputFactory.js';
//not GWT import const BasicTouchInputFactory = globalThis.org.allbinary.input.motion.button.BasicTouchInputFactory;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;
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
