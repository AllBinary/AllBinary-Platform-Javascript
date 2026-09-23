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
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { BasicDecimal } from '../../../../../org/allbinary/logic/math/BasicDecimal.js';
//not GWT import const BasicDecimal
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } 
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { SimpleWeaponProperties } from './SimpleWeaponProperties.js';
//not GWT import - same folder const SimpleWeaponProperties
export class WeaponProperties extends SimpleWeaponProperties {
    constructor(reloadTime, targetingTime, speed, damage, dissipation) {
        super();
        this.reloadTime = 0;
        this.targetingTime = 0;
        this.speed = BasicDecimal.ZERO_BIGDECIMAL;
        this.MAX = 10240;
        this.ZERO = 0;
        if (speed < this.MAX && speed != 0 && !WeaponProperties.messageSent) {
            var MESSAGE = "Danger Danger Danger: Speed probably to slow if using 1 degree calculations as velocity for a single axis could be below 1024: ";
            ;
            var commonStrings = CommonStrings.getInstance();
            ;
            PreLogUtil.put(new StringMaker().append(MESSAGE).appendlong(speed).toString(), this, commonStrings.CONSTRUCTOR);
            WeaponProperties.messageSent = true;
        }
        this.setReloadTime(reloadTime);
        this.setTargetingTime(targetingTime);
        this.setDamage(damage);
        this.setDissipation(dissipation);
        this.setSpeed(new BasicDecimal(speed));
        if (dissipation != this.ZERO) {
            var unscaledDamage = this.speed.getUnscaled() * damage;
            ;
            var scaledDissipation = dissipation * this.speed.getScaledFactorValue();
            ;
            var value = (unscaledDamage / scaledDissipation);
            ;
            this.setRange(Math.round((value * 9)) / 10);
        }
    }
    setReloadTime(reloadTime) {
        this.reloadTime = reloadTime;
    }
    getReloadTime() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.reloadTime;
    }
    setTargetingTime(targetingTime) {
        this.targetingTime = targetingTime;
    }
    getTargetingTime() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.targetingTime;
    }
    getSpeed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.speed;
    }
    setSpeed(speed) {
        this.speed = speed;
    }
    getDamageI(range) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.getDamage() - ((this.getDissipation() * range) / this.speed.getScaled());
    }
    toStringArray() {
        var index = 0;
        ;
        var stringArray = new Array(3);
        ;
        var stringBuffer = new StringMaker();
        ;
        stringArray[index++] = stringBuffer.append(WeaponProperties.DAMAGE).appendint(this.getDamage()).toString();
        stringBuffer.delete(0, stringBuffer.length());
        stringArray[index++] = stringBuffer.append(WeaponProperties.RANGE).appendint(this.getRange()).toString();
        stringBuffer.delete(0, stringBuffer.length());
        stringArray[index++] = stringBuffer.append(WeaponProperties.RELOAD).appendlong(this.getReloadTime()).toString();
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringArray;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(WeaponProperties.DAMAGE).appendint(this.getDamage());
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(WeaponProperties.RANGE).appendint(this.getRange());
        stringBuffer.append(CommonSeps.getInstance().SPACE);
        stringBuffer.append(WeaponProperties.RELOAD).appendlong(this.getReloadTime());
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
WeaponProperties.NULL_WEAPON_PROPERTIES = new WeaponProperties(0, 0, 0, 0, 0);
WeaponProperties.messageSent = false;
WeaponProperties.DAMAGE = "Damage: ";
WeaponProperties.RANGE = "Range: ";
WeaponProperties.RELOAD = "Reload: ";
