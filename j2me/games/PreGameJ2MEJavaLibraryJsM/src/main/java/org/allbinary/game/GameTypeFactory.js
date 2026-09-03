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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { StringUtil } from '../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameType } from './GameType.js';
//not GWT import const GameType = globalThis.org.allbinary.game.GameType;
export class GameTypeFactory extends Object {
    constructor() {
        super(...arguments);
        this.NULL_GAME_TYPE_ARRAY = [];
        this.NONE = new GameType(StringUtil.getInstance().NULL_STRING);
        this.SINGLE_PLAYER = new GameType("Single Player");
        this.MULTI_PLAYER = new GameType("Multi Player");
        this.BOT = new GameType("Artificial Player");
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameTypeFactory.instance;
    }
}
GameTypeFactory.instance = new GameTypeFactory();
