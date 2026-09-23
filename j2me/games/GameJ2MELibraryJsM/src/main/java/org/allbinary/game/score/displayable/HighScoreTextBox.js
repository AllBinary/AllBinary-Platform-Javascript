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
//not GWT import const CommandListener
import { Font } from '../../../../../javax/microedition/lcdui/Font.js';
//not GWT import const Graphics
import { TextField } from '../../../../../javax/microedition/lcdui/TextField.js';
//not GWT import const TextField
import { PostGameCommandFactory } from '../../../../../org/allbinary/PostGameCommandFactory.js';
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { CustomTextBox } from '../../../../../org/allbinary/graphics/form/item/CustomTextBox.js';
//not GWT import const CustomTextBox
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const Paintable
import { SimpleTextPaintable } from '../../../../../org/allbinary/graphics/paint/SimpleTextPaintable.js';
//not GWT import const SimpleTextPaintable
import { VirtualKeyboardEventHandler } from '../../../../../org/allbinary/input/event/VirtualKeyboardEventHandler.js';
//not GWT import const GenericOperatingSystem
import { OperatingSystemFactory } from '../../../../../org/allbinary/logic/system/os/OperatingSystemFactory.js';
//not GWT import const AbeClientInformationInterface
import { InApplicationPurchaseFactory } from '../../../../../org/allbinary/logic/system/security/licensing/InApplicationPurchaseFactory.js';
//not GWT import const InApplicationPurchaseFactory
//Current folder imports from return types, extended types, and scope (deduplicated)
import { HighScoreUtil } from './HighScoreUtil.js';
//not GWT import - same folder const HighScoreUtil
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
