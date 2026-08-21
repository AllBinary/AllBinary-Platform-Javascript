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
import { CompleteMotionGestureInputEvent } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js';
import { GameKey } from '../../../../../../org/allbinary/game/input/GameKey.js';
import { GameKeyEvent } from '../../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
import { GameKeyEventFactory } from '../../../../../../org/allbinary/game/input/event/GameKeyEventFactory.js';
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameKeyCompleteMotionGestureInputEventFactory } from './GameKeyCompleteMotionGestureInputEventFactory.js';
export class GameKeyCompleteMotionGestureInputEvent extends CompleteMotionGestureInputEvent {
    constructor(name, motionGestureInput, inputToGameKeyMapping) {
        super(name, motionGestureInput);
        this.gameKeyEventFactory = GameKeyEventFactory.getInstance();
        this.SOURCE_ID = this.gameKeyEventFactory.MOTION_GESTURE_SOURCE_ID;
        this.gameKey = GameKey.NULL_GAME_KEY;
        this.gameKeyEvent = GameKeyEvent.NONE;
        //For kotlin this is before the body of the constructor.
        this.inputToGameKeyMapping = inputToGameKeyMapping;
        GameKeyCompleteMotionGestureInputEventFactory.getInstance().add(this);
        this.update();
    }
    getSourceId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.SOURCE_ID;
    }
    update() {
        try {
            this.setGameKey(this.inputToGameKeyMapping.getInstance(this.getMotionGestureInput().getId()));
            this.setGameKeyEvent(this.gameKeyEventFactory.getInstanceForInput(this, this.getGameKey()));
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.UPDATE, e);
        }
    }
    setGameKeyEvent(gameKeyEvent) {
        this.gameKeyEvent = gameKeyEvent;
    }
    getGameKeyEvent() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameKeyEvent;
    }
    setGameKey(gameKey) {
        this.gameKey = gameKey;
    }
    getGameKey() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameKey;
    }
}
