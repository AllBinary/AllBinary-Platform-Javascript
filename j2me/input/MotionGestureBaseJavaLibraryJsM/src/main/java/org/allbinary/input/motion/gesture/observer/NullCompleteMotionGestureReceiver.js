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
import { LogUtil } from '../../../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../../../org/allbinary/string/CommonStrings.js';
export class NullCompleteMotionGestureReceiver extends Object {
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        var commonStrings = CommonStrings.getInstance();
        ;
        this.logUtil.putF("Null Gesture Reciever", this, commonStrings.CONSTRUCTOR);
    }
    //@Throws(Exception.constructor)
    onMotionGestureCompleted(list) {
    }
}
