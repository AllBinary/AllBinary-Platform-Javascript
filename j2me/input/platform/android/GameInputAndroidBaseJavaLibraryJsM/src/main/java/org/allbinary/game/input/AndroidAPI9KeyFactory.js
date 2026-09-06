/* Generated Code Do Not Modify */
import { KeyEvent } from '../../../../android/view/KeyEvent.js';
//not GWT import const KeyEvent = globalThis.android.view.KeyEvent;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AndroidKeyFactory } from './AndroidKeyFactory.js';
//not GWT import - same folder const AndroidKeyFactory = globalThis.org.allbinary.game.input.AndroidKeyFactory;
import { AndroidGameKey } from './AndroidGameKey.js';
//not GWT import - same folder const AndroidGameKey = globalThis.org.allbinary.game.input.AndroidGameKey;
export class AndroidAPI9KeyFactory extends AndroidKeyFactory {
    static getInstance() {
        if (AndroidAPI9KeyFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            AndroidAPI9KeyFactory.instance = new AndroidAPI9KeyFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return AndroidAPI9KeyFactory.instance;
    }
    constructor() {
        super();
        this.KEYCODE_BUTTON_L1 = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_L1, "BUTTON L1");
        this.KEYCODE_BUTTON_R1 = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_R1, "BUTTON R1");
        this.KEYCODE_BUTTON_THUMBR = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_THUMBR, "BUTTON THUMBR");
        this.KEYCODE_BUTTON_THUMBL = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_THUMBL, "BUTTON THUMBL");
        this.KEYCODE_BUTTON_START = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_START, "BUTTON START");
        this.KEYCODE_BUTTON_MODE = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_MODE, "BUTTON MODE");
        this.KEYCODE_BUTTON_B = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_B, "BUTTON B");
        this.KEYCODE_BUTTON_A = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_A, "BUTTON A");
        this.KEYCODE_BUTTON_X = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_X, "BUTTON X");
        this.KEYCODE_BUTTON_Y = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_Y, "BUTTON Y");
        this.KEYCODE_BUTTON_L2 = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_L2, "BUTTON L2");
        this.KEYCODE_BUTTON_R2 = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_R2, "BUTTON R2");
        this.KEYCODE_BUTTON_SELECT = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_SELECT, "BUTTON SELECT");
        this.KEYCODE_BUTTON_C = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_C, "BUTTON C");
        this.KEYCODE_BUTTON_Z = new AndroidGameKey(KeyEvent.KEYCODE_BUTTON_Z, "BUTTON Z");
    }
}
AndroidAPI9KeyFactory.instance = NullUtil.getInstance().NULL_OBJECT;
