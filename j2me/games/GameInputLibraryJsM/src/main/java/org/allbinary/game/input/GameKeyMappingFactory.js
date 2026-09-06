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
import { InputFactory } from './InputFactory.js';
//not GWT import - same folder const GameKey = globalThis.org.allbinary.game.input.GameKey;
import { GameKeyFactory } from './GameKeyFactory.js';
//not GWT import - same folder const GameKeyFactory = globalThis.org.allbinary.game.input.GameKeyFactory;
export class GameKeyMappingFactory extends Object {
    static getInstance() {
        if (GameKeyMappingFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            GameKeyMappingFactory.instance = new GameKeyMappingFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameKeyMappingFactory.instance;
    }
    constructor() {
        super();
        this.intKeyToGameKey = new Array(InputFactory.getInstance().MAX);
        var gameKeyFactory = GameKeyFactory.getInstance();
        ;
        this.setGameKey(gameKeyFactory.NONE);
        this.setGameKey(gameKeyFactory.UP);
        this.setGameKey(gameKeyFactory.DOWN);
        this.setGameKey(gameKeyFactory.LEFT);
        this.setGameKey(gameKeyFactory.RIGHT);
        this.setGameKey(gameKeyFactory.KEY_POUND);
        this.setGameKey(gameKeyFactory.KEY_STAR);
        this.setGameKey(gameKeyFactory.KEY_NUM0);
        this.setGameKey(gameKeyFactory.KEY_NUM1);
        this.setGameKey(gameKeyFactory.KEY_NUM2);
        this.setGameKey(gameKeyFactory.KEY_NUM3);
        this.setGameKey(gameKeyFactory.KEY_NUM4);
        this.setGameKey(gameKeyFactory.KEY_NUM5);
        this.setGameKey(gameKeyFactory.KEY_NUM6);
        this.setGameKey(gameKeyFactory.KEY_NUM7);
        this.setGameKey(gameKeyFactory.KEY_NUM8);
        this.setGameKey(gameKeyFactory.KEY_NUM9);
        this.setGameKey(gameKeyFactory.GAME_A);
        this.setGameKey(gameKeyFactory.GAME_B);
        this.setGameKey(gameKeyFactory.GAME_C);
        this.setGameKey(gameKeyFactory.GAME_D);
        this.setGameKey(gameKeyFactory.FIRE);
        this.setGameKey(gameKeyFactory.LEVEL_DOWN);
        this.setGameKey(gameKeyFactory.LEVEL_UP);
    }
    getGameKey(key) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.intKeyToGameKey[key];
    }
    setGameKey(gameKey) {
        this.intKeyToGameKey[gameKey.getId()] = gameKey;
    }
}
GameKeyMappingFactory.instance = NullUtil.getInstance().NULL_OBJECT;
