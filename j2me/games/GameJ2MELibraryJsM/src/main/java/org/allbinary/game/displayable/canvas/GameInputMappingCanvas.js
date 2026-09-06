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
import { Exception } from '../../../../../java/lang/Exception.js';
import { Integer } from '../../../../../java/lang/Integer.js';
//not plain js import { Command } 
const Command = globalThis.javax.microedition.lcdui.Command;
//not plain js import { CommandListener } 
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { GameCommandsFactory } from '../../../../../org/allbinary/game/commands/GameCommandsFactory.js';
//not GWT import const GameKey = globalThis.org.allbinary.game.input.GameKey;
import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory = globalThis.org.allbinary.game.input.InputFactory;
import { PlatformInputMappingFactory } from '../../../../../org/allbinary/game/input/PlatformInputMappingFactory.js';
//not GWT import const ColorFillBasePaintable = globalThis.org.allbinary.game.paint.ColorFillBasePaintable;
import { ColorFillPaintableFactory } from '../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js';
//not GWT import const InputMappingHelpPaintable = globalThis.org.allbinary.game.paint.help.InputMappingHelpPaintable;
import { ProcessPaintable } from '../../../../../org/allbinary/graphics/paint/ProcessPaintable.js';
//not GWT import const ProcessPaintable = globalThis.org.allbinary.graphics.paint.ProcessPaintable;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameCommandCanvas } from './GameCommandCanvas.js';
//not GWT import - same folder const GameCommandCanvas = globalThis.org.allbinary.game.displayable.canvas.GameCommandCanvas;
import { GameInputMappingInstructionsCanvas } from './GameInputMappingInstructionsCanvas.js';
//not GWT import - same folder const GameInputMappingInstructionsCanvas = globalThis.org.allbinary.game.displayable.canvas.GameInputMappingInstructionsCanvas;
export class GameInputMappingCanvas extends GameCommandCanvas {
    constructor(abeClientInformation, commandListener, allBinaryGameLayerManager, helpPaintable) {
        super(commandListener, GameInputMappingCanvas.NAME, allBinaryGameLayerManager.getBackgroundBasicColor(), allBinaryGameLayerManager.getForegroundBasicColor());
        this.NONE = GameKeyFactory.getInstance().NONE;
        this.selectedGameKey = this.NONE;
        this.selectedInput = this.NONE;
        this.inputFactory = InputFactory.getInstance();
        //For kotlin this is before the body of the constructor.
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
        if (helpPaintable ==
            null) {
            throw new Exception("Help Paintable Exception");
        }
        this.abeClientInformation = abeClientInformation;
        this.helpPaintable = helpPaintable;
        this.inputMapping = PlatformInputMappingFactory.getInstance().getPersistentInputMappingInstance();
        this.paintable = new ProcessPaintable();
        this.colorFillPaintable = ColorFillPaintableFactory.getInstance().getInstance(allBinaryGameLayerManager.getBackgroundBasicColor(), false);
    }
    close() {
        super.close();
        this.paintable.process();
        this.selectedGameKey = this.NONE;
        this.selectedInput = this.NONE;
        this.update();
    }
    initCommands(cmdListener) {
        this.removeAllCommands();
        this.addCommand(GameCommandsFactory.getInstance().CLOSE_AND_SHOW_GAME_CANVAS);
        this.addCommand(GameInputMappingCanvas.DEFAULT);
        this.addCommand(GameInputMappingInstructionsCanvas.DISPLAY);
        this.setCommandListener(cmdListener);
    }
    keyPressed(keyCode) {
        this.keyPressedByDevice(keyCode, 0);
    }
    keyReleased(keyCode) {
        this.keyReleasedByDevice(keyCode, 0);
    }
    keyRepeated(keyCode) {
        this.keyRepeatedByDevice(keyCode, 0);
    }
    keyPressedByDevice(keyCode, deviceId) {
        this.addGameKey(keyCode, false);
        super.keyPressedByDevice(keyCode, 0);
    }
    addGameKey(keyCode, repeated) {
        try {
            this.logUtil.putF(new StringMaker().append("Raw Device Key Code: ").append(Integer.toHexString(keyCode)).toString(), this, this.gameInputStrings.ADD_KEY_EVENT);
            var gameKey = this.inputToGameKeyMapping.getInstanceForCanvas(this, keyCode);
            ;
            var input = this.inputFactory.getInstanceById(keyCode);
            ;
            this.processInputMapping(gameKey, input);
            //: 
        }
        catch (e) {
            this.logUtil.put("Key Event Error", this, this.gameInputStrings.ADD_KEY_EVENT, e);
        }
    }
    //@Throws(Exception.constructor)
    processInputMapping(gameKey, input) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Start Passed GameKey: ");
        stringBuffer.append(this.stringUtil.toString(gameKey));
        stringBuffer.append(" Input: ");
        stringBuffer.append(this.stringUtil.toString(input));
        this.logUtil.putF(stringBuffer.toString(), this, this.commonStrings.PROCESS);
        if (this.selectedGameKey != this.NONE) {
            this.gameActionCrud(gameKey, input);
        }
        else {
            this.setSelectedAction(gameKey);
        }
    }
    setSelectedAction(gameKey) {
        this.logUtil.putF(new StringMaker().append("Selected GameKey: ").append(this.stringUtil.toString(gameKey)).toString(), this, "setSelectedAction");
        this.selectedGameKey = gameKey;
        this.selectedInput = this.NONE;
        this.helpPaintable.update(this.selectedGameKey, this.selectedInput);
        this.repaintBehavior.onChangeRepaint(this);
    }
    //@Throws(Exception.constructor)
    gameActionCrud(gameKey, input) {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Start GameKey: ");
        stringBuffer.append(this.stringUtil.toString(this.selectedGameKey));
        stringBuffer.append(" Input: ");
        stringBuffer.append(this.stringUtil.toString(this.selectedInput));
        this.logUtil.putF(stringBuffer.toString(), this, "gameActionCrud");
        if (this.selectedInput == this.NONE) {
            var list = this.inputMapping.getInputMapping().getMappedInput(this.selectedGameKey);
            ;
            var isInputAlreadyMappedToSelectedAction = list.contains(input);
            ;
            if (isInputAlreadyMappedToSelectedAction) {
                this.logUtil.putF(new StringMaker().append("Already Mapped Input: ").append(this.stringUtil.toString(input)).toString(), this, "gameActionCrud");
                this.selectedInput = input;
                this.helpPaintable.update(this.selectedGameKey, this.selectedInput);
                this.repaintBehavior.onChangeRepaint(this);
            }
            else {
                this.addNewMapping(gameKey, input);
            }
        }
        else if (this.inputMapping.isDelete(input)) {
            this.deleteCurrentMapping();
        }
        else {
            this.setSelectedAction(gameKey);
        }
    }
    //@Throws(Exception.constructor)
    addNewMapping(gameKey, input) {
        var METHOD_NAME = "addNewMapping";
        ;
        this.logUtil.putF(this.commonStrings.START, this, METHOD_NAME);
        var isInputAlreadyMapped = this.inputMapping.getInputMapping().isMapped(input);
        ;
        if (!isInputAlreadyMapped && !this.inputMapping.isSystemInput(input)) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append("Add Key Mapping : GameKey: ");
            stringBuffer.append(this.stringUtil.toString(this.selectedGameKey));
            stringBuffer.append(" Input: ");
            stringBuffer.append(this.stringUtil.toString(this.selectedInput));
            this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
            this.inputMapping.getInputMapping().add(this.selectedGameKey, input);
            this.selectedInput = input;
            this.update();
        }
        else {
            this.logUtil.putF("Unable to add Mapping since one already exists or is MENU, HOME, or BACK key and setting selected action to what it is already mapped to", this, METHOD_NAME);
            this.setSelectedAction(gameKey);
        }
    }
    //@Throws(Exception.constructor)
    deleteCurrentMapping() {
        var METHOD_NAME = "deleteCurrentMapping";
        ;
        var list = this.inputMapping.getInputMapping().getMappedInput(this.selectedGameKey);
        ;
        if (list.size() > 1) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append("Start GameKey: ");
            stringBuffer.append("Remove Key Mapping: GameKey: ");
            stringBuffer.append(this.stringUtil.toString(this.selectedGameKey));
            stringBuffer.append(" Input: ");
            stringBuffer.append(this.stringUtil.toString(this.selectedInput));
            this.logUtil.putF(stringBuffer.toString(), this, METHOD_NAME);
            this.inputMapping.getInputMapping().remove(this.selectedGameKey, this.selectedInput);
            this.selectedInput = this.NONE;
            this.update();
        }
        else {
            this.logUtil.putF("Can't Remove Last Key Mapping", this, METHOD_NAME);
        }
    }
    //@Throws(Exception.constructor)
    setDefault() {
        this.inputMapping.setDefault(this.abeClientInformation);
        this.helpPaintable.update(this.NONE, this.NONE);
        this.repaintBehavior.onChangeRepaint(this);
    }
    //@Throws(Exception.constructor)
    update() {
        this.inputMapping.update(this.abeClientInformation);
        this.helpPaintable.update(this.selectedGameKey, this.selectedInput);
        this.repaintBehavior.onChangeRepaint(this);
    }
    paint(graphics) {
        this.colorFillPaintable.paint(graphics);
        this.helpPaintable.paint(graphics);
        this.paintable.paint(graphics);
        super.paint(graphics);
    }
}
GameInputMappingCanvas.NAME = "GameInputMappingCanvas";
GameInputMappingCanvas.DISPLAY = new Command("Controls", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 2);
GameInputMappingCanvas.DEFAULT = new Command("Default", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 2);
