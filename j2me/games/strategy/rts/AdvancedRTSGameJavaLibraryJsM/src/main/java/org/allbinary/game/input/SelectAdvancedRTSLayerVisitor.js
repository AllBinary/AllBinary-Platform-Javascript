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
/* Generated Code Do Not Modify */
import { AssignWaypointsUtil } from '../../../../org/allbinary/game/input/form/AssignWaypointsUtil.js';
//not GWT import const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;
import { BuildingLayer } from '../../../../org/allbinary/game/layer/building/BuildingLayer.js';
//not GWT import const BuildingLayer = globalThis.org.allbinary.game.layer.building.BuildingLayer;
import { CollidableDestroyableDamageableLayer } from '../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;
import { UnitLayer } from '../../../../org/allbinary/game/layer/unit/UnitLayer.js';
//not GWT import const UnitLayer = globalThis.org.allbinary.game.layer.unit.UnitLayer;
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
import { Visitor } from '../../../../org/allbinary/logic/util/visitor/Visitor.js';
//not GWT import - same folder const SelectedRTSLayersPlayerGameInput = globalThis.org.allbinary.game.input.SelectedRTSLayersPlayerGameInput;
export class SelectAdvancedRTSLayerVisitor extends Visitor {
    constructor(selectedRTSLayersPlayerGameInput) {
        super();
        this.selectedRTSLayersPlayerGameInput = selectedRTSLayersPlayerGameInput;
    }
    visit(anyType = {}) {
        var selectedLayer = anyType;
        ;
        if (selectedLayer != CollidableDestroyableDamageableLayer.getNullInstance() && selectedLayer.getType() == BuildingLayer.getStaticType()) {
            var rtsGameLayer = selectedLayer;
            ;
            var assignWaypointsUtil = AssignWaypointsUtil.getInstance();
            ;
            var list = this.selectedRTSLayersPlayerGameInput.getSelectedBasicArrayList();
            ;
            var currentRTSLayer;
            ;
            var unitLayer;
            ;
            for (var index = list.size() - 1; index >= 0; index--) {
                currentRTSLayer = list.get(index);
                if (currentRTSLayer.getType() == UnitLayer.getStaticType()) {
                    unitLayer = currentRTSLayer;
                    unitLayer.setParentLayer(rtsGameLayer);
                    assignWaypointsUtil.set(unitLayer, rtsGameLayer);
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return NullUtil.getInstance().NULL_OBJECT;
    }
}
