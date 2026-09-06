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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const LayerBounds = globalThis.org.allbinary.bounds.LayerBounds;
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BoundBounceAI extends BasicAI {
    constructor(ownerLayerInterface, gameInput, layerBounds, boundsVisitorInterface) {
        super(ownerLayerInterface, gameInput);
        this.currentRelativeAngle = 0;
        //For kotlin this is before the body of the constructor.
        this.layerBounds = layerBounds;
        this.boundsVisitorInterface = boundsVisitorInterface;
    }
    paint(graphics) {
        var rectange = this.layerBounds.getRectangleP();
        ;
        graphics.drawRect(rectange.getPoint().getX(), rectange.getPoint().getY(), rectange.getWidth(), rectange.getHeight());
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        this.layerBounds.visit(this.boundsVisitorInterface);
    }
}
