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
//not GWT import const GameState
import { GameStateFactory } from '../../../org/allbinary/game/state/GameStateFactory.js';
//not GWT import const GameStateFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
export class IntermissionFactory extends Object {
    constructor() {
        super(...arguments);
        this.START_LEVEL_INTERMISSION_GAME_STATE = GameStateFactory.getInstance().createGameState("START_LEVEL_INTERMISSION_GAME_STATE");
        this.WAIT_LEVEL_INTERMISSION_GAME_STATE = GameStateFactory.getInstance().createGameState("WAIT_LEVEL_INTERMISSION_GAME_STATE");
        this.SHOW_RESULTS_LEVEL_INTERMISSION_GAME_STATE = GameStateFactory.getInstance().createGameState("SHOW_RESULTS_LEVEL_INTERMISSION_GAME_STATE");
        this.SHOW_HIGH_SCORE_LEVEL_INTERMISSION_GAME_STATE = GameStateFactory.getInstance().createGameState("SHOW_HIGH_SCORE_LEVEL_INTERMISSION_GAME_STATE");
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return IntermissionFactory.instance;
    }
}
IntermissionFactory.instance = new IntermissionFactory();
