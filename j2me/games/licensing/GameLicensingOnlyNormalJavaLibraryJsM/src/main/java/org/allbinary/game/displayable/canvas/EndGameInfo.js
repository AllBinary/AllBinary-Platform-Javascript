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
//not GWT import const MyCanvas
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class EndGameInfo extends Object {
    constructor() {
        super();
        this.NORMAL_GAME_OVER = "Game Over";
        this.NORMAL_GAME_OVER_WIN = "You Won";
        this.gameOverStr = StringUtil.getInstance().EMPTY_STRING;
        this.winStr = this.gameOverStr;
    }
    update(gameInfo, myCanvas) {
        this.setGameOverStr(this.NORMAL_GAME_OVER);
        this.setWinStr(this.NORMAL_GAME_OVER_WIN);
    }
    getGameOverStr() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameOverStr;
    }
    setGameOverStr(gameOverStr) {
        this.gameOverStr = gameOverStr;
    }
    getWinStr() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.winStr;
    }
    setWinStr(winStr) {
        this.winStr = winStr;
    }
}
