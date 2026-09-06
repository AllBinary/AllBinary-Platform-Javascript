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
//not GWT import const Stack = globalThis.java.util.Stack;
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
//not plain js import { Command } 
const Command = globalThis.javax.microedition.lcdui.Command;
//not plain js import { CommandListener } 
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { NullCommandListener } from '../../../../javax/microedition/lcdui/NullCommandListener.js';
//not GWT import const MyCommandInterface = globalThis.org.allbinary.graphics.displayable.command.MyCommandInterface;
import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
//not GWT import const MyCommandsFactory = globalThis.org.allbinary.graphics.displayable.command.MyCommandsFactory;
import { TouchJ2ME } from '../../../../org/allbinary/input/TouchJ2ME.js';
//not GWT import const TouchJ2ME = globalThis.org.allbinary.input.TouchJ2ME;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const Sound = globalThis.org.allbinary.media.audio.Sound;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not GWT import - same folder const DisplayableInterface = globalThis.org.allbinary.graphics.displayable.DisplayableInterface;
import { CanvasStrings } from './CanvasStrings.js';
//not GWT import - same folder const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;
import { DisplayInfoSingleton } from './DisplayInfoSingleton.js';
//not GWT import - same folder const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
export class MyCanvas extends Canvas {
    constructor(name, childNameList) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.commonStrings = CommonStrings.getInstance();
        this.canvasStrings = CanvasStrings.getInstance();
        this.stringUtil = StringUtil.getInstance();
        this.displayInfo = DisplayInfoSingleton.getInstance();
        this.commandListener = NullCommandListener.NULL_COMMAND_LISTENER;
        this.paused = false;
        this.touchME = new TouchJ2ME();
        this.logUtil.putF(this.commonStrings.CONSTRUCTOR, this, this.commonStrings.CONSTRUCTOR);
        this.displayInfo.update(this, this.canvasStrings.CONSTRUCTOR);
        this.name = name;
        this.childNameList = childNameList;
        this.commandStack = StdUtil.getInstance().createStack();
    }
    setFullScreenMode(mode) {
        super.setFullScreenMode(mode);
        this.displayInfo.update(this, this.canvasStrings.SET_FULL_SCREEN_MODE);
    }
    sizeChanged(w, h) {
        this.displayInfo.update(this, this.canvasStrings.SIZE_CHANGED);
    }
    getCommandStack() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commandStack;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    isCommand(command) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commandStack.contains(command);
        ;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    addCommand(command) {
        if (!this.commandStack.contains(command)) {
            this.commandStack.push(command);
            super.addCommand(command);
        }
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    removeCommand(command) {
        this.commandStack.removeElement(command);
        super.removeCommand(command);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    removeAllCommands() {
        var size = this.commandStack.length;
        ;
        for (var index = 0; index < size; index++) {
            super.removeCommand(this.commandStack.pop());
        }
    }
    setCommandListener(l) {
        super.setCommandListener(l);
        this.commandListener = l;
    }
    getCustomCommandListener() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.commandListener;
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    isPaused() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.paused;
    }
    removePauseCommand() {
        this.removeCommand(MyCommandsFactory.getInstance().PAUSE_COMMAND);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    pause() {
        this.logUtil.putF(this.commonStrings.START, this, this.canvasStrings.PAUSE);
        this.removePauseCommand();
        this.addCommand(MyCommandsFactory.getInstance().RESUME_COMMAND);
        this.setPaused(true);
    }
    //@Synchronized //TWB - This is not allowed for TypeScript native. Instead use Coroutine logic instead.
    unPause() {
        this.logUtil.putF(this.commonStrings.START, this, this.canvasStrings.UN_PAUSE);
        this.removeCommand(MyCommandsFactory.getInstance().RESUME_COMMAND);
        this.addCommand(MyCommandsFactory.getInstance().PAUSE_COMMAND);
        this.setPaused(false);
    }
    //@Throws(Exception.constructor)
    process() {
        this.displayInfo.process();
    }
    paint(graphics) {
    }
    draw(graphics) {
    }
    hasChild(displayable) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.childNameList.contains(displayable.name);
        ;
    }
    destroy() {
        this.logUtil.putF("Destroyed MyCanvas", this, "destroy");
    }
    setPaused(isPaused) {
        this.paused = isPaused;
    }
    keyPressedByDevice(keyCode, deviceId) {
    }
    keyRepeatedByDevice(keyCode, deviceId) {
    }
    keyReleasedByDevice(keyCode, deviceId) {
    }
    pointerDragged(x, y) {
        this.touchME.pointerDragged(x, y);
    }
    pointerPressed(x, y) {
        this.touchME.pointerPressed(x, y);
    }
    pointerReleased(x, y) {
        this.touchME.pointerReleased(x, y);
    }
    nextSong(nextSongSound, leftVolume, rightVolume) {
    }
}
