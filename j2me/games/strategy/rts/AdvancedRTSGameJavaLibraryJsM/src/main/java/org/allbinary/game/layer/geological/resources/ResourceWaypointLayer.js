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
//not GWT import const SelectionHudPaintable = globalThis.org.allbinary.game.layer.SelectionHudPaintable;
import { WaypointLayer } from '../../../../../../org/allbinary/game/layer/waypoint/WaypointLayer.js';
//not GWT import const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { GeologicalResourceInfoHudPaintableSingleton } from './GeologicalResourceInfoHudPaintableSingleton.js';
//not GWT import const GeologicalResourceInfoHudPaintable = globalThis.org.allbinary.game.layer.geological.resources.GeologicalResourceInfoHudPaintable;
export class ResourceWaypointLayer extends WaypointLayer {
    constructor(remoteInfo, parentLayer, groupInterface, rootName, name, animationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y) {
        super(remoteInfo, parentLayer, groupInterface, rootName, name, animationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y);
        //For kotlin this is before the body of the constructor.
    }
    createHudPaintable() {
        var rtsLayerHudPaintable = GeologicalResourceInfoHudPaintableSingleton.getInstance();
        ;
        rtsLayerHudPaintable.setBasicColorP(this.allBinaryGameLayerManagerP.getForegroundBasicColor());
        rtsLayerHudPaintable.setRtsLayer(this);
        //if statement needs to be on the same line and ternary does not work the same way.
        return rtsLayerHudPaintable;
    }
    getHudPaintable() {
        var rtsLayerHudPaintable = GeologicalResourceInfoHudPaintableSingleton.getInstance();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return rtsLayerHudPaintable;
    }
}
