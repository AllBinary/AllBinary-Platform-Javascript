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
import { Desktop } from '../../../../../java/awt/Desktop.js';
import { URI } from '../../../../../java/net/URI.js';
import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AboutCommandProcessor } from './AboutCommandProcessor.js';
export class WebCommandProcessor extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.aboutCommandProcessor = AboutCommandProcessor.getInstance();
        this.list = new BasicArrayListD();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return WebCommandProcessor.instance;
    }
    process(midletCommandListener, command, canvas) {
        try {
            if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
                Desktop.getDesktop().browse(new URI(this.list.removeAt(0)));
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.PROCESS, e);
        }
    }
}
WebCommandProcessor.instance = new WebCommandProcessor();
