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
import { DebugFactory } from '../../../../org/allbinary/debug/DebugFactory.js';
import { NoDebug } from '../../../../org/allbinary/debug/NoDebug.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LicenseInitInfo extends Object {
    constructor() {
        super();
        this.id = StringUtil.getInstance().EMPTY_STRING;
        this.serverVector = new BasicArrayListD();
    }
    getLicenseId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.id;
    }
    getServer(index) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.serverVector.objectArray[index];
    }
    getNumberOfServers() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.serverVector.size();
        ;
    }
    setLicenseId(value) {
        this.id = value;
    }
    clearServers() {
        this.serverVector = new BasicArrayListD();
    }
    setServer(value, index) {
        this.serverVector.addAt(index, value);
    }
    addServer(value) {
        this.serverVector.add(value);
    }
    getServerList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.serverVector;
    }
    setServerList(servers) {
        if (DebugFactory.getInstance() == NoDebug.getInstance()) {
            this.serverVector = servers;
        }
    }
}
