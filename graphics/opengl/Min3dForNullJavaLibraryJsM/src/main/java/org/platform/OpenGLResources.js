/* Generated Code Do Not Modify */
import { Object } from '../../java/lang/Object.js';
import { RuntimeException } from '../../java/lang/RuntimeException.js';
//not GWT import const InputStream = globalThis.java.io.InputStream;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class OpenGLResources extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLResources.instance;
    }
    init() {
    }
    isExcluded(name) {
        throw new RuntimeException();
    }
    getIdentifier(name, defType, defPackage) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    openRawResource(id) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    openRawResourceFromName(resourceName) {
        throw new RuntimeException();
    }
    //@Throws(Exception.constructor)
    getResourceAsStream(resourceName) {
        throw new RuntimeException();
    }
    getPackageName() {
        throw new RuntimeException();
    }
}
OpenGLResources.instance = new OpenGLResources();
