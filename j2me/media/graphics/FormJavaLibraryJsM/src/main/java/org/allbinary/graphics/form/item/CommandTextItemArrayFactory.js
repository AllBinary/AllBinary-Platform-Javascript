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
//not GWT import const Command
import { ImageItem } from '../../../../../javax/microedition/lcdui/ImageItem.js';
//not GWT import const BasicColor
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const DisplayInfoSingleton
import { ScreenInfo } from '../../../../../org/allbinary/graphics/form/ScreenInfo.js';
//not GWT import const ScreenInfo
//not plain js import { VectorUtil } 
const VectorUtil = globalThis.org.allbinary.logic.VectorUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const Visitor
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CommandTextItem } from './CommandTextItem.js';
//sameFolderImports - not GWT import - same folder const ABCustomItem
export class CommandTextItemArrayFactory extends Object {
    constructor(visitorInterface) {
        super();
        this.list = new BasicArrayListD();
        this.visitorInterface = visitorInterface;
    }
    getInstance(vector, backgroundBasicColor, foregroundBasicColor) {
        let vectorUtil = VectorUtil.getInstance();
        ;
        let size = vectorUtil.getSize(vector);
        ;
        this.list.clear();
        let textItem;
        ;
        let priorityLimit = 7;
        ;
        let displayInfo = DisplayInfoSingleton.getInstance();
        ;
        let isLargeEnoughDisplayForBigMenu = (displayInfo.isPortrait() && displayInfo.getLastHeight() >= ScreenInfo.getInstance().MEDIUM_WIDTH) || (!displayInfo.isPortrait() && displayInfo.getLastWidth() >= ScreenInfo.getInstance().MEDIUM_WIDTH);
        ;
        if (!isLargeEnoughDisplayForBigMenu && size > 3) {
            priorityLimit = 3;
        }
        let command;
        ;
        for (let index = 0; index < size; index++) {
            command = vectorUtil.elementAt(vector, index);
            if (command.getPriority() < priorityLimit) {
                let aBoolean = this.visitorInterface.visit(command);
                ;
                if (aBoolean.valueOf()) {
                    textItem = new CommandTextItem(command, ImageItem.LAYOUT_DEFAULT, StringUtil.getInstance().EMPTY_STRING, backgroundBasicColor, foregroundBasicColor);
                    this.list.add(textItem);
                }
            }
        }
        let textItemArray = new Array(this.list.size());
        ;
        let size2 = textItemArray.length;
        ;
        for (let index = 0; index < size2; index++) {
            textItemArray[index] = this.list.objectArray[index];
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return textItemArray;
    }
}
