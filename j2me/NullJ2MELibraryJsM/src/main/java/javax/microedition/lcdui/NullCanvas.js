/* Generated Code Do Not Modify */
var _a, _b;
var _c;
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
//not plain js import { Stack } 
const Stack = ((_c = (_b = (_a = globalThis.java) === null || _a === void 0 ? void 0 : _a.util) === null || _b === void 0 ? void 0 : _b.Stack) !== null && _c !== void 0 ? _c : class {
});
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Canvas } from './Canvas.js';
//sameFolderImports - not GWT import - same folder const Graphics
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
