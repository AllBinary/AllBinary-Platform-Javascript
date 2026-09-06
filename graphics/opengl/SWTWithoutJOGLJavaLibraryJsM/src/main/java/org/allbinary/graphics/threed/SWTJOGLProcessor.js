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
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { MIDlet } 
const MIDlet = globalThis.javax.microedition.midlet.MIDlet;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GLHolder } from './GLHolder.js';
//not GWT import - same folder const RatioProcessor = globalThis.org.allbinary.graphics.threed.RatioProcessor;
//SWTWithoutJOGL
export class SWTJOGLProcessor extends Object {
    constructor() {
        super(...arguments);
        this.glHolder = new class extends GLHolder {
            run(renderer = {}) {
            }
        };
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return SWTJOGLProcessor.instance;
    }
    init(display = {}, comp = {}) {
    }
    isHolderCreated() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return glHolder.isCreated;
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
