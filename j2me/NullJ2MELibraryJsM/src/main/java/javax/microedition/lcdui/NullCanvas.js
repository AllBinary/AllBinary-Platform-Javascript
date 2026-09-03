/* Generated Code Do Not Modify */
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
//not GWT import const Stack = globalThis.java.util.Stack;
//Current folder imports from return types, extended types, and scope (deduplicated)
//not plain js import { Canvas } from './Canvas.js';
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
//not plain js import { Command } from './Command.js';
const Command = globalThis.javax.microedition.lcdui.Command;
//not plain js import { CommandListener } from './CommandListener.js';
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;
//not plain js import { Graphics } from './Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
export class NullCanvas extends Canvas {
    constructor() {
        super();
    }
    setFullScreenMode(mode) {
    }
    sizeChanged(w, h) {
    }
    getCommandStack() {
        throw new RuntimeException();
    }
    isCommand(command) {
        throw new RuntimeException();
    }
    addCommand(command) {
    }
    removeCommand(command) {
    }
    removeAllCommands() {
    }
    setCommandListener(l) {
    }
    getCustomCommandListener() {
        throw new RuntimeException();
    }
    isPaused() {
        throw new RuntimeException();
    }
    removePauseCommand() {
    }
    pause() {
    }
    unPause() {
    }
    //@Throws(Exception.constructor)
    process() {
    }
    paint(graphics) {
    }
    destroy() {
    }
    setPaused(isPaused) {
        throw new RuntimeException();
    }
    pointerDragged(x, y) {
    }
    pointerPressed(x, y) {
    }
    pointerReleased(x, y) {
    }
}
NullCanvas.NULL_CANVAS = new NullCanvas();
