/* Generated Code Do Not Modify */
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AndroidKeyFactory } from './AndroidKeyFactory.js';
//not GWT import const AndroidKeyFactory = globalThis.org.allbinary.game.input.AndroidKeyFactory;
export class AndroidAPI1KeyFactory extends AndroidKeyFactory {
    static getInstance() {
        if (AndroidAPI1KeyFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            AndroidAPI1KeyFactory.instance = new AndroidAPI1KeyFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return AndroidAPI1KeyFactory.instance;
    }
    constructor() {
        super();
    }
}
AndroidAPI1KeyFactory.instance = NullUtil.getInstance().NULL_OBJECT;
