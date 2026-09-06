/* Generated Code Do Not Modify */
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//Current folder imports from return types, extended types, and scope (deduplicated)
//Temp should not be in any build
export class NullDisplayable extends Canvas {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullDisplayable.SINGLETON;
    }
    constructor() {
        super();
    }
    paint(graphics) {
    }
}
NullDisplayable.SINGLETON = new NullDisplayable();
