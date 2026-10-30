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
import { Object } from '../../../../../../../java/lang/Object.js';
//not GWT import const LicenseInitInfo
import { LicenseInitInfoUtil } from '../../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js';
//not GWT import const LicenseInitInfoUtil
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const XmlRpcAbeClient
import { StringValidationUtil } from '../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const AbeLicenseInterface
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { XmlRpcAbeLicenseRetrievalClient } from './XmlRpcAbeLicenseRetrievalClient.js';
//sameFolderImports - not GWT import - same folder const XmlRpcAbeLicenseRetrievalClient
export class AbeLicenseClient extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.MINSERVERS = 3;
    }
    //@Throws(Exception.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    get(abeClientInformation) {
        try {
            this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.GET);
            let xmlRpcAbeLicenseClient = new XmlRpcAbeLicenseRetrievalClient(abeClientInformation);
            ;
            let abeLicenseInterface = xmlRpcAbeLicenseClient.get(null);
            ;
            let licenseId = abeLicenseInterface.getLicenseId();
            ;
            let servers = abeLicenseInterface.getServers();
            ;
            let isNewLicenseId = false;
            ;
            let isBetterServerList = false;
            ;
            let stringValidationUtil = StringValidationUtil.getInstance();
            ;
            if (stringValidationUtil.isEmpty(abeClientInformation.getLicenseId()) && !abeClientInformation.isSameId(licenseId)) {
                isNewLicenseId = true;
            }
            if (servers.size() >= this.MINSERVERS && abeClientInformation.isLargerOrDifferentServerList(servers)) {
                isBetterServerList = true;
            }
            if (isBetterServerList || isNewLicenseId) {
                let initInfo = LicenseInitInfoUtil.getInstance().read();
                ;
                initInfo.setLicenseId(licenseId);
                initInfo.setServerList(servers);
                LicenseInitInfoUtil.getInstance().write(initInfo);
                abeClientInformation.init();
            }
            this.logUtil.putF(this.commonStrings.END, this, this.commonStrings.GET);
            //if statement needs to be on the same line and ternary does not work the same way.
            return abeLicenseInterface;
        }
        catch (caught) {
            {
                const e = caught;
                throw e;
            }
        }
    }
}
