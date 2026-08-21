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
import { Object } from '../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameStrings extends Object {
    constructor() {
        super(...arguments);
        this.PROCESS_TICK = "processTick";
        this.ON_GAME_INITIALIZED = "onGameInitialized";
        this.UPDATESURFACE = "updateSurface";
        this.ON_SET_DISPLAYABLE = "onSetDisplayable";
        this.UNPAUSE = "unPause";
        this.TOGGLE_MENU = "toggleMenu";
        this.SET_GAME_OVER = "setGameOver";
        this.GAME_STATE = "Game State: ";
        this.SET_GAME_STATE = "setGameState";
        this.STOP_GAME_CANVAS_RUNNABLE_INTERFACE = "stopGameCanvasRunnableInterface";
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameStrings.instance;
    }
}
GameStrings.instance = new GameStrings();
