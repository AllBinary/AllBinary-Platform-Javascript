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
import { Stack } from '../../../../java/util/Stack.js';
import { Canvas } from '../../../../javax/microedition/lcdui/Canvas.js';
import { NullCommandListener } from '../../../../javax/microedition/lcdui/NullCommandListener.js';
import { MyCommandsFactory } from '../../../../org/allbinary/graphics/displayable/command/MyCommandsFactory.js';
import { TouchJ2ME } from '../../../../org/allbinary/input/TouchJ2ME.js';
import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
import { CanvasStrings } from './CanvasStrings.js';
import { DisplayInfoSingleton } from './DisplayInfoSingleton.js';
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
        this.commandStack = new Stack();
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
