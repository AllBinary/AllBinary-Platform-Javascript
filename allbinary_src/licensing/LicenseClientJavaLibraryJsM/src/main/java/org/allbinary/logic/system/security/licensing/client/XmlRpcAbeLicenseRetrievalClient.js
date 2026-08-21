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
import { Exception } from '../../../../../../../java/lang/Exception.js';
import { Vector } from '../../../../../../../java/util/Vector.js';
import { LogUtil } from '../../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { XmlRpcAbeClient } from '../../../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
import { ExceptionUtil } from '../../../../../../../org/allbinary/logic/java/exception/ExceptionUtil.js';
import { StringMaker } from '../../../../../../../org/allbinary/logic/string/StringMaker.js';
import { AbeClientLicense } from '../../../../../../../org/allbinary/logic/system/security/licensing/AbeClientLicense.js';
import { CommonLabels } from '../../../../../../../org/allbinary/string/CommonLabels.js';
import { XmlRpcClient } from '../../../../../../../org/apache/xmlrpc/XmlRpcClient.js';
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
            var param = new Vector();
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
