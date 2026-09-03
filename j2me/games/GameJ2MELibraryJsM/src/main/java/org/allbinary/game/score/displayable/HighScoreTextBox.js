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
//not plain js import { CommandListener } from '../../../../../javax/microedition/lcdui/CommandListener.js';
const CommandListener = globalThis.javax.microedition.lcdui.CommandListener;
//not plain js import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { TextField } from '../../../../../javax/microedition/lcdui/TextField.js';
const TextField = globalThis.javax.microedition.lcdui.TextField;
import { PostGameCommandFactory } from '../../../../../org/allbinary/PostGameCommandFactory.js';
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { CustomTextBox } from '../../../../../org/allbinary/graphics/form/item/CustomTextBox.js';
//not GWT import const CustomTextBox = globalThis.org.allbinary.graphics.form.item.CustomTextBox;
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const Paintable = globalThis.org.allbinary.graphics.paint.Paintable;
import { SimpleTextPaintable } from '../../../../../org/allbinary/graphics/paint/SimpleTextPaintable.js';
//not GWT import const SimpleTextPaintable = globalThis.org.allbinary.graphics.paint.SimpleTextPaintable;
import { VirtualKeyboardEventHandler } from '../../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
//not GWT import const GenericOperatingSystem = globalThis.org.allbinary.logic.system.os.GenericOperatingSystem;
import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const AbeClientInformationInterface = globalThis.org.allbinary.logic.system.security.licensing.AbeClientInformationInterface;
import { InApplicationPurchaseFactory } from '../../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js';
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HighScoreUtil } from './HighScoreUtil.js';
//not GWT import const HighScoreUtil = globalThis.org.allbinary.game.score.displayable.HighScoreUtil;
export class HighScoreTextBox extends CustomTextBox {
    constructor(highScoresFactoryInterface, highScoresHelper, abeClientInformation, gameInfo, cmdListener, name, highScore, backgrounBasicColor, foregroundBasicColor) {
        super(cmdListener, "New High Score Enter Name:", name, 12, TextField.ANY, Font.getDefaultFont(), backgrounBasicColor, foregroundBasicColor);
        this.virtualKeyboardEventHandler = VirtualKeyboardEventHandler.getInstance();
        this.pleaseWait = new SimpleTextPaintable(this.commonStrings.PLEASE_WAIT, BasicColorFactory.getInstance().WHITE);
        this.paintable = NullPaintable.getInstance();
        this.submitted = false;
        //For kotlin this is before the body of the constructor.
        this.highScoreUtil = new HighScoreUtil(highScoresFactoryInterface, highScoresHelper, abeClientInformation, gameInfo, cmdListener, name, highScore);
        var operatingSystemInterface = OperatingSystemFactory.getInstance().getOperatingSystemInstance();
        ;
        if (operatingSystemInterface.isOverScan()) {
            var username = InApplicationPurchaseFactory.getInstance().getUserName();
            ;
            if (username !=
                null) {
                this.getTextFieldItem().setString(username);
            }
            else {
                this.getTextFieldItem().setString("NoGamerInfo");
            }
        }
    }
    initCommands(cmdListener) {
        this.removeAllCommands();
        PostGameCommandFactory.getInstance().addCommands(this);
        this.addCommand(HighScoreUtil.SUBMIT_TEXTBOX_COMMAND);
        this.setCommandListener(cmdListener);
    }
    open() {
        this.virtualKeyboardEventHandler.open();
        this.paintable = NullPaintable.getInstance();
        super.open();
    }
    close() {
        this.virtualKeyboardEventHandler.close();
        this.paintable = this.pleaseWait;
        this.repaintBehavior.onChangeRepaint(this);
        super.close();
        this.removeCommand(HighScoreUtil.SUBMIT_TEXTBOX_COMMAND);
        this.update();
        if (this.submitted) {
            this.highScoreUtil.saveHighScore();
        }
        else {
        }
        this.paintable = NullPaintable.getInstance();
        this.repaintBehavior.onChangeRepaint(this);
    }
    //@Throws(Exception.constructor)
    update() {
        var name = this.getTextFieldItem().getString();
        ;
        this.highScoreUtil.update(name);
        super.update();
    }
    paint(graphics) {
        super.paint(graphics);
        this.paintable.paint(graphics);
    }
    saveHighScore() {
        this.highScoreUtil.saveHighScore();
    }
    submit() {
        this.highScoreUtil.submit(this);
    }
}
