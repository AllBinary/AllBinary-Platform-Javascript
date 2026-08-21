/* Generated Code Do Not Modify */
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Canvas } from './Canvas.js';
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
