/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
//not plain js import { Font } from '../../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { MIDlet } from '../../../../javax/microedition/midlet/MIDlet.js';
const MIDlet = globalThis.javax.microedition.midlet.MIDlet;
//not GWT import const RatioProcessor = globalThis.org.allbinary.graphics.threed.RatioProcessor;
//OpenGLNone
export class SWTJOGLProcessor extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SWTJOGLProcessor.instance;
    }
    init(display = {}, comp = {}) {
    }
    isHolderCreated() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    setRenderer(renderer = {}) {
    }
    isJOGL() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    createSurface() {
    }
    onSurfaceCreated() {
    }
    onSurfaceChangedForEvent(event = {}) {
    }
    onSurfaceChanged() {
    }
    onSurfaceChangedWH(width, height) {
    }
    addListener() {
    }
    addListeners(midlet) {
    }
    run() {
    }
    clear() {
    }
    setCustom(width, height, ratio) {
    }
    setRatioProcessor(ratioProcessor) {
    }
    isPortraitRatioProcessor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    charWidth(font, ch) {
        throw new RuntimeException();
    }
    charsWidth(font, ch, offset, length) {
        throw new RuntimeException();
    }
    stringWidth(font, str) {
        throw new RuntimeException();
    }
    substringWidth(font, str, offset, len) {
        throw new RuntimeException();
    }
}
SWTJOGLProcessor.instance = new SWTJOGLProcessor();
