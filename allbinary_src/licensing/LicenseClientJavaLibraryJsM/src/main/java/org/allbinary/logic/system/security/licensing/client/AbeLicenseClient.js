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
//not GWT import const LicenseInitInfo = globalThis.org.allbinary.business.init.LicenseInitInfo;
import { LicenseInitInfoUtil } from '../../../../../../../org/allbinary/business/init/LicenseInitInfoUtil.js';
//not GWT import const LicenseInitInfoUtil = globalThis.org.allbinary.business.init.LicenseInitInfoUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import const XmlRpcAbeClient = globalThis.org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient;
import { StringValidationUtil } from '../../../../../../../org/allbinary/logic/string/StringValidationUtil.js';
//not GWT import const AbeLicenseInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeLicenseInterface;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { XmlRpcAbeLicenseRetrievalClient } from './XmlRpcAbeLicenseRetrievalClient.js';
//not GWT import - same folder const XmlRpcAbeLicenseRetrievalClient = globalThis.org.allbinary.logic.system.security.licensing.client.XmlRpcAbeLicenseRetrievalClient;
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
            var xmlRpcAbeLicenseClient = new XmlRpcAbeLicenseRetrievalClient(abeClientInformation);
            ;
            var abeLicenseInterface = xmlRpcAbeLicenseClient.get(null);
            ;
            var licenseId = abeLicenseInterface.getLicenseId();
            ;
            var servers = abeLicenseInterface.getServers();
            ;
            var isNewLicenseId = false;
            ;
            var isBetterServerList = false;
            ;
            var stringValidationUtil = StringValidationUtil.getInstance();
            ;
            if (stringValidationUtil.isEmpty(abeClientInformation.getLicenseId()) && !abeClientInformation.isSameId(licenseId)) {
                isNewLicenseId = true;
            }
            if (servers.size() >= this.MINSERVERS && abeClientInformation.isLargerOrDifferentServerList(servers)) {
                isBetterServerList = true;
            }
            if (isBetterServerList || isNewLicenseId) {
                var initInfo = LicenseInitInfoUtil.getInstance().read();
                ;
                initInfo.setLicenseId(licenseId);
                initInfo.setServerList(servers);
                LicenseInitInfoUtil.getInstance().write(initInfo);
                abeClientInformation.init();
            }
            this.logUtil.putF(this.commonStrings.END, this, this.commonStrings.GET);
            //if statement needs to be on the same line and ternary does not work the same way.
            return abeLicenseInterface;
            //: 
        }
        catch (e) {
            throw e;
        }
    }
}
