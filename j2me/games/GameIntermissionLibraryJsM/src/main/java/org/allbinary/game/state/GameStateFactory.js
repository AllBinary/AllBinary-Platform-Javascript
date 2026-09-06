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
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameState } from './GameState.js';
//not GWT import - same folder const GameState = globalThis.org.allbinary.game.state.GameState;
export class GameStateFactory extends Object {
    static getInstance() {
        if (GameStateFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            GameStateFactory.instance = new GameStateFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameStateFactory.instance;
    }
    constructor() {
        super();
        this.index = 0;
        this.NO_GAME_STATE = this.createGameState("NO_GAME_STATE");
        this.PLAYING_GAME_STATE = this.createGameState("PLAYING_GAME_STATE");
        this.SHOW_END_RESULT_GAME_STATE = this.createGameState("SHOW_END_RESULT_GAME_STATE");
        this.SHOW_HIGH_SCORE_GAME_STATE = this.createGameState("SHOW_HIGH_SCORE_GAME_STATE");
    }
    createGameState(name) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new GameState(name, this.index++);
    }
}
GameStateFactory.instance = NullUtil.getInstance().NULL_OBJECT;
