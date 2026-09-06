/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { DamageFloaters } from '../../../../../org/allbinary/game/combat/damage/DamageFloaters.js';
//not GWT import const DamageFloaters = globalThis.org.allbinary.game.combat.damage.DamageFloaters;
import { PtsDamageFloaters } from '../../../../../org/allbinary/game/combat/damage/PtsDamageFloaters.js';
//not GWT import const PtsDamageFloaters = globalThis.org.allbinary.game.combat.damage.PtsDamageFloaters;
import { Features } from '../../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
import { GameFeatureFactory } from '../../../../../org/allbinary/game/configuration/feature/GameFeatureFactory.js';
//not GWT import const GameFeatureFactory = globalThis.org.allbinary.game.configuration.feature.GameFeatureFactory;
import { BasicHudFactory } from '../../../../../org/allbinary/game/graphics/hud/BasicHudFactory.js';
//not GWT import const BasicHudFactory = globalThis.org.allbinary.game.graphics.hud.BasicHudFactory;
import { HealthBar } from '../../../../../org/allbinary/game/health/HealthBar.js';
//not GWT import const HealthBar = globalThis.org.allbinary.game.health.HealthBar;
import { HealthBarTwodAnimation } from '../../../../../org/allbinary/game/health/HealthBarTwodAnimation.js';
//not GWT import const HealthBarTwodAnimation = globalThis.org.allbinary.game.health.HealthBarTwodAnimation;
import { TrackingEvent } from '../../../../../org/allbinary/game/tracking/TrackingEvent.js';
//not GWT import const TrackingEvent = globalThis.org.allbinary.game.tracking.TrackingEvent;
import { NullPaintable } from '../../../../../org/allbinary/graphics/paint/NullPaintable.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
//not plain js import { StdUtil } 
const StdUtil = globalThis.org.allbinary.logic.StdUtil;
//not plain js import { ABHashtable } 
const ABHashtable = globalThis.org.allbinary.util.ABHashtable;
//not GWT import - same folder const BuildingLayer = globalThis.org.allbinary.game.layer.building.BuildingLayer;
export class BuildingPropertiesFactory extends Object {
    constructor() {
        super(...arguments);
        this.damageFloatersPaintableInterface = NullPaintable.getInstance();
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return BuildingPropertiesFactory.instance;
    }
    getEfficiencyPerLevel(buildingLayer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 10000 / buildingLayer.getMaxLevel() + 10000 % buildingLayer.getMaxLevel();
    }
    getDamageFloaters(buildingLayer) {
        var damageFloaters = DamageFloaters.getInstance();
        ;
        if (Features.getInstance().isFeature(GameFeatureFactory.getInstance().DAMAGE_FLOATERS)) {
            damageFloaters = new PtsDamageFloaters(buildingLayer);
            this.damageFloatersPaintableInterface = damageFloaters;
        }
        else {
            damageFloaters = new DamageFloaters();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return damageFloaters;
    }
    //@Throws(Exception.constructor)
    getHealthBar(buildingLayer) {
        var healthBar = NullPaintable.getInstance();
        ;
        if (Features.getInstance().isFeature(GameFeatureFactory.getInstance().HEALTH_BARS)) {
            healthBar = new HealthBar(buildingLayer, buildingLayer.getHealthInterface(), new HealthBarTwodAnimation(buildingLayer, BasicHudFactory.getInstance().BOTTOMLEFT), -1);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return healthBar;
    }
    getHashtable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return StdUtil.getInstance().createHashtable();
        ;
    }
    getTrackingEvent(buildingLayer) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return new TrackingEvent(buildingLayer);
    }
}
BuildingPropertiesFactory.instance = new BuildingPropertiesFactory();
