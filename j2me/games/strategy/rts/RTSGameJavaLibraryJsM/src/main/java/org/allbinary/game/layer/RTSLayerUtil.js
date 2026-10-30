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
import { Object } from '../../../../java/lang/Object.js';
import { Integer } from '../../../../java/lang/Integer.js';
import { GroupCommonFactory } from '../../../../org/allbinary/game/identification/GroupCommonFactory.js';
//not GWT import const GroupCommonFactory
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { DirectionFactory } from '../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionFactory
import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo
import { WeaponProperties } from '../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
//not GWT import const WeaponProperties
import { BasicGroupFactory } from '../../../../org/allbinary/game/identification/BasicGroupFactory.js';
//not GWT import const BasicWeaponPart
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const BaseRaceTrackGeographicMap
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//sameFolderImports - not GWT import - same folder const RTSLayer
import { FakeLayerManager } from './FakeLayerManager.js';
//sameFolderImports - not GWT import - same folder const FakeLayerManager
import { AllBinaryGameLayerManager } from './AllBinaryGameLayerManager.js';
//sameFolderImports - not GWT import - same folder const AllBinaryGameLayerManager
export class RTSLayerUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.groupCommonFactory = GroupCommonFactory.getInstance();
        this.MAX_RELOAD_TIME = globalThis.Math.trunc(Integer.MAX_VALUE / 100000);
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RTSLayerUtil.instance;
    }
    createWeaponProperties(weaponProperties, currentLevel, lastLevel) {
        let reloadTime = weaponProperties.getReloadTime();
        ;
        if (lastLevel > currentLevel) {
            reloadTime = reloadTime + 50;
        }
        else if (lastLevel < currentLevel) {
            reloadTime = reloadTime - 50;
        }
        let newWeaponProperties = new WeaponProperties(reloadTime, weaponProperties.getTargetingTime(), weaponProperties.getSpeed().getUnscaled(), weaponProperties.getDamage() / lastLevel * currentLevel, weaponProperties.getDissipation());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return newWeaponProperties;
    }
    downgrade(rtsLayer) {
        rtsLayer.setLevel(rtsLayer.getLevel() - 1);
        let partInterfaceArray = rtsLayer.getPartInterfaceArray();
        ;
        let size = partInterfaceArray.length;
        ;
        let partInterface;
        ;
        for (let index = size; --index >= 0;) {
            partInterface = partInterfaceArray[index];
            partInterface.setWeaponProperties(this.createWeaponProperties(partInterface.getWeaponProperties(), rtsLayer.getLevel(), rtsLayer.getLevel() + 1));
        }
        rtsLayer.select();
    }
    upgrade(rtsLayer) {
        rtsLayer.setLevel(rtsLayer.getLevel() + 1);
        let partInterfaceArray = rtsLayer.getPartInterfaceArray();
        ;
        let size = partInterfaceArray.length;
        ;
        let partInterface;
        ;
        for (let index = size; --index >= 0;) {
            partInterface = partInterfaceArray[index];
            partInterface.setWeaponProperties(this.createWeaponProperties(partInterface.getWeaponProperties(), rtsLayer.getLevel(), rtsLayer.getLevel() - 1));
        }
        rtsLayer.select();
    }
    getCostExponential(cost) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return (globalThis.Math.trunc((cost * cost * cost) / (cost * 1000)));
    }
    getWeaponPropertiesCost(weaponProperties) {
        let cost = (weaponProperties.getDamage() + weaponProperties.getRange() + ((this.MAX_RELOAD_TIME / weaponProperties.getReloadTime()) >> 1));
        ;
        cost = this.getCostExponential(cost);
        //if statement needs to be on the same line and ternary does not work the same way.
        return globalThis.Math.trunc(cost);
    }
    getCost(rtsLayer) {
        let total = 0;
        ;
        let partInterfaceArray = rtsLayer.getPartInterfaceArray();
        ;
        let size = partInterfaceArray.length;
        ;
        let partInterface;
        ;
        let weaponProperties;
        ;
        for (let index = size - 1; index >= 0; index--) {
            partInterface = partInterfaceArray[index];
            weaponProperties = partInterface.getWeaponProperties();
            total += this.getWeaponPropertiesCost(weaponProperties);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return total;
    }
    getDowngradeCost(rtsLayer) {
        let partInterfaceArray = rtsLayer.getPartInterfaceArray();
        ;
        let size = partInterfaceArray.length;
        ;
        let downgradeCost = 0;
        ;
        let partInterface;
        ;
        let weaponProperties;
        ;
        let downgradeWeaponCost = 0;
        ;
        let currentWeaponCost = 0;
        ;
        for (let index = size - 1; index >= 0; index--) {
            partInterface = partInterfaceArray[index];
            weaponProperties = partInterface.getWeaponProperties();
            downgradeWeaponCost = this.getWeaponPropertiesCost(this.createWeaponProperties(weaponProperties, rtsLayer.getLevel() - 1, rtsLayer.getLevel()));
            currentWeaponCost = this.getWeaponPropertiesCost(weaponProperties);
            downgradeCost += (currentWeaponCost - downgradeWeaponCost);
        }
        downgradeCost = globalThis.Math.trunc(downgradeCost * 9 / 10);
        this.logUtil.putF(new StringMaker().append("Total Cost: ").appendint(downgradeCost).toString(), this, "getDowngradeCost");
        //if statement needs to be on the same line and ternary does not work the same way.
        return downgradeCost;
    }
    getUpgradeCost(rtsLayer) {
        let upgradeCost = 0;
        ;
        let partInterfaceArray = rtsLayer.getPartInterfaceArray();
        ;
        let size = partInterfaceArray.length;
        ;
        let partInterface;
        ;
        let weaponProperties;
        ;
        let upgradedWeaponCost = 0;
        ;
        let currentWeaponCost = 0;
        ;
        for (let index = size - 1; index >= 0; index--) {
            partInterface = partInterfaceArray[index];
            weaponProperties = partInterface.getWeaponProperties();
            upgradedWeaponCost = this.getWeaponPropertiesCost(this.createWeaponProperties(weaponProperties, rtsLayer.getLevel() + 1, rtsLayer.getLevel()));
            currentWeaponCost = this.getWeaponPropertiesCost(weaponProperties);
            upgradeCost += (upgradedWeaponCost - currentWeaponCost);
        }
        this.logUtil.putF(new StringMaker().append("Total Cost: ").appendint(upgradeCost).toString(), this, "getUpgradeCost");
        //if statement needs to be on the same line and ternary does not work the same way.
        return upgradeCost;
    }
    //@Throws(Exception.constructor)
    destroyAndClear(list) {
        let rtsLayer;
        ;
        for (let index = list.size() - 1; index >= 0; index--) {
            rtsLayer = list.get(index);
            rtsLayer.setDestroyed(true);
        }
        list.clear();
    }
    createFakeRTSLayerHashtable(baseRaceTrackGeographicMap) {
        let hashtable = StdUtil.getInstance().createHashtable();
        ;
        let layerManager = new FakeLayerManager(GameInfo.NONE);
        ;
        layerManager.setGeographicMapInterface([
            baseRaceTrackGeographicMap
        ]);
        hashtable.put(AllBinaryGameLayerManager.ID, layerManager);
        hashtable.put(DirectionFactory.getInstance().NAME, DirectionFactory.getInstance().LEFT);
        hashtable.put(this.groupCommonFactory.ID, BasicGroupFactory.getInstance().NONE_ARRAY);
        //if statement needs to be on the same line and ternary does not work the same way.
        return hashtable;
    }
}
RTSLayerUtil.instance = new RTSLayerUtil();
