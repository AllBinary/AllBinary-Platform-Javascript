/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { BooleanControl } from '../../../../javax/sound/sampled/BooleanControl.js';
import { Info } from '../../../../javax/sound/sampled/Line/Info.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { NullJ2SEControl } from './NullJ2SEControl.js';
import { NullAudioFormat } from './NullAudioFormat.js';
export class NullClip extends Object {
    //@Throws(LineUnavailableException.constructor)
    open(format, data, offset, bufferSize) {
    }
    //@Throws(LineUnavailableException.constructor, IOException.constructor)
    open(stream) {
    }
    getFrameLength() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getMicrosecondLength() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    setFramePosition(frames) {
    }
    setMicrosecondPosition(microseconds) {
    }
    setLoopPoints(start, end) {
    }
    loop(count) {
    }
    drain() {
    }
    flush() {
    }
    start() {
    }
    stop() {
    }
    isRunning() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isActive() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getFormat() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullAudioFormat.NULL_AUDIO_FORMAT;
    }
    getBufferSize() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    available() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getFramePosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getLongFramePosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getMicrosecondPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    getLevel() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0.0;
    }
    getLineInfo() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new Info(this.constructor, NullAudioFormat.NULL_AUDIO_FORMAT);
    }
    //@Throws(LineUnavailableException.constructor)
    open() {
    }
    close() {
    }
    isOpen() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getControls() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return [];
    }
    isControlSupported(control) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getControl(control) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullClip.NULL_CONTROL;
    }
    addLineListener(listener) {
    }
    removeLineListener(listener) {
    }
}
NullClip.NULL_CONTROL = new NullJ2SEControl(BooleanControl.Type.MUTE);
