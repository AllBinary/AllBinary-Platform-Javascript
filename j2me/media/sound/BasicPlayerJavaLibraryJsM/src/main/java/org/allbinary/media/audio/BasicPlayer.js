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
import { PlayerI } from '../../../../javax/microedition/media/Player.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
import { NullControl } from './NullControl.js';
//BasicPlayerJavaLibrary
export class BasicPlayer extends Object {
    constructor() {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.listenersList = new BasicArrayListD();
        this.stateP = 0;
        this.loopCountP = 0;
        this.setLoopCount(0);
        this.setState(PlayerI.UNREALIZED);
    }
    getContentType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    getControl(controlType) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new NullControl();
    }
    getControls() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return [];
    }
    close() {
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    addPlayerListener(playerListener) {
        if (!this.listenersList.contains(playerListener)) {
            this.listenersList.add(playerListener);
        }
    }
    removePlayerListener(playerListener) {
        this.listenersList.remove(playerListener);
    }
    getState() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.stateP;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    setState(state) {
        this.stateP = state;
    }
    getDuration() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getMediaTime() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    deallocate() {
    }
    //@Throws(MediaException.constructor)
    prefetch() {
    }
    //@Throws(MediaException.constructor)
    realize() {
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    setLoopCount(count) {
        this.loopCountP = count;
    }
    getLoopCount() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.loopCountP;
    }
    //@Throws(MediaException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    setMediaTime(now) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    //@Throws(MediaException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    start() {
        this.setState(PlayerI.STARTED);
    }
    //@Throws(MediaException.constructor)
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    stop() {
        this.setState(PlayerI.PREFETCHED);
    }
    setVolume(leftVolume, rightVolume) {
    }
}
BasicPlayer.CONTROL_TYPE = "ToneControl";
