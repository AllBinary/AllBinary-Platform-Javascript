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
import { DownGameKeyEventHandler } from '../../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js';
import { GameKeyEvent } from '../../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
import { UpGameKeyEventHandler } from '../../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
import { ForcedLogUtil } from '../../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
export class GameKeyFromMotionGestureEventListener extends CompleteMotionGestureInputEventListener {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.previousGameKeyEvent = GameKeyEvent.NONE;
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
            if (gameKeyEvent != this.previousGameKeyEvent) {
                if (this.previousGameKeyEvent != GameKeyEvent.NONE) {
                    UpGameKeyEventHandler.getInstance().fireEvent(this.previousGameKeyEvent);
                }
                this.previousGameKeyEvent = gameKeyEvent;
                if (gameKeyEvent !=
                    null
                    && gameKeyEvent != GameKeyEvent.NONE) {
                    DownGameKeyEventHandler.getInstance().fireEvent(gameKeyEvent);
                }
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "onCompleteMotionGestureInputEvent", e);
        }
    }
}
