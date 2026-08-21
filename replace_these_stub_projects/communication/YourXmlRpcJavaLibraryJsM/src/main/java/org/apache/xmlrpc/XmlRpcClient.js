/* Generated Code Do Not Modify */
import { Object } from '../../../java/lang/Object.js';
import { URL } from '../../../java/net/URL.js';
import { NullUtil } from '../../../org/allbinary/logic/NullUtil.js';
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
