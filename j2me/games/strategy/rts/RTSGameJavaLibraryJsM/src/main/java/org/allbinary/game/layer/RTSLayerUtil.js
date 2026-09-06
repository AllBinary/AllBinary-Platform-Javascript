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
//not GWT import const GroupCommonFactory = globalThis.org.allbinary.game.identification.GroupCommonFactory;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
import { DirectionFactory } from '../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;
import { GameInfo } from '../../../../org/allbinary/game/GameInfo.js';
//not GWT import const GameInfo = globalThis.org.allbinary.game.GameInfo;
import { WeaponProperties } from '../../../../org/allbinary/game/combat/weapon/WeaponProperties.js';
//not GWT import const WeaponProperties = globalThis.org.allbinary.game.combat.weapon.WeaponProperties;
import { BasicGroupFactory } from '../../../../org/allbinary/game/identification/BasicGroupFactory.js';
//not GWT import const BasicWeaponPart = globalThis.org.allbinary.game.part.weapon.BasicWeaponPart;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const BaseRaceTrackGeographicMap = globalThis.org.allbinary.media.graphics.geography.map.racetrack.BaseRaceTrackGeographicMap;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not GWT import - same folder const RTSLayer = globalThis.org.allbinary.game.layer.RTSLayer;
import { FakeLayerManager } from './FakeLayerManager.js';
//not GWT import - same folder const FakeLayerManager = globalThis.org.allbinary.game.layer.FakeLayerManager;
import { AllBinaryGameLayerManager } from './AllBinaryGameLayerManager.js';
//not GWT import - same folder const AllBinaryGameLayerManager = globalThis.org.allbinary.game.layer.AllBinaryGameLayerManager;
export class RTSLayerUtil extends Object {
    constructor() {
        super(...arguments);
        this.logUtil = LogUtil.getInstance();
        this.groupCommonFactory = GroupCommonFactory.getInstance();
        this.MAX_RELOAD_TIME = Integer.MAX_VALUE / 100000;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return RTSLayerUtil.instance;
    }
    createWeaponProperties(weaponProperties, currentLevel, lastLevel) {
        var reloadTime = weaponProperties.getReloadTime();
        ;
        if (lastLevel > currentLevel) {
            reloadTime = reloadTime + 50;
        }
        else if (lastLevel < currentLevel) {
            reloadTime = reloadTime - 50;
        }
        var newWeaponProperties = new WeaponProperties(reloadTime, weaponProperties.getTargetingTime(), weaponProperties.getSpeed().getUnscaled(), weaponProperties.getDamage() / lastLevel * currentLevel, weaponProperties.getDissipation());
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return newWeaponProperties;
    }
    downgrade(rtsLayer) {
        rtsLayer.setLevel(rtsLayer.getLevel() - 1);
        var partInterfaceArray = rtsLayer.getPartInterfaceArray();
        ;
        var size = partInterfaceArray.length;
        ;
        var partInterface;
        ;
        for (var index = size; --index >= 0;) {
            partInterface = partInterfaceArray[index];
            partInterface.setWeaponProperties(this.createWeaponProperties(partInterface.getWeaponProperties(), rtsLayer.getLevel(), rtsLayer.getLevel() + 1));
        }
        rtsLayer.select();
    }
    upgrade(rtsLayer) {
        rtsLayer.setLevel(rtsLayer.getLevel() + 1);
        var partInterfaceArray = rtsLayer.getPartInterfaceArray();
        ;
        var size = partInterfaceArray.length;
        ;
        var partInterface;
        ;
        for (var index = size; --index >= 0;) {
            partInterface = partInterfaceArray[index];
            partInterface.setWeaponProperties(this.createWeaponProperties(partInterface.getWeaponProperties(), rtsLayer.getLevel(), rtsLayer.getLevel() - 1));
        }
        rtsLayer.select();
    }
    getCostExponential(cost) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ((cost * cost * cost) / (cost * 1000));
    }
    getWeaponPropertiesCost(weaponProperties) {
        var cost = (weaponProperties.getDamage() + weaponProperties.getRange() + ((this.MAX_RELOAD_TIME / weaponProperties.getReloadTime()) >> 1));
        ;
        cost = this.getCostExponential(cost);
        //if statement needs to be on the same line and ternary does not work the same way.
        return Math.round(cost);
    }
    getCost(rtsLayer) {
        var total = 0;
        ;
        var partInterfaceArray = rtsLayer.getPartInterfaceArray();
        ;
        var size = partInterfaceArray.length;
        ;
        var partInterface;
        ;
        var weaponProperties;
        ;
        for (var index = size - 1; index >= 0; index--) {
            partInterface = partInterfaceArray[index];
            weaponProperties = partInterface.getWeaponProperties();
            total += this.getWeaponPropertiesCost(weaponProperties);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return total;
    }
    getDowngradeCost(rtsLayer) {
        var partInterfaceArray = rtsLayer.getPartInterfaceArray();
        ;
        var size = partInterfaceArray.length;
        ;
        var downgradeCost = 0;
        ;
        var partInterface;
        ;
        var weaponProperties;
        ;
        var downgradeWeaponCost = 0;
        ;
        var currentWeaponCost = 0;
        ;
        for (var index = size - 1; index >= 0; index--) {
            partInterface = partInterfaceArray[index];
            weaponProperties = partInterface.getWeaponProperties();
            downgradeWeaponCost = this.getWeaponPropertiesCost(this.createWeaponProperties(weaponProperties, rtsLayer.getLevel() - 1, rtsLayer.getLevel()));
            currentWeaponCost = this.getWeaponPropertiesCost(weaponProperties);
            downgradeCost += (currentWeaponCost - downgradeWeaponCost);
        }
        downgradeCost = downgradeCost * 9 / 10;
        this.logUtil.putF(new StringMaker().append("Total Cost: ").appendint(downgradeCost).toString(), this, "getDowngradeCost");
        //if statement needs to be on the same line and ternary does not work the same way.
        return downgradeCost;
    }
    getUpgradeCost(rtsLayer) {
        var upgradeCost = 0;
        ;
        var partInterfaceArray = rtsLayer.getPartInterfaceArray();
        ;
        var size = partInterfaceArray.length;
        ;
        var partInterface;
        ;
        var weaponProperties;
        ;
        var upgradedWeaponCost = 0;
        ;
        var currentWeaponCost = 0;
        ;
        for (var index = size - 1; index >= 0; index--) {
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
        var rtsLayer;
        ;
        for (var index = list.size() - 1; index >= 0; index--) {
            rtsLayer = list.get(index);
            rtsLayer.setDestroyed(true);
        }
        list.clear();
    }
    createFakeRTSLayerHashtable(baseRaceTrackGeographicMap) {
        var hashtable = StdUtil.getInstance().createHashtable();
        ;
        var layerManager = new FakeLayerManager(GameInfo.NONE);
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
