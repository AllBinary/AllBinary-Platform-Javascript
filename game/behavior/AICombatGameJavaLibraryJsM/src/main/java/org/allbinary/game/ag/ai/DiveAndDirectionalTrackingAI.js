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
import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
//not GWT import const ArtificialIntelligenceInterface
import { Direction } from '../../../../../org/allbinary/direction/Direction.js';
//not GWT import const Direction
import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionalInterface
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const DestroyedEvent
import { DestroyedEventHandler } from '../../../../../org/allbinary/game/combat/destroy/event/DestroyedEventHandler.js';
//not GWT import const TrackingEvent
import { TrackingEventHandler } from '../../../../../org/allbinary/game/tracking/TrackingEventHandler.js';
//not GWT import const TrackingEventListenerInterface
import { AllBinaryLayer } from '../../../../../org/allbinary/layer/AllBinaryLayer.js';
//not GWT import const AllBinaryLayerManager
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { MathUtil } 
const MathUtil = globalThis.org.allbinary.logic.math.MathUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const AllBinaryEventObject
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const GameTickTimeDelayHelper
import { GameTickTimeDelayHelperFactory } from '../../../../../org/allbinary/time/GameTickTimeDelayHelperFactory.js';
//not GWT import const GameTickTimeDelayHelperFactory
import { TimeDelayHelper } from '../../../../../org/allbinary/time/TimeDelayHelper.js';
//not GWT import const TimeDelayHelper
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class DiveAndDirectionalTrackingAI extends BasicAI {
    constructor(ownerLayerInterface, artificialIntelligenceInterface, gameInput, visitor) {
        super(ownerLayerInterface, gameInput);
        this.mathUtil = MathUtil.getInstance();
        this.directionFactory = DirectionFactory.getInstance();
        this.gameTickTimeDelayHelper = GameTickTimeDelayHelperFactory.getInstance();
        this.timeDelayHelper = new TimeDelayHelper(500);
        this.list = new BasicArrayListD();
        this.directionToKeyMap = [Canvas.LEFT, Canvas.DOWN, Canvas.UP, Canvas.RIGHT];
        this.initialDropped = false;
        this.diveP = false;
        this.directionOfTarget = Direction.getInstance(0);
        this.MIN_DISTANCE = 40;
        this.lastTrackingLayerInterface = AllBinaryLayer.NULL_ALLBINARY_LAYER;
        this.lastDirection = DirectionFactory.getInstance().NO_DIRECTION;
        //For kotlin this is before the body of the constructor.
        this.aiVistor = visitor;
        this.artificialIntelligenceInterface = artificialIntelligenceInterface;
        var directionalCompositeInterface = this.getOwnerLayerInterface();
        ;
        this.directionalInterface = directionalCompositeInterface.getDirectionalInterface();
        var velocityInterfaceCompositeInterface = this.getOwnerLayerInterface();
        ;
        this.velocityInterface = velocityInterfaceCompositeInterface.getVelocityProperties();
        DestroyedEventHandler.getInstance().addListenerInterface(this);
        this.init();
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        if (this.isBeyondTarget()) {
            this.init();
            this.velocityInterface.zero();
        }
        if (!this.diveP) {
            this.target(allBinaryLayerManager);
        }
        else {
            this.dive();
            this.attack();
        }
        this.list.clear();
    }
    init() {
        this.diveP = false;
        this.directionOfTarget = DirectionFactory.getInstance().NOT_BORDERED_WITH;
        TrackingEventHandler.getInstance().addListenerInterface(this);
    }
    //@Throws(Exception.constructor)
    target(allBinaryLayerManager) {
        if (this.list.size() == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var lastTrackingEvent = this.list.removeAt(0);
        ;
        this.lastTrackingLayerInterface = lastTrackingEvent.getLayerInterface();
        var layerInterface = this.lastTrackingLayerInterface;
        ;
        var ownerLayerInterface = this.getOwnerLayerInterface();
        ;
        if (layerInterface.getGroupInterface() == ownerLayerInterface.getGroupInterface()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var x = this.lastTrackingLayerInterface.getXP();
        ;
        var y = this.lastTrackingLayerInterface.getYP();
        ;
        var yDistance = ownerLayerInterface.getYP() - y - ownerLayerInterface.getHeight();
        ;
        var xDistance = ownerLayerInterface.getXP() - x - ownerLayerInterface.getWidth();
        ;
        var directionFactory = DirectionFactory.getInstance();
        ;
        if (this.mathUtil.abs(yDistance) > this.mathUtil.abs(xDistance)) {
            if (yDistance > this.MIN_DISTANCE) {
                this.directionOfTarget = directionFactory.UP;
            }
            else if (yDistance < -this.MIN_DISTANCE) {
                this.directionOfTarget = directionFactory.DOWN;
            }
        }
        else {
            if (xDistance > this.MIN_DISTANCE) {
                this.directionOfTarget = directionFactory.LEFT;
            }
            else if (xDistance < -this.MIN_DISTANCE) {
                this.directionOfTarget = directionFactory.RIGHT;
            }
        }
        if (!this.initialDropped && this.directionOfTarget != directionFactory.NOT_BORDERED_WITH) {
            this.drop();
        }
        if (this.initialDropped) {
            if (this.directionOfTarget == directionFactory.UP || this.directionOfTarget == directionFactory.DOWN) {
                this.verticalTargeting(x);
            }
            else if (this.directionOfTarget == directionFactory.LEFT || this.directionOfTarget == directionFactory.RIGHT) {
                this.horizontalTargeting(y);
            }
            else {
                this.artificialIntelligenceInterface.processAI(allBinaryLayerManager);
            }
        }
    }
    //@Throws(Exception.constructor)
    verticalTargeting(x) {
        var ownerLayerInterface = this.getOwnerLayerInterface();
        ;
        if (ownerLayerInterface.getXP() < x) {
            this.moveRight();
        }
        if (ownerLayerInterface.getXP() > x) {
            this.moveLeft();
        }
        if (ownerLayerInterface.getXP() > x - 3 && ownerLayerInterface.getXP() < x + 3) {
            this.setDive();
        }
    }
    //@Throws(Exception.constructor)
    horizontalTargeting(y) {
        var ownerLayerInterface = this.getOwnerLayerInterface();
        ;
        if (ownerLayerInterface.getYP() < y) {
            this.moveDown();
        }
        if (ownerLayerInterface.getYP() > y) {
            this.moveUp();
        }
        if (ownerLayerInterface.getYP() > y - 3 && ownerLayerInterface.getYP() < y + 3) {
            this.setDive();
        }
    }
    setDive() {
        this.diveP = true;
        this.velocityInterface.zero();
        TrackingEventHandler.getInstance().removeListener(this);
    }
    //@Throws(Exception.constructor)
    moveRight() {
        this.setLastDirection(this.directionFactory.RIGHT);
        this.directionalInterface.setFrameByDirection(this.lastDirection);
        this.aiVistor.visit(this);
    }
    //@Throws(Exception.constructor)
    moveLeft() {
        this.setLastDirection(this.directionFactory.LEFT);
        this.directionalInterface.setFrameByDirection(this.lastDirection);
        this.aiVistor.visit(this);
    }
    //@Throws(Exception.constructor)
    moveDown() {
        this.setLastDirection(this.directionFactory.DOWN);
        this.directionalInterface.setFrameByDirection(this.lastDirection);
        this.aiVistor.visit(this);
    }
    //@Throws(Exception.constructor)
    moveUp() {
        this.setLastDirection(this.directionFactory.UP);
        this.directionalInterface.setFrameByDirection(this.lastDirection);
        this.aiVistor.visit(this);
    }
    //@Throws(Exception.constructor)
    dive() {
        this.directionalInterface.setFrameByDirection(this.directionOfTarget);
        this.aiVistor.visit(this);
    }
    //@Throws(Exception.constructor)
    attack() {
        super.processKeyAI(Canvas.KEY_NUM1);
    }
    //@Throws(Exception.constructor)
    drop() {
        if (this.timeDelayHelper.isTime(this.gameTickTimeDelayHelper.startTime)) {
            this.initialDropped = true;
            this.aiVistor.visit(this);
        }
    }
    isBeyondTarget() {
        if (this.directionOfTarget == this.directionFactory.DOWN) {
            if (this.getOwnerLayerInterface().getYP() > this.lastTrackingLayerInterface.getYP() + this.MIN_DISTANCE) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
            else {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        else if (this.directionOfTarget == this.directionFactory.UP) {
            if (this.getOwnerLayerInterface().getYP() < this.lastTrackingLayerInterface.getYP() + this.MIN_DISTANCE) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
            else {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        else if (this.directionOfTarget == this.directionFactory.RIGHT) {
            if (this.getOwnerLayerInterface().getXP() > this.lastTrackingLayerInterface.getXP() + this.MIN_DISTANCE) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
            else {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        else if (this.directionOfTarget == this.directionFactory.LEFT) {
            if (this.getOwnerLayerInterface().getXP() < this.lastTrackingLayerInterface.getXP() + this.MIN_DISTANCE) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return true;
            }
            else {
                //if statement needs to be on the same line and ternary does not work the same way.
                return false;
            }
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    onMovement(trackingEvent) {
        this.list.add(trackingEvent);
    }
    onDestroyed(destroyedEvent) {
        if (this.getOwnerLayerInterface() == destroyedEvent.getLayerInterface()) {
            TrackingEventHandler.getInstance().removeListener(this);
            DestroyedEventHandler.getInstance().removeListener(this);
        }
    }
    setLastDirection(lastDirection) {
        this.lastDirection = lastDirection;
        var value = this.getLastDirection().getValue();
        ;
        if (value < 4) {
            super.setLastKey(this.directionToKeyMap[value]);
        }
    }
    setLastKey(lastKey) {
        super.setLastKey(lastKey);
        if (this.getLastKey() == Canvas.LEFT) {
            this.lastDirection = DirectionFactory.getInstance().LEFT;
        }
        else if (this.getLastKey() == Canvas.DOWN) {
            this.lastDirection = DirectionFactory.getInstance().DOWN;
        }
        else if (this.getLastKey() == Canvas.UP) {
            this.lastDirection = DirectionFactory.getInstance().UP;
        }
        else if (this.getLastKey() == Canvas.RIGHT) {
            this.lastDirection = DirectionFactory.getInstance().RIGHT;
        }
    }
    getLastDirection() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lastDirection;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(super.toString());
        stringBuffer.append(" LastDirection: ");
        stringBuffer.append(StringUtil.getInstance().toString(this.getLastDirection()));
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
