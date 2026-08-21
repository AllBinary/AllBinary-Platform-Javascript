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
import { Thread } from '../../../../java/lang/Thread.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MediaPlayerUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MediaPlayerUtil.instance;
    }
    //@Throws(Exception.constructor)
    waitForMediaPlayer(mediaPlayer) {
        var MESSAGE = "Not Stopped Waiting";
        ;
        var METHOD_NAME = "wait";
        ;
        var index = 0;
        ;
        while (mediaPlayer.isPlaying() && index < 50) {
            this.logUtil.putF(MESSAGE, this, METHOD_NAME);
            Thread.sleep(100);
            index++;
        }
    }
}
MediaPlayerUtil.instance = new MediaPlayerUtil();
