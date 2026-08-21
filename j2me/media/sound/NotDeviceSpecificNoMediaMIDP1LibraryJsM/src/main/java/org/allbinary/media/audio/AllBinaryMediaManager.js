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
import { System } from '../../../../java/lang/System.js';
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Sounds } from './Sounds.js';
import { NoPlayer } from './NoPlayer.js';
//NotDeviceSpecificNoMediaMIDP1Library
export class AllBinaryMediaManager extends Object {
    static isMuted() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    static setMuted(aMuted) {
    }
    static update() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    //@Throws(Exception.constructor)
    static init(soundsFactoryInterface) {
        var logUtil = LogUtil.getInstance();
        ;
        var commonString = CommonStrings.getInstance();
        ;
        logUtil.putF(commonString.START, AllBinaryMediaManager.THIS, commonString.INIT);
        ProgressCanvasFactory.getInstance().addNormalPortion(50, "Media Manager");
        new Sounds(soundsFactoryInterface).init();
    }
    //@Throws(Exception.constructor)
    static shutdown(soundsFactoryInterface) {
        new Sounds(soundsFactoryInterface).stopAll();
        new Sounds(soundsFactoryInterface).closeAll();
        System.gc();
    }
    static createPlayerFromInputStream(stream, type) {
        var logUtil = LogUtil.getInstance();
        ;
        var commonString = CommonStrings.getInstance();
        ;
        logUtil.putF(commonString.START, AllBinaryMediaManager.THIS, "creatPlayer(InputStream)");
        //if statement needs to be on the same line and ternary does not work the same way.
        return NoPlayer.NO_PLAYER;
    }
    static createPlayer(locator) {
        var logUtil = LogUtil.getInstance();
        ;
        var commonString = CommonStrings.getInstance();
        ;
        logUtil.putF(commonString.START, AllBinaryMediaManager.THIS, "creatPlayer(locator)");
        //if statement needs to be on the same line and ternary does not work the same way.
        return NoPlayer.NO_PLAYER;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static playTone(frequency, time, volume) {
    }
    static getSupportedContentTypes(protocol) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().getArrayInstance();
        ;
    }
    static getSupportedProtocols(content_type) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().getArrayInstance();
        ;
    }
    constructor() {
        super();
    }
}
AllBinaryMediaManager.THIS = "AllBinaryMediaManagerNoMediaMIDP1";
