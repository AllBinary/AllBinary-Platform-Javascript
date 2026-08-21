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
import { Hashtable } from '../../../java/util/Hashtable.js';
import { Intent } from '../../../android/content/Intent.js';
import { Uri } from '../../../android/net/Uri.js';
import { ResourceUtil } from '../../../org/allbinary/data/resource/ResourceUtil.js';
import { LogUtil } from '../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class CommandUriAction extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.hashtable = new Hashtable();
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
