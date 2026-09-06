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
import { Math } from '../../../../../../java/lang/Math.js';
//not plain js import { Canvas } 
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
//not GWT import const DirectionCompositeInterface = globalThis.org.allbinary.direction.DirectionCompositeInterface;
import { DirectionFactory } from '../../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;
import { TrackingEventHandler } from '../../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
//not GWT import const LayerInterface = globalThis.org.allbinary.layer.LayerInterface;
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
import { EventStrings } from '../../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasePatrolAI } from './BasePatrolAI.js';
//not GWT import - same folder const BasePatrolAI = globalThis.org.allbinary.game.ag.ai.scroller.BasePatrolAI;
export class PacePatrolAI extends BasePatrolAI {
    constructor(hashtable, ownerLayerInterface, gameInput) {
        super(hashtable, ownerLayerInterface, gameInput);
        this.firingDistance = 0;
        this.isFollowLimitedByTerrain = false;
        //For kotlin this is before the body of the constructor.
        TrackingEventHandler.getInstance().addListenerInterface(this);
        this.trackingList = new BasicArrayListD();
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        this.update();
        var direction = this.setFiringDirectionForTargetIfInRange();
        ;
        var directionFactory = DirectionFactory.getInstance();
        ;
        if (direction == directionFactory.LEFT) {
            if (this.lastKeyDirection != keyDirection || !this.isFollowLimitedByTerrain) {
                super.processKeyAI(Canvas.LEFT);
            }
            keyDirection = Canvas.LEFT;
            this.lastKeyDirection = keyDirection;
            xTotalDistance = 0;
            super.processKeyAI(Canvas.KEY_NUM1);
        }
        else if (direction == directionFactory.RIGHT) {
            if (this.lastKeyDirection != keyDirection || !this.isFollowLimitedByTerrain) {
                super.processKeyAI(Canvas.RIGHT);
            }
            keyDirection = Canvas.RIGHT;
            this.lastKeyDirection = keyDirection;
            xTotalDistance = 0;
            super.processKeyAI(Canvas.KEY_NUM1);
        }
        else {
            super.processKeyAI(this.keyDirection);
        }
    }
    setFiringDirectionForTargetIfInRange() {
        var directionFactory = DirectionFactory.getInstance();
        ;
        var ownerLayerInterface = this.getOwnerLayerInterface();
        ;
        var direction = directionFactory.NOT_BORDERED_WITH;
        ;
        var lastTrackingEvent;
        ;
        var lastTrackingLayerInterface;
        ;
        var directionCompositeInterface;
        ;
        var size = this.trackingList.size();
        ;
        for (var index = 0; index < size; index++) {
            lastTrackingEvent = this.trackingList.get(0);
            lastTrackingLayerInterface = lastTrackingEvent.getLayerInterface();
            var x = lastTrackingLayerInterface.getXP();
            ;
            var y = lastTrackingLayerInterface.getYP();
            ;
            var yDistance = ownerLayerInterface.getYP() - y - ownerLayerInterface.getHeight();
            ;
            var xDistance = ownerLayerInterface.getXP() - x - ownerLayerInterface.getWidth();
            ;
            var absXDistance = Math.abs(xDistance);
            ;
            var absYDistance = Math.abs(yDistance);
            ;
            if (absYDistance <= 100) {
                if (absXDistance < getFiringDistance() / 2) {
                    directionCompositeInterface = this.getOwnerLayerInterface();
                    if (xDistance < 0 && directionCompositeInterface.getDirection() == directionFactory.RIGHT) {
                        direction = directionFactory.RIGHT;
                    }
                    else if (xDistance > 0 && directionCompositeInterface.getDirection() == directionFactory.LEFT) {
                        direction = directionFactory.LEFT;
                    }
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return direction;
    }
    disable() {
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onMovement(trackingEvent) {
        this.trackingList.clear();
        this.trackingList.add(trackingEvent);
    }
    getFiringDistance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.firingDistance;
    }
    setFiringDistance(firingDistance) {
        this.firingDistance = firingDistance;
    }
}
