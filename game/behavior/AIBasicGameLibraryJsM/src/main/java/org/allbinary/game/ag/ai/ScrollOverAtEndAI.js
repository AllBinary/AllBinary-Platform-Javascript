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
//not GWT import const GameInput
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const AllBinaryLayerManager
//Current folder imports from return types, extended types, and scope (deduplicated)
export class ScrollOverAtEndAI extends BasicAI {
    constructor(ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        let ownerLayerInterface = this.getOwnerLayerInterface();
        ;
        let x = ownerLayerInterface.getXP();
        ;
        let y = ownerLayerInterface.getYP();
        ;
        let width = ownerLayerInterface.getWidth();
        ;
        let height = ownerLayerInterface.getHeight();
        ;
        let displayInfo = DisplayInfoSingleton.getInstance();
        ;
        if (x > displayInfo.getLastWidth()) {
            ownerLayerInterface.setPosition(0, y, ownerLayerInterface.getZP());
        }
        if (y > displayInfo.getLastHeight()) {
            ownerLayerInterface.setPosition(x, 0, ownerLayerInterface.getZP());
        }
        if (x < -width) {
            ownerLayerInterface.setPosition(displayInfo.getLastWidth() - width, y, ownerLayerInterface.getZP());
        }
        if (y < -height) {
            ownerLayerInterface.setPosition(x, displayInfo.getLastHeight() - height, ownerLayerInterface.getZP());
        }
    }
}
