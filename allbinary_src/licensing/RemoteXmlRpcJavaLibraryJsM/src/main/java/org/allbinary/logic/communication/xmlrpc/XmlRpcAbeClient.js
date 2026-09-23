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
import { Object } from '../../../../../java/lang/Object.js';
import { Exception } from '../../../../../java/lang/Exception.js';
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AbeClientInformationInterface
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { NullXmlRpcHandler } from '../../../../../org/apache/xmlrpc/NullXmlRpcHandler.js';
//not GWT import const XmlRpcHandler
//Current folder imports from return types, extended types, and scope (deduplicated)
export class XmlRpcAbeClient extends Object {
    constructor(clientInfo, remoteMethod) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.client = NullXmlRpcHandler.NULL_XML_RPC_HANDLER;
        this.start = 0;
        this.maxServers = 0;
        this.START_SERVER = "Start With Server #";
        this.TRYING = "Trying Server #";
        this.SEP = CommonLabels.getInstance().COLON_SEP;
        this.CLIENT_INFO = "Client Info: \n";
        this.RESULT = CommonLabels.getInstance().RESULT_ + CommonSeps.getInstance().NEW_LINE;
        this.INVALID = "License data is Invalid Trying Other Servers";
        this.EXCEPTION_IN_CLIENT = "Exception in client";
        this.SERVER_REPORTED_ERROR = "Server reported error";
        this.UNKNOWN_ERROR = "Unknown License Retrieval Failure";
        this.TRYING_OTHER_SERVERS = "IOException Trying Other Servers";
        this.HOST_NOT_RESOLVED_MSG = "Not Trying Again Since Host Unresolved";
        this.HOST_NOT_RESOLVED = "Host is unresolved";
        this.myRandomFactory = MyRandomFactory.getInstance();
        this.remoteMethod = remoteMethod;
        this.clientInfo = clientInfo;
        if (clientInfo.getNumberOfLicenseServers() > 1) {
            this.maxServers = clientInfo.getNumberOfLicenseServers() - 2;
            this.start = this.myRandomFactory.getAbsoluteNextInt(this.maxServers) + 1;
        }
        else if (clientInfo.getNumberOfLicenseServers() == 1) {
            this.maxServers = 0;
            this.start = 0;
        }
        this.isDone = false;
        this.server = this.start;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(this.START_SERVER);
        stringBuffer.appendint(this.getServer());
        stringBuffer.append(this.SEP);
        stringBuffer.append(clientInfo.getLicenseServer(this.getServer()));
        this.logUtil.putF(stringBuffer.toString(), this, this.commonStrings.CONSTRUCTOR);
    }
    //@Throws(Exception.constructor)
    get(anyType = {}) {
        ForcedLogUtil.log(this.commonStrings.NOT_IMPLEMENTED, this);
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.getInstance().NULL_OBJECT;
    }
    //@Throws(Exception.constructor)
    tryAnother(anyType = {}) {
        if (getServer() < getMaxServers()) {
            this.setServer(getServer() + 1);
        }
        else {
            this.setServer(0);
        }
        if (getServer() != getStart() && !isIsDone()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.get(anyType);
            ;
        }
        else {
            this.setIsDone(true);
        }
        throw new Exception("Tried All Servers But Still Failed");
    }
    getClientInfo() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.clientInfo;
    }
    getClient() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.client;
    }
    setClient(client) {
        this.client = client;
    }
    getServer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.server;
    }
    setServer(server) {
        this.server = server;
    }
    getStart() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.start;
    }
    setStart(start) {
        this.start = start;
    }
    getMaxServers() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxServers;
    }
    setMaxServers(maxServers) {
        this.maxServers = maxServers;
    }
    isIsDone() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.isDone;
    }
    setIsDone(isDone) {
        this.isDone = isDone;
    }
    getRemoteMethod() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.remoteMethod;
    }
}
XmlRpcAbeClient.isOnline = true;
