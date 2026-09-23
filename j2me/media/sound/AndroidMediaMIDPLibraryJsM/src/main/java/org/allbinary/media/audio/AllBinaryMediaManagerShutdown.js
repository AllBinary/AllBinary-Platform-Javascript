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
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not GWT import - same folder const SoundsFactoryInterface
export class AllBinaryMediaManagerShutdown extends Object {
    //@Throws(Exception.constructor)
    static shutdown(soundsFactoryInterface) {
        var logUtil = LogUtil.getInstance();
        ;
        logUtil.putF("No Media Shutdown for Android Process", AllBinaryMediaManagerShutdown.instance, "shutdown");
    }
}
AllBinaryMediaManagerShutdown.instance = new AllBinaryMediaManagerShutdown();
