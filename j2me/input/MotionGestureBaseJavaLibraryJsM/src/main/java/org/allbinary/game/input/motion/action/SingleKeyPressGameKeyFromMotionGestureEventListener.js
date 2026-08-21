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
import { CompleteMotionGestureInputEventListener } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListener.js';
import { PressGameKeyEventHandler } from '../../../../../../org/allbinary/game/input/event/PressGameKeyEventHandler.js';
import { ForcedLogUtil } from '../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
export class SingleKeyPressGameKeyFromMotionGestureEventListener extends CompleteMotionGestureInputEventListener {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onCompleteMotionGestureInputEvent(completeMotionGestureInputEvent) {
        try {
            var gameKeyCompleteMotionGestureInputEvent = completeMotionGestureInputEvent;
            ;
            var gameKeyEvent = gameKeyCompleteMotionGestureInputEvent.getGameKeyEvent();
            ;
            PressGameKeyEventHandler.getInstance().fireEvent(gameKeyEvent);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "onCompleteMotionGestureInputEvent", e);
        }
    }
}
