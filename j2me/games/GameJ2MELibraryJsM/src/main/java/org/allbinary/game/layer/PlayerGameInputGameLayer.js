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
//not plain js import { Graphics } from '../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
import { PlayerGameInput } from '../../../../org/allbinary/game/input/PlayerGameInput.js';
//not GWT import const PlayerGameInputCompositeInterface = globalThis.org.allbinary.game.input.PlayerGameInputCompositeInterface;
//not plain js import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
import { StaticViewPosition } from '../../../../org/allbinary/view/StaticViewPosition.js';
//not GWT import const StaticViewPosition = globalThis.org.allbinary.view.StaticViewPosition;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryGameLayer } from './AllBinaryGameLayer.js';
//not GWT import const AllBinaryGameLayer = globalThis.org.allbinary.game.layer.AllBinaryGameLayer;
export class PlayerGameInputGameLayer extends AllBinaryGameLayer {
    constructor(playerInputId) {
        super(StringUtil.getInstance().EMPTY_STRING, new Rectangle(PointFactory.getInstance().ZERO_ZERO, 0, 0), new StaticViewPosition(0, 0, 0));
        //For kotlin this is before the body of the constructor.
        this.playerGameInput = new PlayerGameInput(this.getGameKeyEventList(), new BasicArrayListD(), playerInputId);
        var canvasStrings = CanvasStrings.getInstance();
        ;
        this.logUtil.putF("Danger Danger Danger: Should Not Be Called Except For Testing Input", this, canvasStrings.PAINT);
    }
    getPlayerGameInput() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.playerGameInput;
    }
    initInputProcessors() {
    }
    //@Throws(Exception.constructor)
    processInput(myManager) {
    }
    paint(graphics) {
    }
}
