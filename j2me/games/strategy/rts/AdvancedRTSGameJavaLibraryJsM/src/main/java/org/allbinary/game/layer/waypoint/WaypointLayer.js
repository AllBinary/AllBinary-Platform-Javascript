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
//not GWT import const ProceduralAnimationInterfaceFactoryInterface
import { Health } from '../../../../../org/allbinary/game/health/Health.js';
//not GWT import const Group
import { NullRTSFormInputFactory } from '../../../../../org/allbinary/game/input/form/NullRTSFormInputFactory.js';
//not GWT import const NullRTSFormInputFactory
import { AdvancedRTSGameLayer } from '../../../../../org/allbinary/game/layer/AdvancedRTSGameLayer.js';
//not GWT import const AdvancedRTSGameLayer
import { AdvancedRTSProperties } from '../../../../../org/allbinary/game/layer/AdvancedRTSProperties.js';
//not GWT import const PathFindingLayerInterface
import { TileLayerPositionIntoViewPosition } from '../../../../../org/allbinary/game/view/TileLayerPositionIntoViewPosition.js';
//not GWT import const RemoteInfo
import { AttackSound } from '../../../../../org/allbinary/media/audio/AttackSound.js';
//not GWT import const AttackSound
//Current folder imports from return types, extended types, and scope (deduplicated)
import { CollidableWaypointBehavior } from './CollidableWaypointBehavior.js';
//not GWT import - same folder const CollidableWaypointBehavior
import { Waypoint } from './Waypoint.js';
//not GWT import - same folder const Waypoint
import { WaypointCellPositionHistory } from './WaypointCellPositionHistory.js';
//not GWT import - same folder const WaypointCellPositionHistory
export class WaypointLayer extends AdvancedRTSGameLayer {
    static getStaticType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 4;
    }
    constructor(remoteInfo, parentLayer, groupInterface, rootName, name, animationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y) {
        super(remoteInfo, parentLayer, AdvancedRTSProperties.createProperties(), groupInterface, rootName, name, new Health(1000), NullRTSFormInputFactory.getInstance(), animationInterfaceFactoryInterface, animationInterfaceFactoryInterface, animationInterfaceFactoryInterface, animationInterfaceFactoryInterface, animationInterfaceFactoryInterface, proceduralAnimationInterfaceFactoryInterface, rectangle, x, y, new TileLayerPositionIntoViewPosition());
        //For kotlin this is before the body of the constructor.
        this.setCollidableInferface(new CollidableWaypointBehavior(true));
        this.getWaypointBehavior().setWaypoint(new Waypoint(this, AttackSound.getInstance()));
        this.setAnimationInterface(this.indexedButShouldBeRotationAnimationInterface);
    }
    construct(rtsPlayerLayerInterface) {
        this.percentCompleteP = 100;
        this.initVisibility(rtsPlayerLayerInterface);
    }
    paint(graphics) {
        if (this.isVisible()) {
            super.paint(graphics);
        }
    }
    processTick(allBinaryLayerManager) {
        try {
            this.indexedButShouldBeRotationAnimationInterface.nextFrame();
            //: 
        }
        catch (e) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, "processTick", e);
        }
    }
    damage(damage, damageType) {
    }
    //@Throws(Exception.constructor)
    getDamage(damageType) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    //@Throws(Exception.constructor)
    setDestroyed(destroyed) {
        super.setDestroyed(destroyed);
        if (this.isDestroyed()) {
            WaypointCellPositionHistory.getInstance().removeLayer(this);
        }
    }
    getType() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return WaypointLayer.getStaticType();
        ;
    }
    isSelfUpgradeable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
