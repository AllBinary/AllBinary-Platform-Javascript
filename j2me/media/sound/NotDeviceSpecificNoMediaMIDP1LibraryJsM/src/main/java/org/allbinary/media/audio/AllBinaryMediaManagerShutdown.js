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
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryMediaManager } from './AllBinaryMediaManager.js';
export class AllBinaryMediaManagerShutdown extends Object {
    //@Throws(Exception.constructor)
    static shutdown(soundsFactoryInterface) {
        var logUtil = LogUtil.getInstance();
        ;
        var commonStrings = CommonStrings.getInstance();
        ;
        logUtil.putF(commonStrings.START, instance, "shutdown");
        AllBinaryMediaManager.shutdown(soundsFactoryInterface);
    }
}
AllBinaryMediaManagerShutdown.instance = new AllBinaryMediaManagerShutdown();
