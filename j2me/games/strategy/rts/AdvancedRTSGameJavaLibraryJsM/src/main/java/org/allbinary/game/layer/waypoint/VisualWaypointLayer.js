/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2002 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *    Created By: Travis Berthelot
*/
//not GWT import const RemoteInfo = globalThis.org.allbinary.game.multiplayer.layer.RemoteInfo;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { WaypointLayer } from './WaypointLayer.js';
//not GWT import - same folder const WaypointLayer = globalThis.org.allbinary.game.layer.waypoint.WaypointLayer;
import { WaypointInfoHudPaintableSingleton } from './WaypointInfoHudPaintableSingleton.js';
//not GWT import - same folder const WaypointInfoHudPaintable = globalThis.org.allbinary.game.layer.waypoint.WaypointInfoHudPaintable;
export class VisualWaypointLayer extends WaypointLayer {
    constructor(remoteInfo, parentLayer, groupInterface, rootName, name, animationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y) {
        super(remoteInfo, parentLayer, groupInterface, rootName, name, animationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y);
        //For kotlin this is before the body of the constructor.
    }
    createHudPaintable() {
        var rtsLayerHudPaintable = WaypointInfoHudPaintableSingleton.getInstance();
        ;
        rtsLayerHudPaintable.setBasicColorP(this.allBinaryGameLayerManagerP.getForegroundBasicColor());
        rtsLayerHudPaintable.setRtsLayer(this);
        //if statement needs to be on the same line and ternary does not work the same way.
        return rtsLayerHudPaintable;
    }
    getHudPaintable() {
        var rtsLayerHudPaintable = WaypointInfoHudPaintableSingleton.getInstance();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return rtsLayerHudPaintable;
    }
}
