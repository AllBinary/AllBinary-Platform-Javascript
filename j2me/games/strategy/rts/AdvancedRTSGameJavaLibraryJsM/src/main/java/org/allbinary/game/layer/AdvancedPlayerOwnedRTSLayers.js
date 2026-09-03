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
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { PlayerOwnedRTSLayers } from './PlayerOwnedRTSLayers.js';
//not GWT import const AllBinaryGameLayer = globalThis.org.allbinary.game.layer.AllBinaryGameLayer;
export class AdvancedPlayerOwnedRTSLayers extends PlayerOwnedRTSLayers {
    constructor() {
        super(...arguments);
        this.unitsList = new BasicArrayListD();
        this.waypointsList = new BasicArrayListD();
        this.buildingList = new BasicArrayListD();
        this.baseList = new BasicArrayListD();
        this.garrisonList = new BasicArrayListD();
        this.houseList = new BasicArrayListD();
        this.labList = new BasicArrayListD();
        this.factoryList = new BasicArrayListD();
    }
    addUnit(rtsLayer) {
        this.unitsList.add(rtsLayer);
        this.rtsLayerList.add(rtsLayer);
    }
    addWaypoint(rtsLayer) {
        this.waypointsList.add(rtsLayer);
        this.rtsLayerList.add(rtsLayer);
    }
    addBase(rtsLayer) {
        this.baseList.add(rtsLayer);
        this.buildingList.add(rtsLayer);
        this.rtsLayerList.add(rtsLayer);
    }
    addGarrison(rtsLayer) {
        this.garrisonList.add(rtsLayer);
        this.buildingList.add(rtsLayer);
        this.rtsLayerList.add(rtsLayer);
    }
    addHouse(rtsLayer) {
        this.houseList.add(rtsLayer);
        this.buildingList.add(rtsLayer);
        this.rtsLayerList.add(rtsLayer);
    }
    addLab(rtsLayer) {
        this.labList.add(rtsLayer);
        this.buildingList.add(rtsLayer);
        this.rtsLayerList.add(rtsLayer);
    }
    addFactory(rtsLayer) {
        this.factoryList.add(rtsLayer);
        this.buildingList.add(rtsLayer);
        this.rtsLayerList.add(rtsLayer);
    }
    removeUnit(gameLayer) {
        this.unitsList.remove(gameLayer);
        this.rtsLayerList.remove(gameLayer);
    }
    removeWaypoint(gameLayer) {
        this.waypointsList.remove(gameLayer);
        this.rtsLayerList.remove(gameLayer);
    }
    getUnitsList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.unitsList;
    }
    getWaypointsList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.waypointsList;
    }
    getBaseList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.baseList;
    }
    getGarrisonList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.garrisonList;
    }
    getHouseList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.houseList;
    }
    getLabList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.labList;
    }
    getFactoryList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.factoryList;
    }
    getTotalBuildings() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.baseList.size() + this.garrisonList.size() + this.houseList.size() + this.labList.size() + this.factoryList.size();
    }
    removeBuilding(layerInterface) {
        this.buildingList.add(layerInterface);
        if (this.getBaseList().remove(layerInterface)) {
            this.rtsLayerList.remove(layerInterface);
        }
        else if (this.getFactoryList().remove(layerInterface)) {
            this.rtsLayerList.remove(layerInterface);
        }
        else if (this.getGarrisonList().remove(layerInterface)) {
            this.rtsLayerList.remove(layerInterface);
        }
        else if (this.getLabList().remove(layerInterface)) {
            this.rtsLayerList.remove(layerInterface);
        }
        else if (this.getHouseList().remove(layerInterface)) {
            this.rtsLayerList.remove(layerInterface);
        }
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(super.toString());
        stringBuffer.append(" Bases: ");
        stringBuffer.appendint(this.getBaseList().size());
        stringBuffer.append(" Factory: ");
        stringBuffer.appendint(this.getFactoryList().size());
        stringBuffer.append(" Garrison: ");
        stringBuffer.appendint(this.getGarrisonList().size());
        stringBuffer.append(" Labs: ");
        stringBuffer.appendint(this.getLabList().size());
        stringBuffer.append(" Houses: ");
        stringBuffer.appendint(this.getHouseList().size());
        stringBuffer.append(" Waypoints: ");
        stringBuffer.appendint(this.getWaypointsList().size());
        stringBuffer.append(" Units: ");
        stringBuffer.appendint(this.getUnitsList().size());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
    getBuildingList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.buildingList;
    }
}
