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
import { KeyEvent } from '../../../../java/awt/event/KeyEvent.js';
//not GWT import const KeyEvent = globalThis.java.awt.event.KeyEvent;
//not plain js import { PositionStrings } from '../../../../org/allbinary/math/PositionStrings.js';
const PositionStrings = globalThis.org.allbinary.math.PositionStrings;
//not plain js import { CommonPhoneStrings } from '../../../../org/allbinary/string/CommonPhoneStrings.js';
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PCGameKey } from './PCGameKey.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;
export class PCKeyFactory extends Object {
    constructor() {
        super(...arguments);
        this.UNKNOWN = new PCGameKey(KeyEvent.VK_UNDEFINED, "UNKNOWN");
        this.ENTER = new PCGameKey(5, "Enter");
        this._A = new PCGameKey(KeyEvent.VK_A, "A");
        this._B = new PCGameKey(KeyEvent.VK_B, "B");
        this._C = new PCGameKey(KeyEvent.VK_C, "C");
        this._D = new PCGameKey(KeyEvent.VK_D, "D");
        this._E = new PCGameKey(KeyEvent.VK_E, "E");
        this._F = new PCGameKey(KeyEvent.VK_F, "F");
        this._G = new PCGameKey(KeyEvent.VK_G, "G");
        this._H = new PCGameKey(KeyEvent.VK_H, "H");
        this._I = new PCGameKey(KeyEvent.VK_I, "I");
        this._J = new PCGameKey(KeyEvent.VK_J, "J");
        this._K = new PCGameKey(KeyEvent.VK_K, "K");
        this._L = new PCGameKey(KeyEvent.VK_L, "L");
        this._M = new PCGameKey(KeyEvent.VK_M, "M");
        this._N = new PCGameKey(KeyEvent.VK_N, "N");
        this._O = new PCGameKey(KeyEvent.VK_O, "O");
        this._P = new PCGameKey(KeyEvent.VK_P, "P");
        this._Q = new PCGameKey(KeyEvent.VK_Q, "Q");
        this._R = new PCGameKey(KeyEvent.VK_R, "R");
        this._S = new PCGameKey(KeyEvent.VK_S, "S");
        this._T = new PCGameKey(KeyEvent.VK_T, "T");
        this._U = new PCGameKey(KeyEvent.VK_U, "U");
        this._V = new PCGameKey(KeyEvent.VK_V, "V");
        this._W = new PCGameKey(KeyEvent.VK_W, "W");
        this._X = new PCGameKey(KeyEvent.VK_X, "X");
        this._Y = new PCGameKey(KeyEvent.VK_Y, "Y");
        this._Z = new PCGameKey(KeyEvent.VK_Z, "Z");
        this.a = new PCGameKey(97, "a");
        this.b = new PCGameKey(98, "b");
        this.c = new PCGameKey(99, "c");
        this.d = new PCGameKey(100, "d");
        this.e = new PCGameKey(101, "e");
        this.f = new PCGameKey(102, "f");
        this.g = new PCGameKey(103, "g");
        this.h = new PCGameKey(104, "h");
        this.i = new PCGameKey(105, "i");
        this.j = new PCGameKey(106, "j");
        this.k = new PCGameKey(107, "k");
        this.l = new PCGameKey(108, "l");
        this.m = new PCGameKey(109, "m");
        this.n = new PCGameKey(110, "n");
        this.o = new PCGameKey(111, "o");
        this.p = new PCGameKey(112, "p");
        this.q = new PCGameKey(113, "q");
        this.r = new PCGameKey(114, "r");
        this.s = new PCGameKey(115, "s");
        this.t = new PCGameKey(116, "t");
        this.u = new PCGameKey(117, "u");
        this.v = new PCGameKey(118, "v");
        this.w = new PCGameKey(119, "w");
        this.x = new PCGameKey(120, PositionStrings.getInstance().X);
        this.y = new PCGameKey(121, PositionStrings.getInstance().Y);
        this.z = new PCGameKey(122, "z");
        this.ZERO = new PCGameKey(KeyEvent.VK_0, CommonPhoneStrings.getInstance().ZERO);
        this.ONE = new PCGameKey(KeyEvent.VK_1, CommonPhoneStrings.getInstance().ONE);
        this.TWO = new PCGameKey(KeyEvent.VK_2, CommonPhoneStrings.getInstance().TWO);
        this.THREE = new PCGameKey(KeyEvent.VK_3, CommonPhoneStrings.getInstance().THREE);
        this.FOUR = new PCGameKey(KeyEvent.VK_4, CommonPhoneStrings.getInstance().FOUR);
        this.FIVE = new PCGameKey(KeyEvent.VK_5, CommonPhoneStrings.getInstance().FIVE);
        this.SIX = new PCGameKey(KeyEvent.VK_6, CommonPhoneStrings.getInstance().SIX);
        this.SEVEN = new PCGameKey(KeyEvent.VK_7, CommonPhoneStrings.getInstance().SEVEN);
        this.EIGHT = new PCGameKey(KeyEvent.VK_8, CommonPhoneStrings.getInstance().EIGHT);
        this.NINE = new PCGameKey(KeyEvent.VK_9, CommonPhoneStrings.getInstance().NINE);
        this.DPAD_UP = new PCGameKey(KeyEvent.VK_UP, CommonPhoneStrings.getInstance().UP);
        this.DPAD_DOWN = new PCGameKey(KeyEvent.VK_DOWN, CommonPhoneStrings.getInstance().DOWN);
        this.DPAD_LEFT = new PCGameKey(KeyEvent.VK_LEFT, CommonPhoneStrings.getInstance().LEFT);
        this.DPAD_RIGHT = new PCGameKey(KeyEvent.VK_RIGHT, CommonPhoneStrings.getInstance().RIGHT);
        this.DPAD_UP2 = this.DPAD_UP;
        this.DPAD_DOWN2 = this.DPAD_DOWN;
        this.DPAD_LEFT2 = this.DPAD_LEFT;
        this.DPAD_RIGHT2 = this.DPAD_RIGHT;
        this.COMMA = new PCGameKey(KeyEvent.VK_COMMA, "COMMA");
        this.SPACE = new PCGameKey(KeyEvent.VK_SPACE, "SPACE");
        this.DEL = new PCGameKey(KeyEvent.VK_DELETE, "DEL");
        this.STAR = new PCGameKey(42, CommonPhoneStrings.getInstance().STAR);
        this.QUESTION = new PCGameKey(47, "?");
        this.PERIOD = new PCGameKey(KeyEvent.VK_PERIOD, CommonSeps.getInstance().PERIOD);
        this.ESCAPE = new PCGameKey(KeyEvent.VK_ESCAPE, "Esc");
        this.BACK_SPACE = new PCGameKey(KeyEvent.VK_BACK_SPACE, "Backspace");
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PCKeyFactory.SINGLETON;
    }
    isSubmission(input) {
        if (input == this.ENTER) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isDelete(input) {
        if (input == this.DEL) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isBackSpace(input) {
        if (input == this.BACK_SPACE) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isUp(input) {
        if (input == this.DPAD_UP || input == this.DPAD_UP2) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isDown(input) {
        if (input == this.DPAD_DOWN || input == this.DPAD_DOWN2) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isLeft(input) {
        if (input == this.DPAD_LEFT || input == this.DPAD_LEFT2) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isRight(input) {
        if (input == this.DPAD_RIGHT || input == this.DPAD_RIGHT2) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isEnter(input) {
        if (input == this.ENTER) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
PCKeyFactory.SINGLETON = new PCKeyFactory();
