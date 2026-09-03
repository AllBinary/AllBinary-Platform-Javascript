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
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LicenseInitInfo } from './LicenseInitInfo.js';
//not GWT import const LicenseInitInfo = globalThis.org.allbinary.business.init.LicenseInitInfo;
export class LicenseInitInfoUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LicenseInitInfoUtil.instance;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    setFilePath(filePath) {
    }
    constructor() {
        super();
        this.INITFILENAME = "licenseinitdata.dat";
        this.ABOUT = "about";
        this.PRIVACY_POLICY = "privacy_policy";
        this.OFFICIAL_ALLBINARY_SERVICES_SERVER = "https://services.allbinary.com/LicServ/serverssl.php";
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    write(initData) {
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    read() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.readAgain(0);
        ;
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    readAgain(initializeCounter) {
        var licenseInitInfo = new LicenseInitInfo();
        ;
        licenseInitInfo.clearServers();
        licenseInitInfo.addServer(this.OFFICIAL_ALLBINARY_SERVICES_SERVER);
        //if statement needs to be on the same line and ternary does not work the same way.
        return licenseInitInfo;
    }
}
LicenseInitInfoUtil.instance = new LicenseInitInfoUtil();
