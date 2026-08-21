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
import { Manager } from '../../../../javax/microedition/media/Manager.js';
import { AudioContentTypeDataFactory } from '../../../../org/allbinary/audio/AudioContentTypeDataFactory.js';
import { ResourceUtil } from '../../../../org/allbinary/data/resource/ResourceUtil.js';
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
import { GameFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Sounds } from './Sounds.js';
import { NoPlayer } from './NoPlayer.js';
//NotDeviceSpecificMIDP2JavaLibrary
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
    //@Throws(Exception.constructor)
    static createPlayer(resource) {
        if (Features.getInstance().isFeature(GameFeatureFactory.getInstance().SOUND)) {
            if (resource.compareTo(Manager.TONE_DEVICE_LOCATOR) == 0) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return Manager.createPlayer(resource);
                ;
            }
            else {
                var inputStream = ResourceUtil.getInstance().getResourceAsStream(resource);
                ;
                //if statement needs to be on the same line and ternary does not work the same way.
                return Manager.createPlayer(inputStream, AudioContentTypeDataFactory.getInstance().MIME_AUDIO_WAV.getName());
                ;
            }
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return NoPlayer.NO_PLAYER;
        }
    }
    //@Throws(MediaException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static playTone(frequency, time, volume) {
        if (Features.getInstance().isFeature(GameFeatureFactory.getInstance().SOUND)) {
            Manager.playTone(frequency, time, volume);
        }
    }
    constructor() {
        super();
    }
}
AllBinaryMediaManager.THIS = "AllBinaryMediaManagerNoMIPD2";
