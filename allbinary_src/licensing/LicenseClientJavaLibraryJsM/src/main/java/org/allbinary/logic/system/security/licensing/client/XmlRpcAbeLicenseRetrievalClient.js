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
import { Exception } from '../../../../../../../java/lang/Exception.js';
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { BasicArrayList } from '../../../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { XmlRpcAbeClient } from '../../../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
//not GWT import const XmlRpcAbeClient = globalThis.org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient;
//not plain js import { ExceptionUtil } from '../../../../../../../org/allbinary/logic/java/exception/ExceptionUtil.js';
const ExceptionUtil = globalThis.org.allbinary.logic.java.exception.ExceptionUtil;
//not plain js import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
import { AbeClientLicense } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientLicense.js';
//not GWT import const AbeLicenseInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeLicenseInterface;
//not plain js import { CommonLabels } from '../../../../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
import { XmlRpcClient } from '../../../../../../../org/apache/xmlrpc/XmlRpcClient.js';
//not GWT import const XmlRpcException = globalThis.org.apache.xmlrpc.XmlRpcException;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class XmlRpcAbeLicenseRetrievalClient extends XmlRpcAbeClient {
    constructor(clientInfo) {
        super(clientInfo, "LicServ.getLicense");
        this.logUtil = LogUtil.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    get(anyType = {}, cryptInterface) {
        try {
            var server = getClientInfo().getLicenseServer(this.getServer());
            ;
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(TRYING);
            stringBuffer.appendint(this.getServer());
            stringBuffer.append(SEP);
            stringBuffer.append(server);
            this.logUtil.putF(CommonLabels.getInstance().START_LABEL + stringBuffer.toString(), this, this.commonStrings.GET);
            var param = new BasicArrayListD();
            ;
            var xmlRpcClient = new XmlRpcClient(server);
            ;
            this.setClient(xmlRpcClient);
            xmlRpcClient.setBasicAuthentication(null, null);
            var hashtable = this.getClientInfo().toHashtable();
            ;
            this.logUtil.putF(CLIENT_INFO + hashtable.toString(), this, this.commonStrings.GET);
            param.add(hashtable);
            var result = xmlRpcClient.execute(this.getRemoteMethod(), param, cryptInterface);
            ;
            this.logUtil.putF(RESULT + result.toString(), this, this.commonStrings.GET);
            var resultHashtable = result;
            ;
            if (!AbeClientLicense.hasRequiredKeys(resultHashtable)) {
                this.logUtil.putF(INVALID, this, this.commonStrings.GET);
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.tryAnother(anyType);
                ;
            }
            var abeLicenseInterface = new AbeClientLicense(resultHashtable);
            ;
            this.logUtil.putF(this.commonStrings.END + stringBuffer.toString(), this, this.commonStrings.GET);
            isOnline = true;
            //if statement needs to be on the same line and ternary does not work the same way.
            return abeLicenseInterface;
            //: 
        }
        catch (e) {
            this.logUtil.put(EXCEPTION_IN_CLIENT, this, this.commonStrings.GET, e);
            this.logUtil.putF(TRYING_OTHER_SERVERS + ExceptionUtil.getInstance().getStackTrace(e), this, this.commonStrings.GET);
            if (!e.getMessage().startsWith(HOST_NOT_RESOLVED)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.tryAnother(anyType);
                ;
            }
            else {
                isOnline = false;
                throw new Exception(HOST_NOT_RESOLVED_MSG);
            }
        }
        //: 
        /* catch(e)
                    {
        this.logUtil!.put(SERVER_REPORTED_ERROR, this, this.commonStrings!.GET, e);
            
        
        
        
                                //if statement needs to be on the same line and ternary does not work the same way.
                                return this.tryAnother(anyType);;
            
        }
        */
        //: 
        /* catch(e)
                    {
        this.logUtil!.put(UNKNOWN_ERROR, this, this.commonStrings!.GET, e);
            
        
        
        
                                //if statement needs to be on the same line and ternary does not work the same way.
                                return this.tryAnother(anyType);;
            
        }
        */
    }
}
