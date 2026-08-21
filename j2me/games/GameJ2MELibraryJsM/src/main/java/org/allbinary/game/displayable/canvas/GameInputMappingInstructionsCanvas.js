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
import { Command } from '../../../../../javax/microedition/lcdui/Command.js';
import { ColorFillPaintableFactory } from '../../../../../org/allbinary/game/paint/ColorFillPaintableFactory.js';
import { Anchor } from '../../../../../org/allbinary/graphics/Anchor.js';
import { DrawStringUtil } from '../../../../../org/allbinary/graphics/draw/DrawStringUtil.js';
import { StringUtil } from '../../../../../org/allbinary/logic/string/StringUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GameCommandCanvas } from './GameCommandCanvas.js';
export class GameInputMappingInstructionsCanvas extends GameCommandCanvas {
    constructor(commandListener, allBinaryGameLayerManager) {
        super(commandListener, GameInputMappingInstructionsCanvas.NAME, allBinaryGameLayerManager.getBackgroundBasicColor(), allBinaryGameLayerManager.getForegroundBasicColor());
        this.drawStringUtil = DrawStringUtil.getInstance();
        this.TITLE = "Input Instructions";
        this.instructions = [
            "Add Input Mapping:", "1. Select the desired action by generating a currently defined input for a given action.", "(Example: Press the '1' key to select the Fire action)", "2. Make the newly desired input for the selected action.", "(Example: Press 'f' to add it to the selected action)", "Note: If the input is already mapped to another action then it will not be added. You", "will need to deleted from the other action before adding it to another.", "Warning: Not all keys map for a given platform and show as Unknown.", StringUtil.getInstance().EMPTY_STRING, "Remove Input Mapping:", "1. Select the desired action by generating a currently defined input for a given action.", "(Example: Press the key '1' to select the Fire action)", "2. Select a mapped input for the selected action.", "(Example: Press the key '1' to select the '1' key input for the selected Fire action)", "3. Press the Delete Key."
        ];
        this.anchor = Anchor.TOP_LEFT;
        //For kotlin this is before the body of the constructor.
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
        this.colorFillPaintable = ColorFillPaintableFactory.getInstance().getInstance(allBinaryGameLayerManager.getBackgroundBasicColor(), false);
    }
    initCommands(cmdListener) {
        this.removeAllCommands();
        this.addCommand(GameInputMappingInstructionsCanvas.CLOSE);
        this.setCommandListener(cmdListener);
    }
    paint(graphics) {
        this.myFontProcessor.process(graphics);
        this.colorFillPaintable.paint(graphics);
        var halfWidth = this.displayInfo.getLastHalfWidth();
        ;
        var beginWidth = (graphics.getFont().stringWidth(this.TITLE) >> 1);
        ;
        graphics.setColor(this.foregroundColor);
        graphics.drawString(this.TITLE, halfWidth - beginWidth, this.fontHeight, this.anchor);
        this.drawStringUtil.drawCenterStrings(graphics, this.instructions, this.displayInfo.getLastWidth(), this.fontHeight, halfWidth, 3 * this.fontHeight);
        super.paint(graphics);
    }
}
GameInputMappingInstructionsCanvas.DISPLAY = new Command("Help", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
GameInputMappingInstructionsCanvas.CLOSE = new Command("Close", StringUtil.getInstance().EMPTY_STRING, Command.SCREEN, 1);
GameInputMappingInstructionsCanvas.NAME = "GameInputMappingInstructionsCanvas";
