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
//not GWT import const CollidableDestroyableDamageableLayer = globalThis.org.allbinary.game.layer.special.CollidableDestroyableDamageableLayer;
//not plain js import { LogUtil } from '../../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not GWT import const DamageableInterface = globalThis.org.allbinary.game.combat.damage.DamageableInterface;
export class DamageUtil extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return DamageUtil.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.COLLIDE = "collide";
    }
    //@Throws(Exception.constructor)
    process(damageableInterface, damageableInterface2) {
        damageableInterface.damage(damageableInterface2.getDamage(0), 0);
    }
    //@Throws(Exception.constructor)
    debugDamage(collidableInterfaceCompositeInterface1, collidableInterfaceCompositeInterface) {
        var collidableDestroyableDamageableLayer = collidableInterfaceCompositeInterface;
        ;
        var damage = collidableDestroyableDamageableLayer.getDamage(0);
        ;
        if (damage > 20000) {
            var stringBuffer = new StringMaker();
            ;
            stringBuffer.append("Collision ");
            stringBuffer.append(collidableInterfaceCompositeInterface1.toString());
            stringBuffer.append(" with: ");
            stringBuffer.append(collidableInterfaceCompositeInterface.toString());
            stringBuffer.append(" damage: ");
            stringBuffer.appendint(damage);
            this.logUtil.putF(stringBuffer.toString(), collidableInterfaceCompositeInterface1, this.COLLIDE);
        }
    }
}
DamageUtil.instance = new DamageUtil();
