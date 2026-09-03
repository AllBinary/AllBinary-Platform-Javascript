/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2011 AllBinary
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
//not GWT import const JsMethod = globalThis.jsinterop.annotations.JsMethod;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class SimpleWeaponProperties extends Object {
    constructor() {
        super(...arguments);
        this.damage = 0;
        this.dissipation = 0;
        this.range = 0;
    }
    set(simpleWeaponProperties) {
        this.setDamage(simpleWeaponProperties.getDamage());
        this.setDissipation(simpleWeaponProperties.getDissipation());
        this.setRange(simpleWeaponProperties.getRange());
    }
    setDamage(damage) {
        this.damage = damage;
    }
    getDamage() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.damage;
    }
    setDissipation(dissipation) {
        this.dissipation = dissipation;
    }
    getDissipation() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.dissipation;
    }
    getRange() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.range;
    }
    setRange(range) {
        this.range = range;
    }
}
