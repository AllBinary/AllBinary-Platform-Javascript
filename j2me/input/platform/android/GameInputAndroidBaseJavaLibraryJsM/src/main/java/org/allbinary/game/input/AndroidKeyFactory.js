/* Generated Code Do Not Modify */
import { KeyEvent } from '../../../../android/view/KeyEvent.js';
//not GWT import const KeyEvent = globalThis.android.view.KeyEvent;
import { ActivityFractureUtil } from '../../../../org/allbinary/android/ActivityFractureUtil.js';
//not GWT import const ActivityFractureUtil = globalThis.org.allbinary.android.ActivityFractureUtil;
//not plain js import { CommonPhoneStrings } from '../../../../org/allbinary/string/CommonPhoneStrings.js';
const CommonPhoneStrings = globalThis.org.allbinary.string.CommonPhoneStrings;
//not plain js import { AbPathData } from '../../../../org/allbinary/logic/io/path/AbPathData.js';
const AbPathData = globalThis.org.allbinary.logic.io.path.AbPathData;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AndroidGameKey } from './AndroidGameKey.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;
export class AndroidKeyFactory extends ActivityFractureUtil {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.UNKNOWN = new AndroidGameKey(KeyEvent.KEYCODE_UNKNOWN, "UNKNOWN");
        this.KEYCODE_BUTTON_L1 = this.UNKNOWN;
        this.KEYCODE_BUTTON_R1 = this.UNKNOWN;
        this.KEYCODE_BUTTON_THUMBR = this.UNKNOWN;
        this.KEYCODE_BUTTON_THUMBL = this.UNKNOWN;
        this.KEYCODE_BUTTON_START = this.UNKNOWN;
        this.KEYCODE_BUTTON_MODE = this.UNKNOWN;
        this.KEYCODE_BUTTON_B = this.UNKNOWN;
        this.KEYCODE_BUTTON_A = this.UNKNOWN;
        this.KEYCODE_BUTTON_X = this.UNKNOWN;
        this.KEYCODE_BUTTON_Y = this.UNKNOWN;
        this.KEYCODE_BUTTON_L2 = this.UNKNOWN;
        this.KEYCODE_BUTTON_R2 = this.UNKNOWN;
        this.KEYCODE_BUTTON_SELECT = this.UNKNOWN;
        this.KEYCODE_BUTTON_C = this.UNKNOWN;
        this.KEYCODE_BUTTON_Z = this.UNKNOWN;
        this.KEYCODE_BUTTON_1 = this.UNKNOWN;
        this.KEYCODE_BUTTON_10 = this.UNKNOWN;
        this.KEYCODE_BUTTON_11 = this.UNKNOWN;
        this.KEYCODE_BUTTON_12 = this.UNKNOWN;
        this.KEYCODE_BUTTON_13 = this.UNKNOWN;
        this.KEYCODE_BUTTON_14 = this.UNKNOWN;
        this.KEYCODE_BUTTON_15 = this.UNKNOWN;
        this.KEYCODE_BUTTON_16 = this.UNKNOWN;
        this.KEYCODE_BUTTON_2 = this.UNKNOWN;
        this.KEYCODE_BUTTON_3 = this.UNKNOWN;
        this.KEYCODE_BUTTON_4 = this.UNKNOWN;
        this.KEYCODE_BUTTON_5 = this.UNKNOWN;
        this.KEYCODE_BUTTON_6 = this.UNKNOWN;
        this.KEYCODE_BUTTON_7 = this.UNKNOWN;
        this.KEYCODE_BUTTON_8 = this.UNKNOWN;
        this.KEYCODE_BUTTON_9 = this.UNKNOWN;
        this.SOFT_LEFT = new AndroidGameKey(KeyEvent.KEYCODE_SOFT_LEFT, "SOFT_LEFT");
        this.SOFT_RIGHT = new AndroidGameKey(KeyEvent.KEYCODE_SOFT_RIGHT, "SOFT_RIGHT");
        this.HOME = new AndroidGameKey(KeyEvent.KEYCODE_HOME, "HOME");
        this.BACK = new AndroidGameKey(KeyEvent.KEYCODE_BACK, "BACK");
        this.CALL = new AndroidGameKey(KeyEvent.KEYCODE_CALL, "CALL");
        this.ENDCALL = new AndroidGameKey(KeyEvent.KEYCODE_ENDCALL, "ENDCALL");
        this.ZERO = new AndroidGameKey(KeyEvent.KEYCODE_0, CommonPhoneStrings.getInstance().ZERO);
        this.ONE = new AndroidGameKey(KeyEvent.KEYCODE_1, CommonPhoneStrings.getInstance().ONE);
        this.TWO = new AndroidGameKey(KeyEvent.KEYCODE_2, CommonPhoneStrings.getInstance().TWO);
        this.THREE = new AndroidGameKey(KeyEvent.KEYCODE_3, CommonPhoneStrings.getInstance().THREE);
        this.FOUR = new AndroidGameKey(KeyEvent.KEYCODE_4, CommonPhoneStrings.getInstance().FOUR);
        this.FIVE = new AndroidGameKey(KeyEvent.KEYCODE_5, CommonPhoneStrings.getInstance().FIVE);
        this.SIX = new AndroidGameKey(KeyEvent.KEYCODE_6, CommonPhoneStrings.getInstance().SIX);
        this.SEVEN = new AndroidGameKey(KeyEvent.KEYCODE_7, CommonPhoneStrings.getInstance().SEVEN);
        this.EIGHT = new AndroidGameKey(KeyEvent.KEYCODE_8, CommonPhoneStrings.getInstance().EIGHT);
        this.NINE = new AndroidGameKey(KeyEvent.KEYCODE_9, CommonPhoneStrings.getInstance().NINE);
        this.STAR = new AndroidGameKey(KeyEvent.KEYCODE_STAR, CommonPhoneStrings.getInstance().STAR);
        this.POUND = new AndroidGameKey(KeyEvent.KEYCODE_POUND, CommonPhoneStrings.getInstance().POUND);
        this.DPAD_UP = new AndroidGameKey(KeyEvent.KEYCODE_DPAD_UP, "UP");
        this.DPAD_DOWN = new AndroidGameKey(KeyEvent.KEYCODE_DPAD_DOWN, "DOWN");
        this.DPAD_LEFT = new AndroidGameKey(KeyEvent.KEYCODE_DPAD_LEFT, "LEFT");
        this.DPAD_RIGHT = new AndroidGameKey(KeyEvent.KEYCODE_DPAD_RIGHT, "RIGHT");
        this.DPAD_CENTER = new AndroidGameKey(KeyEvent.KEYCODE_DPAD_CENTER, "CENTER");
        this.VOLUME_UP = new AndroidGameKey(KeyEvent.KEYCODE_VOLUME_UP, "VOLUME_UP");
        this.VOLUME_DOWN = new AndroidGameKey(KeyEvent.KEYCODE_VOLUME_DOWN, "VOLUME_DOWN");
        this.POWER = new AndroidGameKey(KeyEvent.KEYCODE_POWER, "POWER");
        this.CAMERA = new AndroidGameKey(KeyEvent.KEYCODE_CAMERA, "CAMERA");
        this.CLEAR = new AndroidGameKey(KeyEvent.KEYCODE_CLEAR, "CLEAR");
        this.A = new AndroidGameKey(KeyEvent.KEYCODE_A, "A");
        this.B = new AndroidGameKey(KeyEvent.KEYCODE_B, "B");
        this.C = new AndroidGameKey(KeyEvent.KEYCODE_C, "C");
        this.D = new AndroidGameKey(KeyEvent.KEYCODE_D, "D");
        this.E = new AndroidGameKey(KeyEvent.KEYCODE_E, "E");
        this.F = new AndroidGameKey(KeyEvent.KEYCODE_F, "F");
        this.G = new AndroidGameKey(KeyEvent.KEYCODE_G, "G");
        this.H = new AndroidGameKey(KeyEvent.KEYCODE_H, "H");
        this.I = new AndroidGameKey(KeyEvent.KEYCODE_I, "I");
        this.J = new AndroidGameKey(KeyEvent.KEYCODE_J, "J");
        this.K = new AndroidGameKey(KeyEvent.KEYCODE_K, "K");
        this.L = new AndroidGameKey(KeyEvent.KEYCODE_L, "L");
        this.M = new AndroidGameKey(KeyEvent.KEYCODE_M, "M");
        this.N = new AndroidGameKey(KeyEvent.KEYCODE_N, "N");
        this.O = new AndroidGameKey(KeyEvent.KEYCODE_O, "O");
        this.P = new AndroidGameKey(KeyEvent.KEYCODE_P, "P");
        this.Q = new AndroidGameKey(KeyEvent.KEYCODE_Q, "Q");
        this.R = new AndroidGameKey(KeyEvent.KEYCODE_R, "R");
        this.S = new AndroidGameKey(KeyEvent.KEYCODE_S, "S");
        this.T = new AndroidGameKey(KeyEvent.KEYCODE_T, "T");
        this.U = new AndroidGameKey(KeyEvent.KEYCODE_U, "U");
        this.V = new AndroidGameKey(KeyEvent.KEYCODE_V, "V");
        this.W = new AndroidGameKey(KeyEvent.KEYCODE_W, "W");
        this.X = new AndroidGameKey(KeyEvent.KEYCODE_X, "X");
        this.Y = new AndroidGameKey(KeyEvent.KEYCODE_Y, "Y");
        this.Z = new AndroidGameKey(KeyEvent.KEYCODE_Z, "Z");
        this.COMMA = new AndroidGameKey(KeyEvent.KEYCODE_COMMA, "COMMA");
        this.PERIOD = new AndroidGameKey(KeyEvent.KEYCODE_PERIOD, AbPathData.getInstance().EXTENSION_SEP);
        this.ALT_LEFT = new AndroidGameKey(KeyEvent.KEYCODE_ALT_LEFT, "ALT_LEFT");
        this.ALT_RIGHT = new AndroidGameKey(KeyEvent.KEYCODE_ALT_RIGHT, "ALT_RIGHT");
        this.SHIFT_LEFT = new AndroidGameKey(KeyEvent.KEYCODE_SHIFT_LEFT, "SHIFT_LEFT");
        this.SHIFT_RIGHT = new AndroidGameKey(KeyEvent.KEYCODE_SHIFT_RIGHT, "SHIFT_RIGHT");
        this.TAB = new AndroidGameKey(KeyEvent.KEYCODE_TAB, "TAB");
        this.SPACE = new AndroidGameKey(KeyEvent.KEYCODE_SPACE, "SPACE");
        this.SYM = new AndroidGameKey(KeyEvent.KEYCODE_SYM, "SYM");
        this.EXPLORER = new AndroidGameKey(KeyEvent.KEYCODE_EXPLORER, "EXPLORER");
        this.ENVELOPE = new AndroidGameKey(KeyEvent.KEYCODE_ENVELOPE, "ENVELOPE");
        this.ENTER = new AndroidGameKey(KeyEvent.KEYCODE_ENTER, "ENTER");
        this.DEL = new AndroidGameKey(KeyEvent.KEYCODE_DEL, "DEL");
        this.GRAVE = new AndroidGameKey(KeyEvent.KEYCODE_GRAVE, "GRAVE");
        this.MINUS = new AndroidGameKey(KeyEvent.KEYCODE_MINUS, "MINUS");
        this.EQUALS = new AndroidGameKey(KeyEvent.KEYCODE_EQUALS, "EQUALS");
        this.LEFT_BRACKET = new AndroidGameKey(KeyEvent.KEYCODE_LEFT_BRACKET, "LEFT_BRACKET");
        this.RIGHT_BRACKET = new AndroidGameKey(KeyEvent.KEYCODE_RIGHT_BRACKET, "RIGHT_BRACKET");
        this.BACKSLASH = new AndroidGameKey(KeyEvent.KEYCODE_BACKSLASH, "BACKSLASH");
        this.SEMICOLON = new AndroidGameKey(KeyEvent.KEYCODE_SEMICOLON, "SEMICOLON");
        this.APOSTROPHE = new AndroidGameKey(KeyEvent.KEYCODE_APOSTROPHE, "APOSTROPHE");
        this.SLASH = new AndroidGameKey(KeyEvent.KEYCODE_SLASH, "SLASH");
        this.AT = new AndroidGameKey(KeyEvent.KEYCODE_AT, "AT");
        this.NUM = new AndroidGameKey(KeyEvent.KEYCODE_NUM, "NUM");
        this.HEADSETHOOK = new AndroidGameKey(KeyEvent.KEYCODE_HEADSETHOOK, "HEADSETHOOK");
        this.FOCUS = new AndroidGameKey(KeyEvent.KEYCODE_FOCUS, "FOCUS");
        this.PLUS = new AndroidGameKey(KeyEvent.KEYCODE_PLUS, "PLUS");
        this.MENU = new AndroidGameKey(KeyEvent.KEYCODE_MENU, "MENU");
        this.NOTIFICATION = new AndroidGameKey(KeyEvent.KEYCODE_NOTIFICATION, "NOTIFICATION");
        this.SEARCH = new AndroidGameKey(KeyEvent.KEYCODE_SEARCH, "SEARCH");
    }
    init() {
        var commonStrings = CommonStrings.getInstance();
        ;
        this.logUtil.putF("Start/End", this, commonStrings.INIT);
    }
    isSubmission(input) {
        if (input == this.ENTER) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else if (input == this.DPAD_CENTER) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isDelete(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isBackSpace(input) {
        if (input == this.DEL) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isLeft(input) {
        if (input == this.DPAD_LEFT) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isRight(input) {
        if (input == this.DPAD_RIGHT) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isUp(input) {
        if (input == this.DPAD_UP) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isDown(input) {
        if (input == this.DPAD_DOWN) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isEnter(input) {
        if (input == this.DPAD_CENTER) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else if (input == this.ENTER) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else if (input == this.CALL) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
