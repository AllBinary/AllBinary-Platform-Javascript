/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CacheType } from './CacheType.js';
//not GWT import - same folder const CacheType
export class CacheTypeFactory extends Object {
    constructor() {
        super(...arguments);
        this.NO_CACHE = new CacheType(StringUtil.getInstance().EMPTY_STRING, StringUtil.getInstance().EMPTY_STRING);
        this.CACHE = new CacheType(StringUtil.getInstance().EMPTY_STRING, StringUtil.getInstance().EMPTY_STRING);
        this.SET = new CacheType(StringUtil.getInstance().EMPTY_STRING, "Set");
        this.CACHE_VECTOR = new CacheType(StringUtil.getInstance().EMPTY_STRING, StringUtil.getInstance().EMPTY_STRING);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CacheTypeFactory.instance;
    }
}
CacheTypeFactory.instance = new CacheTypeFactory();
