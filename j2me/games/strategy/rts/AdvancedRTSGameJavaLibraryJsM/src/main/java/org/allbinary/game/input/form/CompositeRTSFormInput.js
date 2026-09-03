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
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;
//not plain js import { CommonStrings } from '../../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;
//not plain js import { GPoint } from '../../../../../org/allbinary/graphics/GPoint.js';
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not GWT import const GeographicMapCompositeInterface = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCompositeInterface;
//not plain js import { CommonLabels } from '../../../../../org/allbinary/string/CommonLabels.js';
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { RTSFormInput } from './RTSFormInput.js';
//not GWT import const RTSFormInput = globalThis.org.allbinary.game.input.form.RTSFormInput;
import { WaypointRTSFormInput } from './WaypointRTSFormInput.js';
//not GWT import const WaypointRTSFormInput = globalThis.org.allbinary.game.input.form.WaypointRTSFormInput;
import { UnitRTSFormInput } from './UnitRTSFormInput.js';
//not GWT import const UnitRTSFormInput = globalThis.org.allbinary.game.input.form.UnitRTSFormInput;
export class CompositeRTSFormInput extends RTSFormInput {
    constructor(groupInterface, isPrimaryWaypointCreator, itemIndex) {
        super(groupInterface);
        //For kotlin this is before the body of the constructor.
        this.itemIndex = itemIndex;
        this.isPrimaryWaypointCreator = isPrimaryWaypointCreator;
        this.rtsFormInputArray = new Array(2);
        this.rtsFormInputArray[0] = new WaypointRTSFormInput(this.groupInterfaceArray, isPrimaryWaypointCreator);
        this.rtsFormInputArray[1] = new UnitRTSFormInput(this.groupInterfaceArray);
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
        super.setAllBinaryGameLayerManager(allBinaryGameLayerManager);
        var geographicMapCompositeInterface = allBinaryGameLayerManager;
        ;
        var geographicMapInterface = geographicMapCompositeInterface.getGeographicMapInterface()[0];
        ;
        var size = this.rtsFormInputArray.length;
        ;
        for (var index = 0; index < size; index++) {
            this.rtsFormInputArray[index].setAllBinaryGameLayerManager(allBinaryGameLayerManager);
        }
    }
    //@Throws(Exception.constructor)
    processAtPoint(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point) {
        var scrollSelectionForm = rtsPlayerLayerInterface.getCurrentScrollSelectionForm();
        ;
        var index = scrollSelectionForm.getSelectedIndexForPoint(point);
        ;
        if (this.isStickyItemSelected() && associatedRtsLayer == CollidableDestroyableDamageableLayer.getNullInstance()) {
            if (this.getSelectedStickyItemIndex() <= this.itemIndex[0]) {
                this.rtsFormInputArray[0].processAtPoint(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point);
            }
        }
        else if (index > this.itemIndex[0]) {
            this.rtsFormInputArray[1].processAtPoint(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point);
        }
    }
    //@Throws(Exception.constructor)
    processGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index) {
        var commonStrings = CommonStrings.getInstance();
        ;
        this.logUtil.putF(CommonLabels.getInstance().INDEX_LABEL + index + " > " + this.itemIndex[0], this, commonStrings.PROCESS);
        if (this.isStickyItemSelected() && associatedRtsLayer == CollidableDestroyableDamageableLayer.getNullInstance()) {
            if (this.getSelectedStickyItemIndex() <= this.itemIndex[0]) {
                this.rtsFormInputArray[0].processGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
            }
        }
        else if (index > this.itemIndex[0]) {
            this.rtsFormInputArray[1].processGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
        }
    }
    //@Throws(Exception.constructor)
    processSticky(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsFormInputArray[0].processSticky(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point);
        ;
    }
    //@Throws(Exception.constructor)
    processStickyGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index) {
        this.rtsFormInputArray[0].processStickyGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
    }
    getSelectedStickyItemIndex() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsFormInputArray[0].getSelectedStickyItemIndex();
        ;
    }
    isStickyItemSelected() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsFormInputArray[0].isStickyItemSelected();
        ;
    }
    setStickyItemSelected(stickyItemSelected) {
        this.rtsFormInputArray[0].setStickyItemSelected(stickyItemSelected);
    }
    getSelectedStickyItem() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rtsFormInputArray[0].getSelectedStickyItem();
        ;
    }
    setSelectedStickyItem(selectedStickyItem) {
        this.rtsFormInputArray[0].setSelectedStickyItem(selectedStickyItem);
    }
}
