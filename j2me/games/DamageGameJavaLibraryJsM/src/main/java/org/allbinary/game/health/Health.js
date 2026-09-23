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
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { ForcedLogUtil } 
const ForcedLogUtil = globalThis.org.allbinary.logic.communication.log.ForcedLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not GWT import - same folder const HealthInterface
import { NullHealthListener } from './NullHealthListener.js';
//not GWT import - same folder const HealthListenerInterface
export class Health extends Object {
    constructor(maxHealth) {
        super();
        this.health = 0;
        this.maxHealth = 0;
        this.healthListenerInterface = NullHealthListener.NULL_HEALTH_LISTENER;
        this.setMaxHealth(maxHealth);
        this.setHealth(maxHealth);
    }
    heal(ahealth) {
        var newHealth = this.getHealth() + ahealth;
        ;
        if (newHealth > this.getMaxHealth()) {
            this.setHealth(this.getMaxHealth());
        }
        else {
            this.setHealth(newHealth);
        }
    }
    healMax() {
        this.setHealth(this.getMaxHealth());
    }
    isDamaged() {
        if (this.getHealth() != this.getMaxHealth()) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    damage(ahealth) {
        if (ahealth < 0) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append("******* Trying to heal when damaging. Damage: ");
            stringBuffer.appendint(ahealth);
            stringBuffer.append(CommonSeps.getInstance().SPACE);
            stringBuffer.append(this.toString());
            ForcedLogUtil.log(stringBuffer.toString(), this);
            //if statement needs to be on the same line and ternary does not work the same way.
            return;
        }
        var health = this.getHealth() - ahealth;
        ;
        this.setHealth(health);
    }
    isAlive() {
        if (this.getHealth() <= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    getMaxHealth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxHealth;
    }
    setMaxHealth(maxHealth) {
        this.maxHealth = maxHealth;
    }
    setHealth(health) {
        if (health > this.getMaxHealth()) {
            this.health = this.getMaxHealth();
        }
        else if (health < 0) {
            this.health = 0;
        }
        else {
            this.health = health;
        }
        if (this.healthListenerInterface !=
            null) {
            this.healthListenerInterface.onHealthChange();
        }
    }
    getHealth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.health;
    }
    addListener(healthGraphic) {
        this.healthListenerInterface = healthGraphic;
    }
    toString() {
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append(Health.HEALTH_LABEL);
        stringBuffer.appendint(this.health);
        stringBuffer.append(Health.MAX_HEALTH_LABEL);
        stringBuffer.appendint(this.maxHealth);
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
Health.NULL_HEALTH = new Health(0);
Health.NAME = "Health Resource";
Health.HEALTH_LABEL = "Health: ";
Health.MAX_HEALTH_LABEL = " Max: ";
