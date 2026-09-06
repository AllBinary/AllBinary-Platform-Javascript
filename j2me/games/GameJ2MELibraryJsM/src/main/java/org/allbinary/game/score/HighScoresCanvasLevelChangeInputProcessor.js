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
/* Generated Code Do Not Modify */
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
//not plain js import { Font } 
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { GameKeyEventHandler } from '../../../../org/allbinary/game/input/event/GameKeyEventHandler.js';
//not GWT import const GameKeyEventHandler = globalThis.org.allbinary.game.input.event.GameKeyEventHandler;
import { GameKeyEventUtil } from '../../../../org/allbinary/game/input/event/GameKeyEventUtil.js';
//not GWT import const HighScoresCanvas = globalThis.org.allbinary.game.score.displayable.HighScoresCanvas;
import { Anchor } from '../../../../org/allbinary/graphics/Anchor.js';
//not GWT import const Anchor = globalThis.org.allbinary.graphics.Anchor;
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
import { MyFontProcessor } from '../../../../org/allbinary/graphics/font/MyFontProcessor.js';
//not GWT import const UpdateMyFontInterface = globalThis.org.allbinary.graphics.font.UpdateMyFontInterface;
import { UpdateMyFontProcessor } from '../../../../org/allbinary/graphics/font/UpdateMyFontProcessor.js';
//not GWT import const UpdateMyFontProcessor = globalThis.org.allbinary.graphics.font.UpdateMyFontProcessor;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HighScoresCanvasInputProcessor } from './HighScoresCanvasInputProcessor.js';
//not GWT import - same folder const HighScoresCanvasInputProcessor = globalThis.org.allbinary.game.score.HighScoresCanvasInputProcessor;
export class HighScoresCanvasLevelChangeInputProcessor extends HighScoresCanvasInputProcessor {
    constructor(highScoresCanvas) {
        super(highScoresCanvas);
        this.displayInfoSingleton = DisplayInfoSingleton.getInstance();
        this.INSTRUCTIONS = "(Right = Next Track, Left = Previous Track)";
        this.myFontProcessor = new UpdateMyFontProcessor(this);
        this.anchor = Anchor.TOP_LEFT;
        this.fontHeight = 0;
        //For kotlin this is before the body of the constructor.
    }
    updateMeasurement(graphics) {
        var font = graphics.getFont();
        ;
        this.fontHeight = font.getHeight();
        this.myFontProcessor = MyFontProcessor.getInstance();
    }
    open() {
        GameKeyEventHandler.getInstance().addListener(this);
    }
    close() {
        GameKeyEventHandler.getInstance().removeListener(this);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    update() {
        var list = this.getGameKeyEventList();
        ;
        var size = list.size();
        ;
        for (var index = 0; index < size; index++) {
            var anyType = list.objectArray[index];
            ;
            var key = GameKeyEventUtil.getKey(anyType);
            ;
            if (key == Canvas.RIGHT) {
                this.getHighScoresCanvas().getGameInfo().nextGameLevel();
            }
            else if (key == Canvas.LEFT) {
                this.getHighScoresCanvas().getGameInfo().previousGameLevel();
            }
            this.getHighScoresCanvas().executeUpdate();
        }
        list.clear();
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        var width = this.displayInfoSingleton.getLastWidth();
        ;
        var topScoresWidth = (graphics.getFont().stringWidth(this.INSTRUCTIONS) >> 1);
        ;
        graphics.drawString(this.INSTRUCTIONS, (width >> 1) - topScoresWidth, this.fontHeight * 2, this.anchor);
    }
}
