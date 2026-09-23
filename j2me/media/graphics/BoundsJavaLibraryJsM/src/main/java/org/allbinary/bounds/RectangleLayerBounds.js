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
//not GWT import const Rectangle
//Current folder imports from return types, extended types, and scope (deduplicated)
import { LayerBounds } from './LayerBounds.js';
//not GWT import - same folder const BoundsVisitorInterface
export class RectangleLayerBounds extends LayerBounds {
    constructor(rectangle) {
        super(rectangle);
        //For kotlin this is before the body of the constructor.
    }
    visit(boundsVisitorInterface) {
        if (boundsVisitorInterface.getX() > this.rectangle.getMaxX()) {
            boundsVisitorInterface.maxX();
        }
        if (boundsVisitorInterface.getY() > this.rectangle.getMaxY()) {
            boundsVisitorInterface.maxY();
        }
        if (boundsVisitorInterface.getX() < this.rectangle.getPoint().getX()) {
            boundsVisitorInterface.minX();
        }
        if (boundsVisitorInterface.getY() < this.rectangle.getPoint().getY()) {
            boundsVisitorInterface.minY();
        }
    }
}
