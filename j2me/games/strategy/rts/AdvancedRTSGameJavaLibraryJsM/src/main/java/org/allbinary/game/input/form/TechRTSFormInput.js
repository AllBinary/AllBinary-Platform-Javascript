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
import { RTSGameStrings } from '../../../../../org/allbinary/game/layer/RTSGameStrings.js';
//not GWT import const Capital
import { TechEventHandler } from '../../../../../org/allbinary/game/rts/technology/event/TechEventHandler.js';
//not GWT import const ABCustomItem
import { BuildingSound } from '../../../../../org/allbinary/media/audio/BuildingSound.js';
//not GWT import const BuildingSound
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
import { BooleanFactory } from '../../../../../org/allbinary/logic/java/bool/BooleanFactory.js';
//not GWT import const AllBinaryGameLayerManager
import { GameNotificationEvent } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEvent.js';
//not GWT import const GameNotificationEvent
import { GameNotificationEventHandler } from '../../../../../org/allbinary/game/layer/hud/event/GameNotificationEventHandler.js';
//not GWT import const CollidableDestroyableDamageableLayer
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const AllBinaryLayerManager
import { AllBinaryEventObject } from '../../../../../org/allbinary/logic/util/event/AllBinaryEventObject.js';
//not GWT import const AllBinaryEventObject
import { SmallIntegerSingletonFactory } from '../../../../../org/allbinary/logic/math/SmallIntegerSingletonFactory.js';
//not GWT import const SmallIntegerSingletonFactory
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
import { ErrorSound } from '../../../../../org/allbinary/media/audio/ErrorSound.js';
//not GWT import const GeographicMapCompositeInterface
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RTSFormInput } from './RTSFormInput.js';
//not GWT import - same folder const RTSFormInput
export class TechRTSFormInput extends RTSFormInput {
    constructor(groupInterface) {
        super(groupInterface);
        this.EVENT = new AllBinaryEventObject(this);
        //For kotlin this is before the body of the constructor.
        var basicColorFactory = BasicColorFactory.getInstance();
        ;
        this.noMoneyGameNotificationEvent = new GameNotificationEvent(this, RTSGameStrings.getInstance().NO_MONEY, SmallIntegerSingletonFactory.getInstance().getAt(2), basicColorFactory.WHITE, BooleanFactory.getInstance().FALSE);
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
        var geographicMapCompositeInterface = allBinaryGameLayerManager;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        this.noMoneyGameNotificationEvent.setBasicColorP(geographicMapInterface.getForegroundBasicColor());
    }
    //@Throws(Exception.constructor)
    processGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, itemIndex) {
        super.process(layerManager);
        var commonStrings = CommonStrings.getInstance();
        ;
        var stringMaker = new StringMaker();
        ;
        var technologyRTSInterfaceImageItem = item;
        ;
        var rtsInterface = technologyRTSInterfaceImageItem.getRtsInterface();
        ;
        this.logUtil.putF(stringMaker.append("isUpgradeable: ").appendboolean(rtsInterface.isUpgradeable()).toString(), this, commonStrings.PROCESS);
        if (rtsInterface.isUpgradeable()) {
            var cost = rtsInterface.getUpgradeCost();
            ;
            var capital = rtsPlayerLayerInterface.getCapital();
            ;
            stringMaker.delete(0, stringMaker.length());
            this.logUtil.putF(stringMaker.appendint(cost).append("<=").appendint(capital.getTotalMoney()).toString(), this, commonStrings.PROCESS);
            if (cost <= capital.getTotalMoney()) {
                rtsPlayerLayerInterface.add(BuildingSound.getInstance());
                capital.removeMoney(cost);
                rtsInterface.upgrade();
                technologyRTSInterfaceImageItem.update();
                TechEventHandler.getInstance().fireEvent(this.EVENT);
            }
            else {
                rtsPlayerLayerInterface.add(ErrorSound.getInstance());
                if (!rtsPlayerLayerInterface.implmentsArtificialIntelligenceCompositeInterface()) {
                    GameNotificationEventHandler.getInstance().fireEvent(this.noMoneyGameNotificationEvent);
                }
            }
        }
    }
}
