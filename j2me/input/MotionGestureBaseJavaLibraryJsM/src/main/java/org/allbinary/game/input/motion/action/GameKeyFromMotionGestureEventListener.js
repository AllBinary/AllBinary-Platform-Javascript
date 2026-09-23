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
//not GWT import const CompleteMotionGestureInputEvent
import { CompleteMotionGestureInputEventListener } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEventListener.js';
//not GWT import const CompleteMotionGestureInputEventListener
import { DownGameKeyEventHandler } from '../../../../../../org/allbinary/game/input/event/DownGameKeyEventHandler.js';
//not GWT import const DownGameKeyEventHandler
import { GameKeyEvent } from '../../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const GameKeyEvent
import { UpGameKeyEventHandler } from '../../../../../../org/allbinary/game/input/event/UpGameKeyEventHandler.js';
//not GWT import const UpGameKeyEventHandler
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const AllBinaryEventObject
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import - same folder const GameKeyCompleteMotionGestureInputEvent
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
