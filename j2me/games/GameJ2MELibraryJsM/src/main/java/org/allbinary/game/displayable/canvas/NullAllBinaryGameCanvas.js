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
import { Object } from '../../../../../java/lang/Object.js';
import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
//not plain js import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
const Command = globalThis.javax.microedition.lcdui.Command;
//not plain js import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;
//not GWT import const AllBinaryGameCanvasInterface = globalThis.org.allbinary.game.displayable.canvas.AllBinaryGameCanvasInterface;
export class NullAllBinaryGameCanvas extends Object {
    getLayerManager() {
        throw new RuntimeException();
    }
    addCommand(cmd) {
        throw new RuntimeException();
    }
    getHeight() {
        throw new RuntimeException();
    }
    getWidth() {
        throw new RuntimeException();
    }
    removeCommand(cmd) {
        throw new RuntimeException();
    }
    setCommandListener(l) {
        throw new RuntimeException();
    }
}
NullAllBinaryGameCanvas.NULL_ALLBINARY_GAME_CANVAS = new NullAllBinaryGameCanvas();
