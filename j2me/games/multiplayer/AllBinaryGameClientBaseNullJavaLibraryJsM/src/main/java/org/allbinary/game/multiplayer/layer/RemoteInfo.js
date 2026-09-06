/*
        *
        *  To change this license header, choose License Headers in Project Properties.
        *  To change this template file, choose Tools | Templates  and open the template in the editor.
*/
/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RemoteInfo extends Object {
    constructor(username, actorSessionId, playerInputId, id) {
        super();
    }
}
RemoteInfo.NEW_PLAYER_ID = 0;
RemoteInfo.REMOTE_INFO = new RemoteInfo(StringUtil.getInstance().EMPTY_STRING, -1, -1, RemoteInfo.NEW_PLAYER_ID);
