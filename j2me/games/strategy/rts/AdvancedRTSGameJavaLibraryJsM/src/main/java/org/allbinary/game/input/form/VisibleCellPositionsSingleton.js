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
import { Object } from '../../../../../java/lang/Object.js';
import { SimpleTiledLayer } from '../../../../../javax/microedition/lcdui/game/SimpleTiledLayer.js';
//not GWT import const SimpleTiledLayer = globalThis.javax.microedition.lcdui.game.SimpleTiledLayer;
//not plain js import { Graphics } from '../../../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const BuildingEventListenerInterface = globalThis.org.allbinary.game.layer.building.event.BuildingEventListenerInterface;
import { LocalPlayerBuildingEventHandler } from '../../../../../org/allbinary/game/layer/building/event/LocalPlayerBuildingEventHandler.js';
//not GWT import const LocalPlayerBuildingEventHandler = globalThis.org.allbinary.game.layer.building.event.LocalPlayerBuildingEventHandler;
//not plain js import { BasicArrayList } from '../../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { ForcedLogUtil } from '../../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not GWT import const ScrollMapEvent = globalThis.org.allbinary.layer.event.ScrollMapEvent;
import { ScrollMapEventHandler } from '../../../../../org/allbinary/layer/event/ScrollMapEventHandler.js';
//not GWT import const ScrollMapEventListenerInterface = globalThis.org.allbinary.layer.event.ScrollMapEventListenerInterface;
//not plain js import { NullUtil } from '../../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not GWT import const AllBinaryEventObject = globalThis.org.allbinary.logic.util.event.AllBinaryEventObject;
import { EventStrings } from '../../../../../org/allbinary/logic/util/event/EventStrings.js';
//not GWT import const EventStrings = globalThis.org.allbinary.logic.util.event.EventStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class VisibleCellPositionsSingleton extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return VisibleCellPositionsSingleton.instance;
    }
    constructor() {
        super();
        this.stationaryVisibleCellPositions = NullUtil.getInstance().NULL_SHORT_ARRAY_ARRAY;
        this.visibleCellPositions = NullUtil.getInstance().NULL_SHORT_ARRAY_ARRAY;
        this.currentlyVisibleCellPositions = NullUtil.getInstance().NULL_SHORT_ARRAY_ARRAY;
        this.ALL_VISIBLE_TILEDLAYER = new SimpleTiledLayer(0, 0, 0, 0);
        this.simpleTiledLayer = this.ALL_VISIBLE_TILEDLAYER;
        this.paintSimpleTiledLayer = this.ALL_VISIBLE_TILEDLAYER;
        this.currentIndex = 0;
        LocalPlayerBuildingEventHandler.getInstance().addListenerInterface(this);
        ScrollMapEventHandler.getInstance().addListenerInterface(this);
    }
    init(simpleTiledLayer) {
        this.paintSimpleTiledLayer = this.ALL_VISIBLE_TILEDLAYER;
        this.currentIndex = 0;
        var rows = simpleTiledLayer.getRows();
        ;
        var columns = simpleTiledLayer.getColumns();
        ;
        this.stationaryVisibleCellPositions = new Array(rows).fill(null).map(() => new Array(columns).fill(0));
        this.visibleCellPositions = new Array(rows).fill(null).map(() => new Array(columns).fill(0));
        this.currentlyVisibleCellPositions = new Array(rows).fill(null).map(() => new Array(columns).fill(0));
        this.setSimpleTiledLayer(simpleTiledLayer);
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    //@Throws(Exception.constructor)
    onBuildingEvent(event) {
        this.paintSimpleTiledLayer = this.simpleTiledLayer;
    }
    //@Throws(Exception.constructor)
    onMoveEvent(scrollMapEvent) {
        this.move(scrollMapEvent.getDx(), scrollMapEvent.getDy());
    }
    addStationaryCellPositions(list) {
        for (var index = list.size() - 1; index >= 0; index--) {
            var cellPosition = list.get(index);
            ;
            this.stationaryVisibleCellPositions[cellPosition.getRow()][cellPosition.getColumn()]++;
        }
    }
    removeStationaryCellPositions(list) {
        for (var index = list.size() - 1; index >= 0; index--) {
            var cellPosition = list.get(index);
            ;
            this.stationaryVisibleCellPositions[cellPosition.getRow()][cellPosition.getColumn()]--;
        }
    }
    update() {
        if (this.currentIndex == 0) {
            var temp = this.currentlyVisibleCellPositions;
            ;
            this.currentlyVisibleCellPositions = this.visibleCellPositions;
            this.visibleCellPositions = temp;
            for (var index = this.visibleCellPositions.length - 1; index >= 0; index--) {
                for (var index2 = this.visibleCellPositions[0].length - 1; index2 >= 0; index2--) {
                    this.visibleCellPositions[index][index2] = this.stationaryVisibleCellPositions[index][index2];
                }
            }
        }
        this.currentIndex++;
        if (this.currentIndex > 10) {
            this.currentIndex = 0;
        }
    }
    shouldProcess() {
        if (this.currentIndex == 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    addCellPositions(list) {
        for (var index = list.size() - 1; index >= 0; index--) {
            var cellPosition = list.get(index);
            ;
            this.visibleCellPositions[cellPosition.getRow()][cellPosition.getColumn()]++;
        }
    }
    isVisible(cellPosition) {
        if (this.visibleCellPositions[cellPosition.getRow()][cellPosition.getColumn()] > 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    move(dx, dy) {
        this.getSimpleTiledLayer().moveDXY(dx, dy);
    }
    paint(graphics) {
        this.paintSimpleTiledLayer.paint(graphics, this.currentlyVisibleCellPositions);
    }
    setSimpleTiledLayer(simpleTiledLayer) {
        this.simpleTiledLayer = simpleTiledLayer;
    }
    getSimpleTiledLayer() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.simpleTiledLayer;
    }
}
VisibleCellPositionsSingleton.instance = new VisibleCellPositionsSingleton();
