/* Generated Code Do Not Modify */
import { Provider } from '../../../../java/security/Provider.js';
//not GWT import const Provider
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BouncyCastleProvider extends Provider {
    constructor() {
        super(BouncyCastleProvider.PROVIDER_NAME, 1.41, BouncyCastleProvider.info);
        //For kotlin this is before the body of the constructor.
    }
    setParameter(parameterName, parameter = {}) {
    }
}
BouncyCastleProvider.info = "BouncyCastle Security Provider v1.41";
BouncyCastleProvider.PROVIDER_NAME = "BC";
