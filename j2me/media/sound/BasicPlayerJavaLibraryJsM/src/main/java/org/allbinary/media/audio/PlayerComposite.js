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
import { RuntimeException } from '../../../../java/lang/RuntimeException.js';
//not GWT import const PlayerListener
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const GameTickTimeDelayHelper
import { GameTickTimeDelayHelperFactory } from '../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory
import { TimeDelayHelper } from '../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import - same folder const Controllable2
//BasicPlayer
export class PlayerComposite extends Object {
    constructor(player, repeatTime) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.timeElapsedHelper = new TimeDelayHelper(0);
        this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
        this.player = player;
        this.timeElapsedHelper.delay = repeatTime;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    addPlayerListener(playerListener) {
        this.player.addPlayerListener(playerListener);
    }
    removePlayerListener(playerListener) {
        this.player.removePlayerListener(playerListener);
    }
    close() {
        this.player.close();
    }
    deallocate() {
        this.player.deallocate();
    }
    getContentType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.player.getContentType();
        ;
    }
    getDuration() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.player.getDuration();
        ;
    }
    getMediaTime() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.player.getMediaTime();
        ;
    }
    prefetch() {
        try {
            this.player.prefetch();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "prefetch", e);
        }
    }
    realize() {
        try {
            this.player.realize();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "realize", e);
        }
    }
    getState() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.player.getState();
        ;
    }
    setLoopCount(count) {
        this.player.setLoopCount(count);
    }
    setMediaTime(now) {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.player.setMediaTime(now);
            ;
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "setMediaTime", e);
            //if statement needs to be on the same line and ternary does not work the same way.
            return -1;
        }
    }
    start() {
        try {
            if (this.timeElapsedHelper.isTime(this.gameTickTimeDelayHelper.startTime)) {
                this.player.start();
            }
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.START_METHOD_NAME, e);
        }
    }
    stop() {
        try {
            this.player.stop();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "stop", e);
        }
    }
    getControl(controlType) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.player.getControl(controlType);
        ;
    }
    getControls() {
        throw new RuntimeException();
    }
    setVolume(leftVolume, rightVolume) {
        var controllable2 = this.player;
        ;
        controllable2.setVolume(leftVolume, rightVolume);
    }
    getPlayerP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.player;
    }
}
