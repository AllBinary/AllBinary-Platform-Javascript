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
//not GWT import const ABCustomItem
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const AdvancedRTSPlayerLayerInterface
import { RTSGameStrings } from '../../../../../org/allbinary/game/layer/RTSGameStrings.js';
//not GWT import const UnitLayer
import { WorkWaypoint } from '../../../../../org/allbinary/game/layer/waypoint/WorkWaypoint.js';
//not GWT import const WorkWaypoint
import { BuildingSound } from '../../../../../org/allbinary/media/audio/BuildingSound.js';
//not GWT import const BuildingSound
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const GeographicMapCellPositionAreaBase
import { GameNotificationEvent } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
//not GWT import const GameNotificationEvent
import { GameNotificationEventHandler } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
//not GWT import const GameNotificationEventHandler
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const GPoint
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const AllBinaryLayerManager
import { Layer } from '../../../../../org/allbinary/layer/Layer.js';
//not GWT import const Layer
import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
import { ErrorSound } from '../../../../../org/allbinary/media/audio/ErrorSound.js';
//not GWT import const GeographicMapCompositeInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RTSFormInput } from './RTSFormInput.js';
//not GWT import - same folder const RTSFormInput
import { AssignWaypointsUtil } from './AssignWaypointsUtil.js';
//not GWT import - same folder const AssignWaypointsUtil
import { PlayersSingletonFactory } from './PlayersSingletonFactory.js';
//not GWT import - same folder const PlayersSingletonFactory
export class UnitRTSFormInput extends RTSFormInput {
    constructor(groupInterface) {
        super(groupInterface);
        //For kotlin this is before the body of the constructor.
        var smallIntegerSingletonFactory = SmallIntegerSingletonFactory.getInstance();
        ;
        var basicColorFactory = BasicColorFactory.getInstance();
        ;
        this.noMoneyGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().NO_MONEY, smallIntegerSingletonFactory.getAt(2), basicColorFactory.WHITE, BooleanFactory.getInstance().FALSE);
        this.newUnitGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().NEW_UNIT, smallIntegerSingletonFactory.getAt(2), basicColorFactory.WHITE, BooleanFactory.getInstance().FALSE);
        this.getHashtable().put(WorkWaypoint.ID, smallIntegerSingletonFactory.getAt(50));
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
        var geographicMapCompositeInterface = allBinaryGameLayerManager;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        this.noMoneyGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
        this.newUnitGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
    }
    //@Throws(Exception.constructor)
    processGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, itemIndex) {
        super.process(layerManager);
        var associatedRtsLayer2 = associatedRtsLayer;
        ;
        var geographicMapCellPositionArea = associatedRtsLayer2.geographicMapCellPositionAreaBase;
        ;
        var geographicMapCellPosition = geographicMapCellPositionArea.getNextSurroundingGeographicMapCellPosition();
        ;
        this.getHashtable().put(Layer.ID, associatedRtsLayer);
        this.getHashtable().put(UnitRTSFormInput.DECAL_ID, rtsPlayerLayerInterface.getDecalBasicColor());
        if (this.newUnconstructedRTSLayerInterfaceArray[itemIndex] == CollidableDestroyableDamageableLayer.getNullInstance()) {
            this.newUnconstructedRTSLayerInterfaceArray[itemIndex] = this.getInstance(layerManager, item, geographicMapCellPosition);
        }
        else {
            var cellPoint = geographicMapCellPosition.getPoint();
            ;
            var rtsLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex];
            ;
            rtsLayer.setPosition(cellPoint.getX(), cellPoint.getY(), rtsLayer.getZP());
            var geographicMapCompositeInterface = rtsLayer.allBinaryGameLayerManagerP;
            ;
            var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
            ;
            rtsLayer.geographicMapCellPositionAreaBase.update(geographicMapInterface);
        }
        var cellPoint = geographicMapCellPosition.getMidPoint();
        ;
        var rtsLayer = this.newUnconstructedRTSLayerInterfaceArray[itemIndex];
        ;
        rtsLayer.setPosition(cellPoint.getX() - rtsLayer.getHalfWidth(), cellPoint.getY() - rtsLayer.getHalfHeight(), rtsLayer.getZP());
        this.attemptBuild(associatedRtsLayer2, rtsPlayerLayerInterface, layerManager, rtsLayer, itemIndex);
    }
    //@Throws(Exception.constructor)
    attemptBuild(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, layerInterface, itemIndex) {
        var cost = layerInterface.getCost();
        ;
        var capital = rtsPlayerLayerInterface.getCapital();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("Trying to Build: ");
        stringBuffer.append(layerInterface.getName());
        stringBuffer.append(" for: $");
        stringBuffer.appendint(cost);
        stringBuffer.append(" with ");
        stringBuffer.appendint(capital.getTotalMoney());
        this.logUtil.putF(stringBuffer.toString(), this, "attemptBuild");
        if (cost <= capital.getTotalMoney()) {
            layerInterface.construct(rtsPlayerLayerInterface);
            this.newUnconstructedRTSLayerInterfaceArray[itemIndex] = CollidableDestroyableDamageableLayer.getNullInstance();
            rtsPlayerLayerInterface.add(BuildingSound.getInstance());
            capital.removeMoney(cost);
            AssignWaypointsUtil.getInstance().set(layerInterface, associatedRtsLayer);
            layerManager.appendAt(layerInterface, PlayersSingletonFactory.total);
            var advancedRTSPlayerLayerInterface = rtsPlayerLayerInterface;
            ;
            var advancedPlayerOwnedRTSLayers = advancedRTSPlayerLayerInterface.getAdvancedPlayerOwnedRTSLayers();
            ;
            advancedPlayerOwnedRTSLayers.addUnit(layerInterface);
            if (!rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                GameNotificationEventHandler.getInstance().fireEvent(this.newUnitGameNotificationEvent);
            }
        }
        else {
            rtsPlayerLayerInterface.add(ErrorSound.getInstance());
            if (!rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                GameNotificationEventHandler.getInstance().fireEvent(this.noMoneyGameNotificationEvent);
            }
        }
    }
}
UnitRTSFormInput.DECAL_ID = SmallIntegerSingletonFactory.getInstance().getAt(23);
