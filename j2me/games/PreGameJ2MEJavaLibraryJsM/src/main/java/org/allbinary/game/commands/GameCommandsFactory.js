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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { Command } 
const Command = globalThis.javax.microedition.lcdui.Command;
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const CanvasStrings = globalThis.org.allbinary.graphics.displayable.CanvasStrings;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameCommandsFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameCommandsFactory.instance;
    }
    constructor() {
        super();
        this.TOGGLE_FULLSCREEN = new Command("Toggle FullScreen", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.TOGGLE_KEYBOARD = new Command("Keyboard", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.SET_MENU_DISPLAYABLE = new Command("Set Menu Displayable", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.APPLICATION_UPDATE = new Command(CommonStrings.getInstance().UPDATE, StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.DISPLAY_ABOUT = new Command(CanvasStrings.getInstance().ABOUT, StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 2);
        this.OPEN_WEB_URL = new Command("Open Web URL", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 2);
        this.CLOSE_OPTIONS = new Command("Back", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.DISPLAY_OPTIONS = new Command(CanvasStrings.getInstance().OPTIONS, StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 2);
        this.START_TRACE = new Command("Start Trace", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.STOP_TRACE = new Command("Stop Trace", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.DEFAULT_OPTIONS = new Command("Default", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.SHOW_GAME_CANVAS = new Command("Back to Game", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.CLOSE_AND_SHOW_GAME_CANVAS = new Command("Back", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.QUIT_COMMAND = new Command("Quit", StringUtil.getInstance().EMPTY_STRING, Command.STOP, 1);
        this.RESTART_COMMAND = new Command("Restart", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 0);
        this.DISPLAY_SAVE_FORM = new Command("Save To", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 3);
        this.SAVE = new Command("Save", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 3);
        this.DISPLAY_LOAD_FORM = new Command("Load", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 3);
        this.LOAD_FILE = new Command("Load File", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 3);
        this.DELETE_FILE = new Command("Delete File", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.EXIT_COMMAND = new Command("Exit", StringUtil.getInstance().EMPTY_STRING, Command.EXIT, 2);
        this.EXIT_WITHOUT_PROGRESS_COMMAND = new Command("Exit Without Progress", StringUtil.getInstance().EMPTY_STRING, Command.EXIT, 2);
        this.START_COMMAND = new Command(CommonStrings.getInstance().START, StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.CONTINUE_COMMAND = new Command("Continue", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.SELECT_COMMAND = new Command("Select", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.FEATURE_UPDATE = new Command("Feature Update", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
        this.BUY_COMMAND = new Command("BUY", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
    }
}
GameCommandsFactory.instance = new GameCommandsFactory();
