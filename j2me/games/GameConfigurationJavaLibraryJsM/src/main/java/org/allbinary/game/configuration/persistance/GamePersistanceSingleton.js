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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { KeyValuePersistance } from './KeyValuePersistance.js';
//not GWT import - same folder const KeyValuePersistance = globalThis.org.allbinary.game.configuration.persistance.KeyValuePersistance;
import { GamePersistanceStrings } from './GamePersistanceStrings.js';
//not GWT import - same folder const GamePersistanceStrings = globalThis.org.allbinary.game.configuration.persistance.GamePersistanceStrings;
export class GamePersistanceSingleton extends KeyValuePersistance {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GamePersistanceSingleton.GAME_PERSISTANCE;
    }
    constructor() {
        super(GamePersistanceStrings.getInstance().SAVED_GAME_RECORD_ID);
        //For kotlin this is before the body of the constructor.
    }
}
GamePersistanceSingleton.GAME_PERSISTANCE = new GamePersistanceSingleton();
