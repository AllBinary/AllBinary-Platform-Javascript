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
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const Canvas
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { CommonPhoneStrings } 
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameKey } from './GameKey.js';
//not GWT import - same folder const GameKey
import { InputFactory } from './InputFactory.js';
//not GWT import - same folder const InputFactory
export class GameKeyFactory extends Object {
    constructor() {
        super(...arguments);
        this.NONE = new GameKey(InputFactory.getInstance().MAX - 1, "None");
        this.UP = new GameKey(Canvas.UP, CommonPhoneStrings.getInstance().UP);
        this.DOWN = new GameKey(Canvas.DOWN, CommonPhoneStrings.getInstance().DOWN);
        this.LEFT = new GameKey(Canvas.LEFT, CommonPhoneStrings.getInstance().LEFT);
        this.RIGHT = new GameKey(Canvas.RIGHT, CommonPhoneStrings.getInstance().RIGHT);
        this.KEY_POUND = new GameKey(Canvas.KEY_POUND, "POUND");
        this.KEY_STAR = new GameKey(Canvas.KEY_STAR, "STAR");
        this.KEY_NUM0 = new GameKey(Canvas.KEY_NUM0, CommonPhoneStrings.getInstance().ZERO);
        this.KEY_NUM1 = new GameKey(Canvas.KEY_NUM1, CommonPhoneStrings.getInstance().ONE);
        this.KEY_NUM2 = new GameKey(Canvas.KEY_NUM2, CommonPhoneStrings.getInstance().TWO);
        this.KEY_NUM3 = new GameKey(Canvas.KEY_NUM3, CommonPhoneStrings.getInstance().THREE);
        this.KEY_NUM4 = new GameKey(Canvas.KEY_NUM4, CommonPhoneStrings.getInstance().FOUR);
        this.KEY_NUM5 = new GameKey(Canvas.KEY_NUM5, CommonPhoneStrings.getInstance().FIVE);
        this.KEY_NUM6 = new GameKey(Canvas.KEY_NUM6, CommonPhoneStrings.getInstance().SIX);
        this.KEY_NUM7 = new GameKey(Canvas.KEY_NUM7, CommonPhoneStrings.getInstance().SEVEN);
        this.KEY_NUM8 = new GameKey(Canvas.KEY_NUM8, CommonPhoneStrings.getInstance().EIGHT);
        this.KEY_NUM9 = new GameKey(Canvas.KEY_NUM9, CommonPhoneStrings.getInstance().NINE);
        this.GAME_A = new GameKey(Canvas.GAME_A, "Game A");
        this.GAME_B = new GameKey(Canvas.GAME_B, "Game B");
        this.GAME_C = new GameKey(Canvas.GAME_C, "Game C");
        this.GAME_D = new GameKey(Canvas.GAME_D, "Game D");
        this.FIRE = new GameKey(Canvas.FIRE, CommonPhoneStrings.getInstance().FIRE);
        this.LEVEL_DOWN = new GameKey(Canvas.KEY_NUM9 + 1, "Cheat Level Up");
        this.LEVEL_UP = new GameKey(Canvas.KEY_NUM9 + 2, "Cheat Level Down");
    }
    static getInstance() {
        if (GameKeyFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            GameKeyFactory.instance = new GameKeyFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameKeyFactory.instance;
    }
}
GameKeyFactory.instance = NullUtil.getInstance().NULL_OBJECT;
