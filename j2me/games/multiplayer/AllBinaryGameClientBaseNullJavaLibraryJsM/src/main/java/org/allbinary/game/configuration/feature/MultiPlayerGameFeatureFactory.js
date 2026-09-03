/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
//not plain js import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameCommandsFactory = globalThis.org.allbinary.game.commands.GameCommandsFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MultiPlayerGameFeatureFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return MultiPlayerGameFeatureFactory.instance;
    }
    constructor() {
        super();
    }
    addCommands(anyType = {}) {
        var gameCommandsFactory = GameCommandsFactory.getInstance();
        ;
        var canvas = anyType;
        ;
        canvas.addCommand(gameCommandsFactory.QUIT_COMMAND);
    }
}
MultiPlayerGameFeatureFactory.instance = new MultiPlayerGameFeatureFactory();
