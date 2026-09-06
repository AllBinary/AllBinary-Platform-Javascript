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
//not GWT import const UnitWaypointBehavior = globalThis.org.allbinary.game.layer.unit.UnitWaypointBehavior;
import { WorkSound } from '../../../../../org/allbinary/media/audio/WorkSound.js';
//not GWT import const WorkSound = globalThis.org.allbinary.media.audio.WorkSound;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Waypoint } from './Waypoint.js';
//not GWT import - same folder const WaypointInfoHudPaintable = globalThis.org.allbinary.game.layer.waypoint.WaypointInfoHudPaintable;
export class WorkWaypoint extends Waypoint {
    constructor(ownerLayer) {
        super(ownerLayer, WorkSound.getInstance());
        //For kotlin this is before the body of the constructor.
    }
    //@Throws(Exception.constructor)
    visit(unitLayer) {
        if (unitLayer.getGroupInterface()[0] != this.ownerLayer.getGroupInterface()[0]) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var size = this.getConnectedWaypointList().size();
        ;
        if (size > 0) {
            var occupyList = this.ownerLayer.getGeographicMapCellPositionArea().getOccupyingGeographicMapCellPositionList();
            ;
            var outOfResources = true;
            ;
            var geologicalGeographicMapCellPosition;
            ;
            var geologicalResource;
            ;
            for (var index = occupyList.size(); --index >= 0;) {
                geologicalGeographicMapCellPosition = occupyList.get(index);
                geologicalResource = geologicalGeographicMapCellPosition.getGeologicalResource();
                if (geologicalResource.getTotal() >= 1) {
                    outOfResources = false;
                    var maxResourceLoad = Math.round(unitLayer.getMaxResourceLoad());
                    ;
                    geologicalResource.remove(maxResourceLoad);
                    unitLayer.setLoad(maxResourceLoad);
                }
            }
            var waypointInfoHudPaintable = this.ownerLayer.getHudPaintable();
            ;
            if (this.ownerLayer == waypointInfoHudPaintable.getRtsLayer()) {
                waypointInfoHudPaintable.updateSelectionInfo();
            }
            if (!outOfResources) {
                var unitWaypointBehavior = unitLayer.getWaypointBehavior();
                ;
                var rtsLayer;
                ;
                while (this.getConnectedWaypointList().size() > 0) {
                    rtsLayer = this.getConnectedWaypointList().get(0);
                    if (rtsLayer.isDestroyed()) {
                        this.getConnectedWaypointList().remove(rtsLayer);
                    }
                    else {
                        unitWaypointBehavior.insertWaypoint(0, rtsLayer);
                        break;
                    }
                }
            }
        }
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 2;
    }
}
WorkWaypoint.ID = SmallIntegerSingletonFactory.getInstance().getAt(25);
