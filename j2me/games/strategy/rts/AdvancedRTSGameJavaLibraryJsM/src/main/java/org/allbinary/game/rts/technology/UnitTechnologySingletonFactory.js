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
//Current folder imports from return types, extended types, and scope (deduplicated)
export class UnitTechnologySingletonFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return UnitTechnologySingletonFactory.instance;
    }
    constructor() {
        super();
        this.damage = 0;
        this.health = 0;
        this.reload = 0;
        this.repair = 0;
        this.speed = 0;
    }
    init() {
        this.setDamage(0);
        this.setHealth(0);
        this.setReload(0);
        this.setRepair(0);
        this.setSpeed(0);
    }
    getDamage() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.damage;
    }
    setDamage(damage) {
        this.damage = damage;
    }
    getHealth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.health;
    }
    setHealth(health) {
        this.health = health;
    }
    getReload() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.reload;
    }
    setReload(reload) {
        this.reload = reload;
    }
    getRepair() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.repair;
    }
    setRepair(repair) {
        this.repair = repair;
    }
    getSpeed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.speed;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
}
UnitTechnologySingletonFactory.instance = new UnitTechnologySingletonFactory();
