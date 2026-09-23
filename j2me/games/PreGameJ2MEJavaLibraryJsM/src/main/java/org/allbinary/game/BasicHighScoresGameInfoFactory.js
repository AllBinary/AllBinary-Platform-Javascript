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
import { GameInfo } from './GameInfo.js';
//not GWT import - same folder const GameInfo
import { GameTypeFactory } from './GameTypeFactory.js';
//not GWT import - same folder const GameTypeFactory
import { GameMode } from './GameMode.js';
//not GWT import - same folder const GameMode
import { PlayerTypesFactory } from './PlayerTypesFactory.js';
//not GWT import - same folder const PlayerTypesFactory
export class BasicHighScoresGameInfoFactory extends Object {
    constructor() {
        super(...arguments);
        this.MULTI_PLAYER_SERVER = new GameInfo(GameTypeFactory.getInstance().MULTI_PLAYER, GameMode.SERVER, PlayerTypesFactory.getInstance().PLAYER_TYPE_ONE, 0, 0);
        this.SINGLE_PLAYER_SERVER = new GameInfo(GameTypeFactory.getInstance().SINGLE_PLAYER, GameMode.SERVER, PlayerTypesFactory.getInstance().PLAYER_TYPE_ONE, 0, 0);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BasicHighScoresGameInfoFactory.SINGLETON;
    }
}
BasicHighScoresGameInfoFactory.SINGLETON = new BasicHighScoresGameInfoFactory();
