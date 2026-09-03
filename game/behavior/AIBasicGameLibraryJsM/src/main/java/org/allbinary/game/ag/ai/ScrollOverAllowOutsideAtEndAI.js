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
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const GameInput = globalThis.org.allbinary.game.input.GameInput;
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ScrollOverAllowOutsideAtEndAI extends BasicAI {
    constructor(ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        var ownerLayerInterface = this.getOwnerLayerInterface();
        ;
        var x = ownerLayerInterface.getXP();
        ;
        var y = ownerLayerInterface.getYP();
        ;
        var width = ownerLayerInterface.getWidth();
        ;
        var height = ownerLayerInterface.getHeight();
        ;
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        if (x > displayInfo.getLastWidth()) {
            ownerLayerInterface.setPosition(-width, y, ownerLayerInterface.getZP());
        }
        if (y > displayInfo.getLastHeight()) {
            ownerLayerInterface.setPosition(x, -height, ownerLayerInterface.getZP());
        }
        if (x < -width) {
            ownerLayerInterface.setPosition(displayInfo.getLastWidth() + width, y, ownerLayerInterface.getZP());
        }
        if (y < -height) {
            ownerLayerInterface.setPosition(x, displayInfo.getLastHeight() + height, ownerLayerInterface.getZP());
        }
    }
}
