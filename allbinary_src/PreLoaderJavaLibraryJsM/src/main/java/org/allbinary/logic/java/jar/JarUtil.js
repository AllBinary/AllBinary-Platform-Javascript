/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
var _a, _b;
var _c;
/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
import { System } from '../../../../../java/lang/System.js';
import { IOException } from '../../../../../java/io/IOException.js';
//not GWT import const IOException
//not plain js import { URL } 
const URL = ((_c = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.net) === null || _b === void 0 ? void 0 : _b.URL) !== null && _c !== void 0 ? _c : class {
});
//not GWT import const JarEntry
import { JarInputStream } from '../../../../../java/util/jar/JarInputStream.js';
//not GWT import const JarInputStream
//Current folder imports from return types, extended types, and scope (deduplicated)
export class JarUtil extends Object {
    //@Throws(Exception.constructor)
    static main(args) {
        new JarUtil(new URL("file:///G:/mnt/bc/mydev/working/j2me/MiniSpaceWars/MiniSpaceWars/dist/MiniSpaceWars.jar")).show();
    }
    constructor(jarURL) {
        super();
        this.jarURL = jarURL;
    }
    show() {
        let cache = new Array(1024);
        ;
        try {
            let conn = this.jarURL.openConnection();
            ;
            let jis = new JarInputStream(conn.getInputStream());
            ;
            while (true) {
                let entry = jis.getNextJarEntry();
                ;
                if (entry !=
                    null) {
                    if (!entry.isDirectory()) {
                        let offset = 0;
                        ;
                        let i = 0;
                        ;
                        while ((i = jis.read(cache, offset, cache.length - offset)) != -1) {
                            offset += i;
                            if (offset >= cache.length) {
                                let newcache = new Array(cache.length + 1024);
                                ;
                                System.arraycopy(cache, 0, newcache, 0, cache.length);
                                cache = newcache;
                            }
                        }
                        let tmp = new Array(offset);
                        ;
                        System.arraycopy(cache, 0, tmp, 0, offset);
                        console.log(entry.getName());
                    }
                }
                else {
                    break;
                }
            }
        }
        catch (caught) {
            if (caught instanceof IOException) {
                const ex = caught;
                System.err.println(ex);
                ex.printStackTrace();
            }
            else {
                throw caught;
            }
        }
    }
}
