/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const ViewPositionFactoryInterface = globalThis.org.allbinary.view.ViewPositionFactoryInterface;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { StaticTileLayerIntoPositionViewPosition } from './StaticTileLayerIntoPositionViewPosition.js';
//not GWT import - same folder const StaticTileLayerIntoPositionViewPosition = globalThis.org.allbinary.game.view.StaticTileLayerIntoPositionViewPosition;
export class StaticTileLayerViewPositionFactory extends Object {
    //@Throws(Exception.constructor)
    getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new StaticTileLayerIntoPositionViewPosition();
    }
}
