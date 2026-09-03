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
import { Object } from '../../../../../java/lang/Object.js';
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//not plain js import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
const Command = globalThis.javax.microedition.lcdui.Command;
//not plain js import { ImageItem } from '../../../../../javax/microedition/lcdui/ImageItem.js';
const ImageItem = globalThis.javax.microedition.lcdui.ImageItem;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton = globalThis.org.allbinary.graphics.displayable.DisplayInfoSingleton;
import { ScreenInfo } from '../../../../../org/allbinary/graphics/form/ScreenInfo.js';
//not GWT import const ScreenInfo = globalThis.org.allbinary.graphics.form.ScreenInfo;
//not plain js import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const Visitor = globalThis.org.allbinary.logic.util.visitor.Visitor;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CommandTextItem } from './CommandTextItem.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;
export class CommandTextItemArrayFactory extends Object {
    constructor(visitorInterface) {
        super();
        this.list = new BasicArrayListD();
        this.visitorInterface = visitorInterface;
    }
    getInstance(vector, backgroundBasicColor, foregroundBasicColor) {
        var size = vector.length;
        ;
        this.list.clear();
        var textItem;
        ;
        var priorityLimit = 7;
        ;
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        var isLargeEnoughDisplayForBigMenu = (displayInfo.isPortrait() && displayInfo.getLastHeight() >= ScreenInfo.getInstance().MEDIUM_WIDTH) || (!displayInfo.isPortrait() && displayInfo.getLastWidth() >= ScreenInfo.getInstance().MEDIUM_WIDTH);
        ;
        if (!isLargeEnoughDisplayForBigMenu && size > 3) {
            priorityLimit = 3;
        }
        var command;
        ;
        for (var index = 0; index < size; index++) {
            command = vector.elementAt(index);
            if (command.getPriority() < priorityLimit) {
                var aBoolean = this.visitorInterface.visit(command);
                ;
                if (aBoolean.valueOf()) {
                    textItem = new CommandTextItem(command, ImageItem.LAYOUT_DEFAULT, StringUtil.getInstance().EMPTY_STRING, backgroundBasicColor, foregroundBasicColor);
                    this.list.add(textItem);
                }
            }
        }
        var textItemArray = new Array(this.list.size());
        ;
        var size2 = textItemArray.length;
        ;
        for (var index = 0; index < size2; index++) {
            textItemArray[index] = this.list.objectArray[index];
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return textItemArray;
    }
}
