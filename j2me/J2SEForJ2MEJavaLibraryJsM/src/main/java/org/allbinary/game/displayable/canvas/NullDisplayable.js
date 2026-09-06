/* Generated Code Do Not Modify */
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const BaseGameStatistics = globalThis.org.allbinary.canvas.BaseGameStatistics;
import { GameStatisticsFactory } from '../../../../../org/allbinary/canvas/GameStatisticsFactory.js';
//not GWT import const GameStatisticsFactory = globalThis.org.allbinary.canvas.GameStatisticsFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
//J2SEForJ2ME
export class NullDisplayable extends Canvas {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullDisplayable.SINGLETON;
    }
    constructor() {
        super();
        this.baseGameStatistics = GameStatisticsFactory.getInstance();
    }
    paint(graphics) {
        this.baseGameStatistics.nextRefresh();
    }
}
NullDisplayable.SINGLETON = new NullDisplayable();
