/* Generated Code Do Not Modify */
var _a, _b, _c, _d;
var _e, _f;
import { Object } from '../../../java/lang/Object.js';
//not GWT import const IOException
//not plain js import { MalformedURLException } 
const MalformedURLException = ((_e = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.net) === null || _b === void 0 ? void 0 : _b.MalformedURLException) !== null && _e !== void 0 ? _e : class {
});
//not plain js import { URL } 
const URL = ((_f = (_d = (_c = globalThis.java) === null || _c === void 0 ? void 0 : _c.net) === null || _d === void 0 ? void 0 : _d.URL) !== null && _f !== void 0 ? _f : class {
});
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const CryptInterface
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//sameFolderImports - not GWT import - same folder const XmlRpcHandler
export class XmlRpcClient extends Object {
    constructor(url) {
        super();
        this.url = new URL(url);
    }
    getURL() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.url;
    }
    setBasicAuthentication(user, password) {
    }
    //@Throws(XmlRpcException.constructor, IOException.constructor)
    execute(method, params) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.getInstance().NULL_OBJECT;
    }
    //@Throws(XmlRpcException.constructor, IOException.constructor)
    executeWithCrypt(method, params, cryptInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.getInstance().NULL_OBJECT;
    }
}
