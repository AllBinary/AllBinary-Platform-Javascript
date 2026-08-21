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
import { Object } from '../../../../java/lang/Object.js';
import { Hashtable } from '../../../../java/util/Hashtable.js';
import { DebugFactory } from '../../../../org/allbinary/debug/DebugFactory.js';
import { NoDebug } from '../../../../org/allbinary/debug/NoDebug.js';
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
import { HashtableUtil } from '../../../../org/allbinary/util/HashtableUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
//Android
export class ResourceUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ResourceUtil.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.context = NullUtil.getInstance().NULL_OBJECT;
        this.resources = NullUtil.getInstance().NULL_OBJECT;
        this.hashMap = new Hashtable();
    }
    setLoadingPaths(path, ext) {
        this.logUtil.putF(CommonStrings.getInstance().NOT_IMPLEMENTED, this, "setLoadingPaths");
    }
    getContext() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.context;
    }
    setContextFromActivity(activity) {
        this.context = activity;
    }
    setContext(aContext) {
        this.context = aContext;
    }
    getResourceId(resource) {
        var value = this.hashMap.get(resource);
        ;
        if (DebugFactory.getInstance() != NoDebug.getInstance()) {
            PreLogUtil.put(new StringMaker().append(resource).append(CommonSeps.getInstance().COLON).append(value.toString()).toString(), this, "getResourceId");
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return value;
    }
    addResource(resource, value) {
        if (DebugFactory.getInstance() != NoDebug.getInstance()) {
            PreLogUtil.put(new StringMaker().append(resource).append(CommonSeps.getInstance().COLON).append(value.toString()).toString(), this, "addResource");
            if (this.containsDuplicate(resource, value)) {
                ForcedLogUtil.log(new StringMaker().append("Found Duplicate Resource: ").append(resource).toString(), this);
            }
        }
        this.hashMap.put(resource, value);
    }
    containsDuplicate(resource, value) {
        var objectArray = HashtableUtil.getInstance().getKeysAsArray(this.hashMap);
        ;
        for (var index = objectArray.length; --index >= 0;) {
            var integer = this.hashMap.get(objectArray[index]);
            ;
            if (resource != objectArray[index]) {
                if (value != integer) {
                    if (value.intValue() == integer.intValue()) {
                        //if statement needs to be on the same line and ternary does not work the same way.
                        return true;
                    }
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    setResources(resources) {
        this.logUtil.putF(new StringMaker().append("Resource Loader: ").append(resources.constructor.name.toString()).toString(), this, "setResources");
        this.resources = resources;
    }
    //@Throws(Exception.constructor)
    getResourceAsStream(resource) {
        var integer = this.hashMap.get(resource);
        ;
        var id = integer.intValue();
        ;
        var resources = this.resources;
        ;
        var inputStream = resources.openRawResource(id);
        ;
        if (inputStream !=
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return inputStream;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return inputStream;
    }
}
ResourceUtil.instance = new ResourceUtil();
