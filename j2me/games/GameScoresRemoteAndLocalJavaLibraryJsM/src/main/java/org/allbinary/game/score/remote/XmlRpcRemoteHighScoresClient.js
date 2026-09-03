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
import { Exception } from '../../../../../java/lang/Exception.js';
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { XmlRpcAbeClient } from '../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
//not GWT import const XmlRpcAbeClient = globalThis.org.allbinary.logic.communication.xmlrpc.XmlRpcAbeClient;
//not plain js import { ExceptionUtil } from '../../../../../org/allbinary/logic/java/exception/ExceptionUtil.js';
const ExceptionUtil = globalThis.org.allbinary.logic.java.exception.ExceptionUtil;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
import { XmlRpcClient } from '../../../../../org/apache/xmlrpc/XmlRpcClient.js';
//not GWT import const XmlRpcException = globalThis.org.apache.xmlrpc.XmlRpcException;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class XmlRpcRemoteHighScoresClient extends XmlRpcAbeClient {
    constructor(clientInfo, page, remoteMethod) {
        super(clientInfo, remoteMethod);
        this.logUtil = LogUtil.getInstance();
        //For kotlin this is before the body of the constructor.
        this.page = page;
        this.setServer(0);
    }
    //@Throws(Exception.constructor)
    get(anyType = {}, cryptInterface) {
        try {
            var param = new BasicArrayListD();
            ;
            var serverUrl = getClientInfo().getLicenseServer(this.getServer());
            ;
            var index = serverUrl.lastIndexOf('/');
            ;
            serverUrl = serverUrl.substring(0, index + 1) + this.page;
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append(TRYING);
            stringBuffer.appendint(this.getServer());
            stringBuffer.append(SEP);
            stringBuffer.append(serverUrl);
            this.logUtil.putF(stringBuffer.toString(), this, this.commonStrings.GET);
            var xmlRpcClient = new XmlRpcClient(serverUrl);
            ;
            this.setClient(xmlRpcClient);
            xmlRpcClient.setBasicAuthentication(null, null);
            var hashtable = anyType;
            ;
            this.logUtil.putF(CLIENT_INFO + hashtable.toString(), this, this.commonStrings.GET);
            param.add(hashtable);
            var result = xmlRpcClient.execute(this.getRemoteMethod(), param, cryptInterface);
            ;
            this.logUtil.putF(RESULT + result.toString(), this, this.commonStrings.GET);
            isOnline = true;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result;
            //: 
        }
        catch (e) {
            this.logUtil.put(TRYING_OTHER_SERVERS + ExceptionUtil.getInstance().getStackTrace(e), this, this.commonStrings.GET, e);
            if (!e.getMessage().startsWith(HOST_NOT_RESOLVED)) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.tryAnother(anyType);
                ;
            }
            else {
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
