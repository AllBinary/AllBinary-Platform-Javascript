/* Generated Code Do Not Modify */
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const BaseGameStatistics
import { GameStatisticsFactory } from '../../../../../org/allbinary/canvas/GameStatisticsFactory.js';
//not GWT import const GameStatisticsFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
//J2MEForJ2ME
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
