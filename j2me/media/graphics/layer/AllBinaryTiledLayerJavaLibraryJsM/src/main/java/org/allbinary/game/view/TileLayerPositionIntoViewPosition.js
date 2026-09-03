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
//not GWT import const Layer = globalThis.org.allbinary.layer.Layer;
import { NullLayer } from '../../../../org/allbinary/layer/NullLayer.js';
//not GWT import const NullLayer = globalThis.org.allbinary.layer.NullLayer;
import { ViewPosition } from '../../../../org/allbinary/view/ViewPosition.js';
//not GWT import const ViewPosition = globalThis.org.allbinary.view.ViewPosition;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class TileLayerPositionIntoViewPosition extends ViewPosition {
    constructor() {
        super(0, 0, 0);
        this.tiledLayer = NullLayer.getInstance();
        //For kotlin this is before the body of the constructor.
    }
    getX() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.getX() - this.tiledLayer.getXP();
    }
    getY() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.getY() - this.tiledLayer.getYP();
    }
    getZ() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return super.getZ() - this.tiledLayer.getZP();
    }
    setTiledLayer(tiledLayer) {
        this.tiledLayer = tiledLayer;
    }
}
