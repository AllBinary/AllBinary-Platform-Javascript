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
import { CompleteMotionGestureInputEvent } from '../../../../../../org/allbinary/game/input/CompleteMotionGestureInputEvent.js';
//not GWT import const CompleteMotionGestureInputEvent = globalThis.org.allbinary.game.input.CompleteMotionGestureInputEvent;
import { GameKey } from '../../../../../../org/allbinary/game/input/GameKey.js';
//not GWT import const GameKeyEventSourceInterface = globalThis.org.allbinary.game.input.GameKeyEventSourceInterface;
import { GameKeyEvent } from '../../../../../../org/allbinary/game/input/event/GameKeyEvent.js';
//not GWT import const MotionGestureInput = globalThis.org.allbinary.input.motion.gesture.MotionGestureInput;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameKeyCompleteMotionGestureInputEvent extends CompleteMotionGestureInputEvent {
    constructor(name, motionGestureInput, inputToGameKeyMapping) {
        super(name, motionGestureInput);
        this.gameKey = GameKey.NULL_GAME_KEY;
        this.gameKeyEvent = GameKeyEvent.NONE;
        //For kotlin this is before the body of the constructor.
    }
    getSourceId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    update() {
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
