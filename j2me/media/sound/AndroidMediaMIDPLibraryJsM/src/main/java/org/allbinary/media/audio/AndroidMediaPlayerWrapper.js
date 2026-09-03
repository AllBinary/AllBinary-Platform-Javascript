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
import { Exception } from '../../../../java/lang/Exception.js';
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not plain js import { MediaException } from '../../../../javax/microedition/media/MediaException.js';
const MediaException = globalThis.javax.microedition.media.MediaException;
//not plain js import { Player, PlayerI } from '../../../../javax/microedition/media/Player.js';
const Player = globalThis.javax.microedition.media.Player;
//not plain js import { PlayerListener } from '../../../../javax/microedition/media/PlayerListener.js';
const PlayerListener = globalThis.javax.microedition.media.PlayerListener;
import { MediaPlayer } from '../../../../android/media/MediaPlayer.js';
//not GWT import const MediaPlayer = globalThis.android.media.MediaPlayer;
import { NullAndroidCanvas } from '../../../../org/allbinary/android/NullAndroidCanvas.js';
//not GWT import const NullAndroidCanvas = globalThis.org.allbinary.android.NullAndroidCanvas;
//not plain js import { ResourceUtil } from '../../../../org/allbinary/data/resource/ResourceUtil.js';
const ResourceUtil = globalThis.org.allbinary.data.resource.ResourceUtil;
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicPlayer } from './BasicPlayer.js';
//not GWT import const BasicPlayer = globalThis.org.allbinary.media.audio.BasicPlayer;
export class AndroidMediaPlayerWrapper extends BasicPlayer {
    static createPlayerWrapper() {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new AndroidMediaPlayerWrapper(StringUtil.getInstance().EMPTY_STRING);
            //: 
        }
        catch (e) {
            throw new RuntimeException();
        }
    }
    constructor(resource) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.mediaPlayer = NullAndroidCanvas.NULL_MEDIA_PLAYER;
        try {
            if (resource == StringUtil.getInstance().EMPTY_STRING) {
            }
            else {
                var resourceUtil = ResourceUtil.getInstance();
                ;
                var mediaPlayer = MediaPlayer.create(resourceUtil.getContext(), resourceUtil.getResourceId(resource).intValue());
                ;
                if (mediaPlayer ==
                    null) {
                    throw new Exception(new StringMaker().append("Failed to create media player for: ").append(resource).append(" with id: ").append(resourceUtil.getResourceId(resource).toString()).toString());
                }
                this.setMediaPlayer(mediaPlayer);
                this.mediaPlayer.setLooping(false);
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION_LABEL + resource, this, this.commonStrings.CONSTRUCTOR, e);
            throw e;
        }
    }
    setLoopCount(count) {
        super.setLoopCount(count);
        if (this.mediaPlayer != NullAndroidCanvas.NULL_MEDIA_PLAYER && this.mediaPlayer !=
            null) {
            if (count == 0) {
                this.mediaPlayer.setLooping(false);
            }
            else {
            }
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    addPlayerListener(playerListener) {
        super.addPlayerListener(playerListener);
    }
    removePlayerListener(playerListener) {
        super.removePlayerListener(playerListener);
    }
    getState() {
        if (this.mediaPlayer.isPlaying()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return PlayerI.STARTED;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return PlayerI.PREFETCHED;
        }
    }
    close() {
        try {
            this.mediaPlayer.release();
            this.mediaPlayer = NullAndroidCanvas.NULL_MEDIA_PLAYER;
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.CLOSE, e);
        }
    }
    //@Throws(MediaException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    start() {
        try {
            if (this.mediaPlayer.isPlaying()) {
                this.mediaPlayer.pause();
                this.mediaPlayer.seekTo(0);
            }
            this.mediaPlayer.start();
            super.start();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.START_METHOD_NAME, e);
        }
    }
    //@Throws(MediaException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    stop() {
        try {
            this.mediaPlayer.stop();
            this.mediaPlayer.prepare();
            super.stop();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "stop", e);
        }
    }
    update(event) {
        this.logUtil.putF("LineEvent: " + event, this, this.commonStrings.UPDATE);
        var size = this.listenersList.size();
        ;
        for (var index = 0; index < size; index++) {
            var listener = this.listenersList.objectArray[index];
            ;
            listener.playerUpdate(this, event, NullUtil.getInstance().NULL_OBJECT);
        }
    }
    setVolume(leftVolume, rightVolume) {
        this.mediaPlayer.setVolume((leftVolume) / 100.0, (rightVolume) / 100.0);
    }
    getDuration() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.mediaPlayer.getDuration();
    }
    setMediaPlayer(mediaPlayer) {
        this.mediaPlayer = mediaPlayer;
    }
    getMediaPlayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.mediaPlayer;
    }
}
AndroidMediaPlayerWrapper.NULL_ANDROID_MEDIA_PLAYER_WRAPPER = AndroidMediaPlayerWrapper.createPlayerWrapper();
