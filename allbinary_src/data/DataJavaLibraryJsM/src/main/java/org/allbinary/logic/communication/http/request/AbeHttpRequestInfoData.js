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
import { Object } from '../../../../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AbeHttpRequestInfoData extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AbeHttpRequestInfoData.instance;
    }
    constructor() {
        super();
        this.HTTP_USER_AGENT = "HTTP_USER_AGENT";
        this.REMOTE_ADDRESS = "REMOTE_ADDRESS";
        this.REMOTE_HOST = "REMOTE_HOST";
        this.REMOTE_HOST_BY_ADDRESS = "REMOTE_HOST_BY_ADDRESS";
        this.REMOTE_PORT = "REMOTE_PORT";
        this.REQUEST_FILE_PATH = "REQUEST_FILE_PATH";
    }
}
AbeHttpRequestInfoData.instance = new AbeHttpRequestInfoData();
