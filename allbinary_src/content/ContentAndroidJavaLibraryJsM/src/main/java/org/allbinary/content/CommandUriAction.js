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
import { Object } from '../../../java/lang/Object.js';
//not GWT import const Hashtable = globalThis.java.util.Hashtable;
//not plain js import { Command } from '../../../javax/microedition/lcdui/Command.js';
const Command = globalThis.javax.microedition.lcdui.Command;
import { Intent } from '../../../android/content/Intent.js';
//not GWT import const Intent = globalThis.android.content.Intent;
import { Uri } from '../../../android/net/Uri.js';
//not GWT import const Uri = globalThis.android.net.Uri;
//not plain js import { ResourceUtil } from '../../../org/allbinary/data/resource/ResourceUtil.js';
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
import { StdUtil } from '../../../org/allbinary/logic/StdUtil.js';
//not GWT import const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CommandUriAction extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.hashtable = StdUtil.getInstance().createHashtable();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return CommandUriAction.instance;
    }
    add(command, url) {
        this.hashtable.put(command, url);
    }
    process(command) {
        try {
            var intent = this.getIntent(command);
            ;
            ResourceUtil.getInstance().getContext().startActivity(intent);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.PROCESS, e);
        }
    }
    getIntent(command) {
        var url = this.hashtable.get(command);
        ;
        var uri = Uri.parse(url);
        ;
        var intent = new Intent(Intent.ACTION_VIEW, uri);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return intent;
    }
}
CommandUriAction.instance = new CommandUriAction();
