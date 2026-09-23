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
import { Object } from '../../../../../java/lang/Object.js';
import { GameKey } from '../../../../../org/allbinary/game/input/GameKey.js';
//not GWT import const GameKey
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameInputMapping extends Object {
    constructor(name, gameKey) {
        super();
        this.name = StringUtil.getInstance().EMPTY_STRING;
        this.gameKey = GameKey.NULL_GAME_KEY;
        this.setName(name);
        this.setGameKey(gameKey);
    }
    setGameKey(gameKey) {
        this.gameKey = gameKey;
    }
    getGameKey() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameKey;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
}
