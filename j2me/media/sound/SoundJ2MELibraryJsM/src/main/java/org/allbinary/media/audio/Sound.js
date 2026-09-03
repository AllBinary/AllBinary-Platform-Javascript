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
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
const Player = globalThis.javax.microedition.media.Player;
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const SoundInterface = globalThis.org.allbinary.media.audio.SoundInterface;
import { NoPlayer } from './NoPlayer.js';
//not GWT import const NoPlayer = globalThis.org.allbinary.media.audio.NoPlayer;
export class Sound extends Object {
    constructor(resource) {
        super();
        this.player = NoPlayer.NO_PLAYER;
        this.resource = resource;
    }
    getResource() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.resource;
    }
    getPlayerP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.player;
    }
    setPlayerP(player) {
        this.player = player;
    }
    //@Throws(Exception.constructor)
    init() {
    }
    getDuration() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    run() {
        try {
            this.player.start();
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            PreLogUtil.put(commonStrings.EXCEPTION, this, commonStrings.RUN);
        }
    }
}
