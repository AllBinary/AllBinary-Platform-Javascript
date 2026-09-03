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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { DebugFactory } from '../../../../org/allbinary/debug/DebugFactory.js';
//not GWT import const DebugFactory = globalThis.org.allbinary.debug.DebugFactory;
import { NoDebug } from '../../../../org/allbinary/debug/NoDebug.js';
//not GWT import const NoDebug = globalThis.org.allbinary.debug.NoDebug;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LicenseInitInfo extends Object {
    constructor() {
        super();
        this.id = StringUtil.getInstance().EMPTY_STRING;
        this.serverList = new BasicArrayListD();
    }
    getLicenseId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.id;
    }
    getServer(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.serverList.get(index);
    }
    getNumberOfServers() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.serverList.size();
        ;
    }
    setLicenseId(value) {
        this.id = value;
    }
    clearServers() {
        this.serverList.clear();
    }
    setServer(value, index) {
        this.serverList.addAt(index, value);
    }
    addServer(value) {
        this.serverList.add(value);
    }
    getServerList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.serverList;
    }
    setServerList(servers) {
        if (DebugFactory.getInstance() == NoDebug.getInstance()) {
            this.serverList = servers;
        }
    }
}
