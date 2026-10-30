/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
//not GWT import const IOException
//not plain js import { MalformedURLException } 
const MalformedURLException = globalThis.java.net.MalformedURLException;
//not plain js import { URL } 
const URL = globalThis.java.net.URL;
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
    execute(...args) {
        if (args.length === 2 && typeof args[0] === 'string')
            return this.execute$overload1(args[0], args[1]);
        if (args.length === 3 && typeof args[0] === 'string')
            return this.execute$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: execute');
    }
    //@Throws(XmlRpcException.constructor, IOException.constructor)
    execute$overload1(method, params) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.getInstance().NULL_OBJECT;
    }
    //@Throws(XmlRpcException.constructor, IOException.constructor)
    execute$overload2(method, params, cryptInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.getInstance().NULL_OBJECT;
    }
}
