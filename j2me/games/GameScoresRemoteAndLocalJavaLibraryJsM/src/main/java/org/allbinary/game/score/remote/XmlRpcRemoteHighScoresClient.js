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
import { IOException } from '../../../../../java/io/IOException.js';
//not GWT import const IOException
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const CryptInterface
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { XmlRpcAbeClient } from '../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
//not GWT import const XmlRpcAbeClient
//not plain js import { ExceptionUtil } 
const ExceptionUtil = globalThis.org.allbinary.logic.java.exception.ExceptionUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AbeClientInformationInterface
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
import { XmlRpcClient } from '../../../../../org/apache/xmlrpc/XmlRpcClient.js';
//not GWT import const XmlRpcClient
import { XmlRpcException } from '../../../../../org/apache/xmlrpc/XmlRpcException.js';
//not GWT import const XmlRpcException
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
    get(anyType, cryptInterface) {
        try {
            let param = new BasicArrayListD();
            ;
            let serverUrl = getClientInfo().getLicenseServer(this.getServer());
            ;
            let index = serverUrl.lastIndexOf('/');
            ;
            serverUrl = serverUrl.substring(0, index + 1) + this.page;
            let stringBuffer = new StringMaker();
            ;
            stringBuffer.append(TRYING);
            stringBuffer.appendint(this.getServer());
            stringBuffer.append(SEP);
            stringBuffer.append(serverUrl);
            this.logUtil.putF(stringBuffer.toString(), this, this.commonStrings.GET);
            let xmlRpcClient = new XmlRpcClient(serverUrl);
            ;
            this.setClient(xmlRpcClient);
            xmlRpcClient.setBasicAuthentication(null, null);
            let hashtable = anyType;
            ;
            this.logUtil.putF(CLIENT_INFO + hashtable.toString(), this, this.commonStrings.GET);
            param.add(hashtable);
            let result = xmlRpcClient.execute(this.getRemoteMethod(), param, cryptInterface);
            ;
            this.logUtil.putF(RESULT + result.toString(), this, this.commonStrings.GET);
            isOnline = true;
            //if statement needs to be on the same line and ternary does not work the same way.
            return result;
        }
        catch (caught) {
            if (caught instanceof IOException) {
                const e = caught;
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
            else if (caught instanceof XmlRpcException) {
                const e = caught;
                this.logUtil.put(SERVER_REPORTED_ERROR, this, this.commonStrings.GET, e);
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.tryAnother(anyType);
                ;
            }
            else {
                const e = caught;
                this.logUtil.put(UNKNOWN_ERROR, this, this.commonStrings.GET, e);
                //if statement needs to be on the same line and ternary does not work the same way.
                return this.tryAnother(anyType);
                ;
            }
        }
    }
}
