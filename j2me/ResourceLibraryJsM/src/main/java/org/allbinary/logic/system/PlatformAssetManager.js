/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const InputStream = globalThis.java.io.InputStream;
//not plain js import { ResourceUtil } 
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class PlatformAssetManager extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return PlatformAssetManager.instance;
    }
    //@Throws(Exception.constructor)
    getResourceAsStream(resource) {
        var resourceUtil = ResourceUtil.getInstance();
        ;
        var inputStream = resourceUtil.getResourceAsStream(resource);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return inputStream;
    }
}
PlatformAssetManager.instance = new PlatformAssetManager();
