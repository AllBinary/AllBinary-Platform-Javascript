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
import { Exception } from '../../../../java/lang/Exception.js';
//not GWT import const InputStream
import { MediaException } from '../../../../javax/microedition/media/MediaException.js';
//not GWT import const Player
import { TsUtil } from '../../../../org/allbinary/TsUtil.js';
//not GWT import const TsUtil
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features
import { GameFeatureFactory } from '../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
//not GWT import const GameFeatureFactory
import { ProgressCanvasFactory } from '../../../../org/allbinary/graphics/canvas/transition/progress/ProgressCanvasFactory.js';
//not GWT import const ProgressCanvasFactory
//not plain js import { ABSystemWrapper } 
const ABSystemWrapper = globalThis.org.allbinary.logic.ABSystemWrapper;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Sounds } from './Sounds.js';
//not GWT import - same folder const Sound
import { AndroidMediaPlayerWrapper } from './AndroidMediaPlayerWrapper.js';
//not GWT import - same folder const PlayerComposite
import { MediaPlayerUtil } from './MediaPlayerUtil.js';
//not GWT import - same folder const MediaPlayerUtil
import { NoPlayer } from './NoPlayer.js';
//not GWT import - same folder const NoPlayer
//AndroidMediaMIDPLibrary
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
        AllBinaryMediaManager.shutdown(soundsFactoryInterface);
        ProgressCanvasFactory.getInstance().addNormalPortion(50, "Media Manager");
        TsUtil.getInstance().gc();
        new Sounds(soundsFactoryInterface).init();
        logUtil.putF(commonString.END, AllBinaryMediaManager.THIS, commonString.INIT);
    }
    //@Throws(Exception.constructor)
    static shutdown(soundsFactoryInterface) {
        var logUtil = LogUtil.getInstance();
        ;
        var commonString = CommonStrings.getInstance();
        ;
        logUtil.putF(commonString.START, AllBinaryMediaManager.THIS, "shutdown");
        if (soundsFactoryInterface.isInitialized()) {
            new Sounds(soundsFactoryInterface).stopAll();
            var soundInterfaceArray = soundsFactoryInterface.getSoundInterfaceArray();
            ;
            var player;
            ;
            var player2;
            ;
            var androidMediaPlayerWrapper;
            ;
            for (var i = 0; i < soundInterfaceArray.length; i++) {
                if (soundInterfaceArray[i] !=
                    null) {
                    player = soundInterfaceArray[i].getPlayerP();
                    if (player !=
                        null) {
                        player2 = player.getPlayerP();
                        if (player2 instanceof AndroidMediaPlayerWrapper) {
                            androidMediaPlayerWrapper = player2;
                            MediaPlayerUtil.getInstance().waitForMediaPlayer(androidMediaPlayerWrapper.getMediaPlayer());
                        }
                        else {
                            throw new Exception("Unknown Property Player: " + player.constructor.name.toString());
                        }
                    }
                }
            }
            new Sounds(soundsFactoryInterface).closeAll();
            TsUtil.getInstance().gc();
            soundsFactoryInterface.setInitialized(false);
            AllBinaryMediaManager.mostUsedTotal = 0;
        }
        logUtil.putF(commonString.START, AllBinaryMediaManager.THIS, "shutdown");
    }
    //@Throws(Exception.constructor)
    static createPlayer(resource) {
        AllBinaryMediaManager.mostUsedTotal++;
        var logUtil = LogUtil.getInstance();
        ;
        if (Features.getInstance().isFeature(GameFeatureFactory.getInstance().SOUND)) {
            try {
                //if statement needs to be on the same line and ternary does not work the same way.
                return new AndroidMediaPlayerWrapper(resource);
                //: 
            }
            catch (e) {
                logUtil.put("Could not create AndroidMediaPlayerWrapper using NoPlayer at " + CommonLabels.getInstance().TOTAL_LABEL + AllBinaryMediaManager.mostUsedTotal, AllBinaryMediaManager.THIS, "createPlayer", e);
                //if statement needs to be on the same line and ternary does not work the same way.
                return NoPlayer.NO_PLAYER;
            }
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return NoPlayer.NO_PLAYER;
        }
    }
    //@Throws(IOException.constructor, MediaException.constructor)
    static createPlayerFromInputStream(stream, type) {
        throw new MediaException("No Input Stream Player");
    }
    //@Throws(MediaException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    static playTone(frequency, time, volume) {
        throw new MediaException("No Tone Player");
    }
    static isInitialized() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    constructor() {
        super();
    }
}
AllBinaryMediaManager.THIS = "AllBinaryMediaManagerAndroid";
AllBinaryMediaManager.mostUsedTotal = 0;
