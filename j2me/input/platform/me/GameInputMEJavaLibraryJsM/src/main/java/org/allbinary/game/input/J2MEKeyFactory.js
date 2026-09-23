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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameKeyFactory } from './GameKeyFactory.js';
//not GWT import - same folder const GameKey
import { InputFactory } from './InputFactory.js';
//not GWT import - same folder const Input
export class J2MEKeyFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return J2MEKeyFactory.instance;
    }
    constructor() {
        super();
        this.gameKeyFactory = GameKeyFactory.getInstance();
    }
    init() {
        var gameKeyArray = [
            this.gameKeyFactory.DOWN, this.gameKeyFactory.FIRE, this.gameKeyFactory.GAME_A, this.gameKeyFactory.GAME_B, this.gameKeyFactory.GAME_C, this.gameKeyFactory.GAME_D, this.gameKeyFactory.KEY_NUM0, this.gameKeyFactory.KEY_NUM1, this.gameKeyFactory.KEY_NUM2, this.gameKeyFactory.KEY_NUM3, this.gameKeyFactory.KEY_NUM4, this.gameKeyFactory.KEY_NUM5, this.gameKeyFactory.KEY_NUM6, this.gameKeyFactory.KEY_NUM7, this.gameKeyFactory.KEY_NUM8, this.gameKeyFactory.KEY_NUM9, this.gameKeyFactory.KEY_POUND, this.gameKeyFactory.KEY_STAR, this.gameKeyFactory.LEFT, this.gameKeyFactory.LEVEL_DOWN, this.gameKeyFactory.LEVEL_UP, this.gameKeyFactory.NONE, this.gameKeyFactory.RIGHT, this.gameKeyFactory.UP
        ];
        ;
        var inputFactory = InputFactory.getInstance();
        ;
        for (var index = gameKeyArray.length; --index >= 0;) {
            inputFactory.add(gameKeyArray[index].getId(), gameKeyArray[index]);
        }
    }
    isSubmission(input) {
        if (input == this.gameKeyFactory.FIRE) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isDelete(input) {
        if (input == this.gameKeyFactory.GAME_D) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isBackSpace(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isUp(input) {
        if (input == this.gameKeyFactory.UP) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isDown(input) {
        if (input == this.gameKeyFactory.DOWN) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isLeft(input) {
        if (input == this.gameKeyFactory.LEFT) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isRight(input) {
        if (input == this.gameKeyFactory.RIGHT) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isEnter(input) {
        if (input == this.gameKeyFactory.FIRE) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
J2MEKeyFactory.instance = new J2MEKeyFactory();
