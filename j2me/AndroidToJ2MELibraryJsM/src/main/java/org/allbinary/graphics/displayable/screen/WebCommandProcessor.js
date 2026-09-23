/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
//not GWT import const CommandListener
import { Intent } from '../../../../../android/content/Intent.js';
//not GWT import const Intent
import { TsUtil } from '../../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AboutCommandProcessor } from './AboutCommandProcessor.js';
//not GWT import - same folder const AboutCommandProcessor
export class WebCommandProcessor extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.aboutCommandProcessor = AboutCommandProcessor.getInstance();
        this.WEB_VIEW_ACTIVITY = "org.allbinary.android.activity.WebViewActivity";
        this.list = new BasicArrayListD();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return WebCommandProcessor.instance;
    }
    process(midletCommandListener, command, canvas) {
        try {
            var context = this.aboutCommandProcessor.getContext();
            ;
            var intent = new Intent(context, TsUtil.getInstance().getClassClassLoader(this).loadClass(this.WEB_VIEW_ACTIVITY));
            ;
            intent.putExtra(this.aboutCommandProcessor.URL, this.list.removeAt(0));
            intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            context.startActivity(intent);
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, "process", e);
        }
    }
}
WebCommandProcessor.instance = new WebCommandProcessor();
