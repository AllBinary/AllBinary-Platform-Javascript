/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
//not GWT import const MalformedURLException = globalThis.java.net.MalformedURLException;
import { URL } from '../../../java/net/URL.js';
//not GWT import const URL = globalThis.java.net.URL;
//not plain js import { BasicArrayList } from '../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const CryptInterface = globalThis.org.allbinary.init.crypt.jcehelper.CryptInterface;
//not plain js import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not GWT import const XmlRpcHandler = globalThis.org.apache.xmlrpc.XmlRpcHandler;
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
    execute(method, params, cryptInterface) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.getInstance().NULL_OBJECT;
    }
}
