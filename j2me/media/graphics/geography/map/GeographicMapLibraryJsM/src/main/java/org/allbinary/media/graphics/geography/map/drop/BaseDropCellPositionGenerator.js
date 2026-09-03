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
import { Object } from '../../../../../../../java/lang/Object.js';
//not GWT import const DropCellPositionGeneratorInterface = globalThis.org.allbinary.media.graphics.geography.map.drop.DropCellPositionGeneratorInterface;
export class BaseDropCellPositionGenerator extends Object {
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.constructor.name.toString();
        ;
    }
    //@Throws(Exception.constructor)
    update(allBinaryGameLayerManager, geographicMapInterface) {
    }
    //@Throws(Exception.constructor)
    isDropAllowedAt(geographicMapCellPosition) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    //@Throws(Exception.constructor)
    processTick(allBinaryLayerManager) {
    }
}
