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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const BasicColor
import { CommandForm } from '../../../../org/allbinary/graphics/displayable/screen/CommandForm.js';
//not GWT import const Init
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { InGameOptionsForm } from './InGameOptionsForm.js';
//not GWT import - same folder const InGameOptionsForm
export class InGameOptionsFormFactory extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.SINGLETON = CommandForm.getNullCommandForm();
    }
    static getInstance() {
        if (InGameOptionsFormFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            InGameOptionsFormFactory.instance = new InGameOptionsFormFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return InGameOptionsFormFactory.instance;
    }
    init(commandListener, initInterface, title, backgrounBasicColor, foregroundBasicColor) {
        try {
            if (this.SINGLETON == CommandForm.getNullCommandForm()) {
                initInterface.init();
                this.SINGLETON = new InGameOptionsForm(commandListener, title, backgrounBasicColor, foregroundBasicColor);
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, commonStrings.INIT, e);
        }
    }
    get() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.SINGLETON;
    }
}
InGameOptionsFormFactory.instance = NullUtil.getInstance().NULL_OBJECT;
