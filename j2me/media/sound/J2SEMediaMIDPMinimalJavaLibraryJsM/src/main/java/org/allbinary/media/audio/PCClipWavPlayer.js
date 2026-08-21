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
import { Exception } from '../../../../java/lang/Exception.js';
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
import { IllegalArgumentException } from '../../../../java/lang/IllegalArgumentException.js';
import { Math } from '../../../../java/lang/Math.js';
import { ARunnable } from '../../../../org/allbinary/thread/ARunnable.js';
import { ByteArrayInputStream } from '../../../../java/io/ByteArrayInputStream.js';
import { PlayerListener } from '../../../../javax/microedition/media/PlayerListener.js';
import { AudioInputStream } from '../../../../javax/sound/sampled/AudioInputStream.js';
import { AudioSystem } from '../../../../javax/sound/sampled/AudioSystem.js';
import { FloatControl } from '../../../../javax/sound/sampled/FloatControl.js';
import { LineEvent } from '../../../../javax/sound/sampled/LineEvent.js';
import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { MusicThreadPool } from '../../../../org/allbinary/thread/MusicThreadPool.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicPlayer } from './BasicPlayer.js';
import { NullAudioFormat } from './NullAudioFormat.js';
import { NullClip } from './NullClip.js';
import { NullControl } from './NullControl.js';
export class PCClipWavPlayer extends BasicPlayer {
    constructor(inputStream) {
        super();
        this.logUtil = LogUtil.getInstance();
        var audioInputStream = new AudioInputStream(new ByteArrayInputStream(NullUtil.getInstance().NULL_BYTE_ARRAY), NullAudioFormat.NULL_AUDIO_FORMAT, 0);
        ;
        var clip = new NullClip();
        ;
        try {
            audioInputStream = AudioSystem.getAudioInputStream(inputStream);
            clip = this.create(audioInputStream);
            if (clip ==
                null) {
                this.logUtil.put("Clip was null", this, this.commonStrings.CONSTRUCTOR, new Exception());
                throw new RuntimeException();
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.CONSTRUCTOR, e);
        }
        this.audioInputStream = audioInputStream;
        this.clip = clip;
    }
    close() {
        MusicThreadPool.getInstance().runTask(new class extends ARunnable {
            run() {
                try {
                    close2();
                    //: 
                }
                catch (e) {
                    PreLogUtil.putOE(commonStrings.EXCEPTION, this, commonStrings.PROCESS, e);
                }
            }
        });
    }
    //@Throws(Exception.constructor)
    close2() {
        this.clip.drain();
        this.clip.flush();
        this.clip.close();
    }
    getContentType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    //@Throws(MediaException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    start() {
        MusicThreadPool.getInstance().runTask(new class extends ARunnable {
            run() {
                try {
                    start2();
                    //: 
                }
                catch (e) {
                    PreLogUtil.putOE(commonStrings.EXCEPTION, this, commonStrings.PROCESS, e);
                }
            }
        });
    }
    //@Throws(Exception.constructor)
    start2() {
        this.clip.setFramePosition(0);
        this.clip.loop(this.getLoopCount());
        this.clip.start();
        super.start();
    }
    //@Throws(Exception.constructor)
    create(audioInputStream) {
        var clip = AudioSystem.getClip();
        ;
        clip.addLineListener(this);
        clip.open(audioInputStream);
        //if statement needs to be on the same line and ternary does not work the same way.
        return clip;
    }
    //@Throws(MediaException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    stop() {
        MusicThreadPool.getInstance().runTask(new class extends ARunnable {
            run() {
                try {
                    stop2();
                    //: 
                }
                catch (e) {
                    PreLogUtil.putOE(commonStrings.EXCEPTION, this, commonStrings.PROCESS, e);
                }
            }
        });
    }
    //@Throws(Exception.constructor)
    stop2() {
        this.clip.stop();
        super.stop();
    }
    getControl(controlType) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new NullControl();
    }
    getControls() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return [];
    }
    setVolume(leftVolume, rightVolume) {
        this.setVolumeF((leftVolume) / 100.0);
    }
    getVolume() {
        var masterGainFloatControl = clip.getControl(FloatControl.Type.MASTER_GAIN);
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.pow(10, masterGainFloatControl.getValue() / 20);
    }
    setVolumeF(volume) {
        if (volume < 0 || volume > 1) {
            throw new IllegalArgumentException("Volume: " + volume);
        }
        var masterGainFloatControl = this.clip.getControl(FloatControl.Type.MASTER_GAIN);
        ;
        masterGainFloatControl.setValue(20 * Math.log10(volume));
    }
    getDuration() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.clip.getMicrosecondLength() / 1000;
    }
    update(event) {
        if (event.getType() === LineEvent.Type.STOP) {
            var size = this.listenersList.size();
            ;
            for (var index = 0; index < size; index++) {
                var listener = this.listenersList.get(size);
                ;
                listener.playerUpdate(this, PlayerListener.END_OF_MEDIA, null);
            }
        }
    }
}
