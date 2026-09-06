/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2003 AllBinary
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
import { Object } from '../../../../../java/lang/Object.js';
import { GroupCommonFactory } from '../../../../../org/allbinary/game/identification/GroupCommonFactory.js';
//not GWT import const LayerInterfaceFactoryImageItem = globalThis.org.allbinary.game.layer.item.LayerInterfaceFactoryImageItem;
import { ABCustomItem } from '../../../../../org/allbinary/graphics/form/item/ABCustomItem.js';
//not GWT import const ABCustomItem = globalThis.org.allbinary.graphics.form.item.ABCustomItem;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const Group = globalThis.org.allbinary.game.identification.Group;
import { AllBinaryGameLayerManager } from '../../../../../org/allbinary/game/layer/AllBinaryGameLayerManager.js';
//not GWT import const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;
import { CollidableDestroyableDamageableLayer } from '../../../../../org/allbinary/game/layer/special/CollidableDestroyableDamageableLayer.js';
//not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not GWT import const LayerInterfaceFactoryInterface = globalThis.org.allbinary.layer.LayerInterfaceFactoryInterface;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const GeographicMapCellPosition = globalThis.org.allbinary.media.graphics.geography.map.GeographicMapCellPosition;
import { SimpleGeographicMapCellPositionFactory } from '../../../../../org/allbinary/media/graphics/geography/map/SimpleGeographicMapCellPositionFactory.js';
//not GWT import const SimpleGeographicMapCellPositionFactory = globalThis.org.allbinary.media.graphics.geography.map.SimpleGeographicMapCellPositionFactory;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class RTSFormInput extends Object {
    constructor(groupInterfaceArray) {
        super();
        this.logUtil = LogUtil.getInstance();
        this.groupCommonFactory = GroupCommonFactory.getInstance();
        this.hashtable = StdUtil.getInstance().createHashtable();
        this.newUnconstructedRTSLayerInterfaceArray = new Array(7);
        this.selectedGeographicCellPosition = SimpleGeographicMapCellPositionFactory.NULL_GEOGRAPHIC_MAP_CELL_POSITION;
        this.stickyItemSelected = false;
        this.selectedStickyItemIndex = 0;
        this.selectedStickyItem = ABCustomItem.getNullInstance();
        var size = this.newUnconstructedRTSLayerInterfaceArray.length;
        ;
        for (var index = 0; index < size; index++) {
            this.newUnconstructedRTSLayerInterfaceArray[index] = CollidableDestroyableDamageableLayer.getNullInstance();
        }
        this.groupInterfaceArray = groupInterfaceArray;
        this.hashtable.put(DirectionFactory.getInstance().NAME, DirectionFactory.getInstance().DOWN);
        if (groupInterfaceArray !=
            null) {
            this.hashtable.put(this.groupCommonFactory.ID, groupInterfaceArray);
        }
    }
    //@Throws(Exception.constructor)
    setAllBinaryGameLayerManager(allBinaryGameLayerManager) {
    }
    //@Throws(Exception.constructor)
    processAtPoint(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point) {
        var index = this.getIndexAt(rtsPlayerLayerInterface, point);
        ;
        if (index < 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var scrollSelectionForm = rtsPlayerLayerInterface.getCurrentScrollSelectionForm();
        ;
        var item = scrollSelectionForm.get(index);
        ;
        if (item ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        this.processGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
    }
    //@Throws(Exception.constructor)
    process(layerManager) {
        this.setAllBinaryGameLayerManager(layerManager);
    }
    //@Throws(Exception.constructor)
    processGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index) {
    }
    //@Throws(Exception.constructor)
    processSticky(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, point) {
        var index = this.getIndexAt(rtsPlayerLayerInterface, point);
        ;
        if (index < 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        var scrollSelectionForm = rtsPlayerLayerInterface.getCurrentScrollSelectionForm();
        ;
        var item = scrollSelectionForm.get(index);
        ;
        if (item ==
            null) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        this.processStickyGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index);
        //if statement needs to be on the same line and ternary does not work the same way.
        return true;
    }
    //@Throws(Exception.constructor)
    processStickyGameSpecific(associatedRtsLayer, rtsPlayerLayerInterface, layerManager, item, index) {
    }
    //@Throws(Exception.constructor)
    getItemAt(rtsPlayerLayerInterface, point) {
        this.logUtil.putF(new StringMaker().append("Point: ").append(StringUtil.getInstance().toString(point)).toString(), this, "getItemAt");
        var scrollSelectionForm = rtsPlayerLayerInterface.getCurrentScrollSelectionForm();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return scrollSelectionForm.getSelectedItem(point);
        ;
    }
    //@Throws(Exception.constructor)
    getIndexAt(rtsPlayerLayerInterface, point) {
        this.logUtil.putF(new StringMaker().append("Point: ").append(StringUtil.getInstance().toString(point)).toString(), this, "getItemAt");
        var scrollSelectionForm = rtsPlayerLayerInterface.getCurrentScrollSelectionForm();
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return scrollSelectionForm.getSelectedIndexForPoint(point);
        ;
    }
    //@Throws(Exception.constructor)
    getInstance(layerManager, aItem, geographicMapCellPosition) {
        var item = aItem;
        ;
        var layerInterfaceFactoryInterface = item.getLayerInterfaceFactoryInterface();
        ;
        var cellPoint = geographicMapCellPosition.getPoint();
        ;
        if (layerInterfaceFactoryInterface !=
            null) {
            this.hashtable.put(AllBinaryGameLayerManager.ID, layerManager);
            //if statement needs to be on the same line and ternary does not work the same way.
            return layerInterfaceFactoryInterface.getNextInstance(this.getHashtable(), cellPoint.getX(), cellPoint.getY(), cellPoint.getZ());
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return CollidableDestroyableDamageableLayer.getNullInstance();
        ;
    }
    getSelectedGeographicCellPosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.selectedGeographicCellPosition;
    }
    setSelectedGeographicCellPosition(selectedGeographicCellPosition) {
        this.logUtil.putF(new StringMaker().append("Selected GeographicMapCellPosition: ").append(selectedGeographicCellPosition.toString()).toString(), this, "setSelectedGeographicCellPosition");
        this.selectedGeographicCellPosition = selectedGeographicCellPosition;
    }
    isStickyItemSelected() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.stickyItemSelected;
    }
    setStickyItemSelected(stickyItemSelected) {
        this.stickyItemSelected = stickyItemSelected;
    }
    getSelectedStickyItem() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.selectedStickyItem;
    }
    setSelectedStickyItem(selectedStickyItem) {
        this.selectedStickyItem = selectedStickyItem;
    }
    getSelectedStickyItemIndex() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.selectedStickyItemIndex;
    }
    setSelectedStickyItemIndex(selectedStickyItemIndex) {
        this.selectedStickyItemIndex = selectedStickyItemIndex;
    }
    getHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.hashtable;
    }
}
