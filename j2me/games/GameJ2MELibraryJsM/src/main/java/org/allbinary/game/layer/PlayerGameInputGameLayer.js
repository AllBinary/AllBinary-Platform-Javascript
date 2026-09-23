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
//not GWT import const Graphics
import { PlayerGameInput } from '../../../../org/allbinary/game/input/PlayerGameInput.js';
//not GWT import const PlayerGameInputCompositeInterface
import { PointFactory } from '../../../../org/allbinary/graphics/PointFactory.js';
//not GWT import const PointFactory
import { Rectangle } from '../../../../org/allbinary/graphics/Rectangle.js';
//not GWT import const Rectangle
import { CanvasStrings } from '../../../../org/allbinary/graphics/displayable/CanvasStrings.js';
//not GWT import const AllBinaryLayerManager
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
import { StaticViewPosition } from '../../../../org/allbinary/view/StaticViewPosition.js';
//not GWT import const StaticViewPosition
//Current folder imports from return types, extended types, and scope (deduplicated)
import { AllBinaryGameLayer } from './AllBinaryGameLayer.js';
//not GWT import - same folder const AllBinaryGameLayer
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
