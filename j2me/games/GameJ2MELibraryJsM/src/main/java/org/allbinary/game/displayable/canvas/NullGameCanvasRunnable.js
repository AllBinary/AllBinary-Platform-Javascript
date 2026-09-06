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
//not plain js import { CommandListener } 
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { Item } 
const Item = globalThis.javax.microedition.lcdui.Item;
//not GWT import const GameState = globalThis.org.allbinary.game.state.GameState;
import { GameStateFactory } from '../../../../../org/allbinary/game/state/GameStateFactory.js';
//not GWT import const GameStateFactory = globalThis.org.allbinary.game.state.GameStateFactory;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not GWT import - same folder const GameCanvasRunnableInterface = globalThis.org.allbinary.game.displayable.canvas.GameCanvasRunnableInterface;
export class NullGameCanvasRunnable extends Object {
    constructor() {
        super(...arguments);
        this.gameStateFactory = GameStateFactory.getInstance();
    }
    getTitle() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StringUtil.getInstance().EMPTY_STRING;
    }
    isInitialized() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isPaused() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    unPause() {
    }
    pause() {
    }
    isHighScoreSubmitted() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    //@Throws(Exception.constructor)
    setHighScoreSubmitted(highScoreSubmitted) {
    }
    //@Throws(Exception.constructor)
    processGameOver() {
    }
    isGameOver() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    initCommands(cmdListener) {
    }
    //@Throws(Exception.constructor)
    getCurrentStateHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StdUtil.getInstance().NULL_TABLE;
    }
    //@Throws(Exception.constructor)
    getLoadStateHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StdUtil.getInstance().NULL_TABLE;
    }
    //@Throws(Exception.constructor)
    setLoadStateHashtable(hashtable) {
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return -1;
    }
    //@Throws(Exception.constructor)
    setGameState(gameState) {
    }
    getGameState() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameStateFactory.NO_GAME_STATE;
    }
    itemStateChanged(item) {
    }
    paint(graphics) {
    }
    paintThreed(graphics) {
    }
    isRunning() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    setRunning(isRunning) {
    }
    //@Throws(Exception.constructor)
    setThread(thread) {
    }
    run() {
    }
}
NullGameCanvasRunnable.NULL_GAME_CANVAS_RUNNABLE = new NullGameCanvasRunnable();
