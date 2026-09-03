/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { PlayerGameInput } from '../../../../org/allbinary/game/input/PlayerGameInput.js';
//not GWT import const HighScoresCanvas = globalThis.org.allbinary.game.score.displayable.HighScoresCanvas;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class HighScoresCanvasInputProcessor extends PlayerGameInput {
    constructor(highScoresCanvas) {
        super(new BasicArrayListD(), new BasicArrayListD(), -1);
        //For kotlin this is before the body of the constructor.
        this.highScoresCanvas = highScoresCanvas;
    }
    open() {
    }
    close() {
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onPressGameKeyEvent(gameKeyEvent) {
        super.onPressGameKeyEvent(gameKeyEvent);
        this.update();
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onDownGameKeyEvent(gameKeyEvent) {
        super.onDownGameKeyEvent(gameKeyEvent);
        this.update();
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    onUpGameKeyEvent(gameKeyEvent) {
        super.onUpGameKeyEvent(gameKeyEvent);
        this.update();
    }
    paint(graphics) {
    }
    getHighScoresCanvas() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.highScoresCanvas;
    }
}
