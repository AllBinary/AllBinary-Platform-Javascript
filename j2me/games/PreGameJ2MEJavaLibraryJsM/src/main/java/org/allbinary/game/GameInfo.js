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
import { Integer } from '../../../java/lang/Integer.js';
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameTypeFactory } from './GameTypeFactory.js';
//not GWT import - same folder const GameTypeFactory = globalThis.org.allbinary.game.GameTypeFactory;
import { GameMode } from './GameMode.js';
//not GWT import - same folder const GameMode = globalThis.org.allbinary.game.GameMode;
import { PlayerTypesFactory } from './PlayerTypesFactory.js';
//not GWT import - same folder const PlayerTypesFactory = globalThis.org.allbinary.game.PlayerTypesFactory;
import { GameInfoData } from './GameInfoData.js';
//not GWT import - same folder const PlayerType = globalThis.org.allbinary.game.PlayerType;
export class GameInfo extends Object {
    constructor(gameType, gameMode, playerType, highestLevel, currentLevel) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.gameInfoData = GameInfoData.getInstance();
        this.highestLevel = 0;
        this.NEW_LEVEL = "New Level: ";
        this.SET_CURRENT_LEVEL = "setCurrentLevel";
        this.NEXT = "Next ";
        this.NEXT_GAME_LEVEL = "nextGameLevel";
        this.gameType = gameType;
        this.gameMode = gameMode;
        this.setHighestLevel(highestLevel);
        this.currentLevel = currentLevel;
        this.playerType = playerType;
    }
    getGameType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameType;
    }
    getGameMode() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameMode;
    }
    getPlayerType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.playerType;
    }
    getHighestLevel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.highestLevel;
    }
    setHighestLevel(highestLevel) {
        this.highestLevel = highestLevel;
    }
    getCurrentLevel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentLevel;
    }
    setCurrentLevel(currentLevel) {
        this.currentLevel = currentLevel;
        this.logUtil.putF(new StringMaker().append(this.NEW_LEVEL).appendint(this.getCurrentLevel()).toString(), this, this.SET_CURRENT_LEVEL);
    }
    nextGameLevel() {
        if (this.getCurrentLevel() < this.getHighestLevel()) {
            this.currentLevel++;
        }
        this.logUtil.putF(new StringMaker().append(this.NEXT).append(this.NEW_LEVEL).appendint(this.getCurrentLevel()).toString(), this, this.NEXT_GAME_LEVEL);
    }
    previousGameLevel() {
        if (this.getCurrentLevel() > 1)
            this.currentLevel--;
    }
    isLastLevel() {
        if (this.getCurrentLevel() >= this.getHighestLevel()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    toHashtable() {
        var hashtable = StdUtil.getInstance().createHashtable();
        ;
        hashtable.put(this.gameInfoData.GAME_TYPE, this.getGameType().toString());
        hashtable.put(this.gameInfoData.GAME_MODE, this.gameMode.toString());
        hashtable.put(this.gameInfoData.PLAYER_TYPE, this.playerType.toString());
        hashtable.put(this.gameInfoData.HIGHEST_LEVEL, Integer.toString(this.getHighestLevel()));
        hashtable.put(this.gameInfoData.CURRENT_LEVEL, this.currentLevel.toString());
        //if statement needs to be on the same line and ternary does not work the same way.
        return hashtable;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        var commonSeps = CommonSeps.getInstance();
        ;
        stringBuffer.append(this.gameInfoData.GAME_TYPE);
        stringBuffer.append(commonSeps.EQUALS);
        stringBuffer.append(this.getGameType().toString());
        stringBuffer.append(commonSeps.COMMA_SEP);
        stringBuffer.append(this.gameInfoData.GAME_MODE);
        stringBuffer.append(commonSeps.EQUALS);
        stringBuffer.append(this.gameMode.toString());
        stringBuffer.append(commonSeps.COMMA_SEP);
        stringBuffer.append(this.gameInfoData.PLAYER_TYPE);
        stringBuffer.append(commonSeps.EQUALS);
        stringBuffer.append(StringUtil.getInstance().toString(this.playerType));
        stringBuffer.append(commonSeps.COMMA_SEP);
        stringBuffer.append(this.gameInfoData.HIGHEST_LEVEL);
        stringBuffer.append(commonSeps.EQUALS);
        stringBuffer.appendint(this.getHighestLevel());
        stringBuffer.append(commonSeps.COMMA_SEP);
        stringBuffer.append(this.gameInfoData.CURRENT_LEVEL);
        stringBuffer.append(commonSeps.EQUALS);
        stringBuffer.appendint(this.currentLevel);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
GameInfo.NONE = new GameInfo(GameTypeFactory.getInstance().NONE, GameMode.NONE, PlayerTypesFactory.getInstance().PLAYER_TYPE_ONE, -1, -1);
GameInfo.LEVEL_NAME = "LEVEL";
