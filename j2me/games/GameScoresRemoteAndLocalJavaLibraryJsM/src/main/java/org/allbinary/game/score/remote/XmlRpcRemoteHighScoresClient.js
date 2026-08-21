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
import { Exception } from '../../../../../java/lang/Exception.js';
import { Vector } from '../../../../../java/util/Vector.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { XmlRpcAbeClient } from '../../../../../org/allbinary/logic/communication/xmlrpc/XmlRpcAbeClient.js';
import { ExceptionUtil } from '../../../../../org/allbinary/logic/java/exception/ExceptionUtil.js';
import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
import { XmlRpcClient } from '../../../../../org/apache/xmlrpc/XmlRpcClient.js';
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
            var param = new Vector();
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
            param.addElement(hashtable);
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
