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
/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
import { System } from '../../../../../java/lang/System.js';
import { URL } from '../../../../../java/net/URL.js';
import { JarInputStream } from '../../../../../java/util/jar/JarInputStream.js';
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
        var cache = new Array(1024);
        ;
        try {
            var conn = this.jarURL.openConnection();
            ;
            var jis = new JarInputStream(conn.getInputStream());
            ;
            while (true) {
                var entry = jis.getNextJarEntry();
                ;
                if (entry !=
                    null) {
                    if (!entry.isDirectory()) {
                        var offset = 0;
                        ;
                        var i = 0;
                        ;
                        while ((i = jis.read(cache, offset, cache.length - offset)) != -1) {
                            offset += i;
                            if (offset >= cache.length) {
                                var newcache = new Array(cache.length + 1024);
                                ;
                                System.arraycopy(cache, 0, newcache, 0, cache.length);
                                cache = newcache;
                            }
                        }
                        var tmp = new Array(offset);
                        ;
                        System.arraycopy(cache, 0, tmp, 0, offset);
                        console.log(entry.getName());
                    }
                }
                else {
                    break;
                }
            }
            //: 
        }
        catch (ex) {
            System.err.println(ex);
            ex.printStackTrace();
        }
    }
}
