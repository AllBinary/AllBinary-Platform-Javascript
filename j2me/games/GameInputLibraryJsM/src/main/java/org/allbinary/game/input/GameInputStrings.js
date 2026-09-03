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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameInputStrings extends Object {
    constructor() {
        super(...arguments);
        this.PROCESS_INPUT = "processInput";
        this.KEY_PRESSED = "keyPressed";
        this.KEY_RELEASED = "keyReleased";
        this.KEY_REPEATED = "keyRepeated";
        this.ON_PRESS_GAME_KEY = "onPressGameKeyEvent";
        this.ON_DOWN_GAME_KEY = "onDownGameKeyEvent";
        this.ON_UP_GAME_KEY = "onUpGameKeyEvent";
        this.NO_KEY = "Key Code Not Mapped For Game: ";
        this.ADD_KEY_EVENT = "addGameKeyEvent";
        this.REMOVE_KEY_EVENT = "removeGameKeyEvent";
        this.STRAFE_LEFT = "strafeLeft";
        this.STRAFE_RIGHT = "strafeRight";
        this.PROCESS_MOTION_INPUT = "processMotionInput";
        this.UDPATE_CURRENT_TOUCH_INPUT_FACTORY = "updateCurrentTouchInputFactory";
        this.ENABLE_PLAYER_GAME_INPUTS = "Enabling PlayerGameInputs: ";
        this.ENABLE_PLAYER_GAME_INPUT = "Enabling PlayerGameInput: ";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameInputStrings.instance;
    }
}
GameInputStrings.instance = new GameInputStrings();
