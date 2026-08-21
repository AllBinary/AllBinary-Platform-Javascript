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
import { DisplayInfoSingleton } from '../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicAI } from './BasicAI.js';
export class ScrollOverAtHalfAI extends BasicAI {
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
        var halfWidth = ownerLayerInterface.getHalfWidth();
        ;
        var halfHeight = ownerLayerInterface.getHalfHeight();
        ;
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        if (x > displayInfo.getLastWidth() - halfWidth) {
            ownerLayerInterface.setPosition(halfWidth + 1, y, ownerLayerInterface.getZP());
        }
        if (y > displayInfo.getLastHeight() - halfHeight) {
            ownerLayerInterface.setPosition(x, halfHeight + 1, ownerLayerInterface.getZP());
        }
        if (x < -halfWidth) {
            ownerLayerInterface.setPosition(displayInfo.getLastWidth() - halfWidth, y, ownerLayerInterface.getZP());
        }
        if (y < -halfHeight) {
            ownerLayerInterface.setPosition(x, displayInfo.getLastHeight() - halfHeight, ownerLayerInterface.getZP());
        }
    }
}
