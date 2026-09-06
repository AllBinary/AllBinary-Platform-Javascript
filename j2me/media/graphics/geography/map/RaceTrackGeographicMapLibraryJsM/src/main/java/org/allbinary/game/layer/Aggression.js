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
//not plain js import { SmallIntegerSingletonFactory } 
const SmallIntegerSingletonFactory = globalThis.org.allbinary.logic.math.SmallIntegerSingletonFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class Aggression extends Object {
    constructor(ram, projectile, drops) {
        super();
        this.ram = SmallIntegerSingletonFactory.getInstance().getAt(0);
        this.projectile = SmallIntegerSingletonFactory.getInstance().getAt(0);
        this.drops = SmallIntegerSingletonFactory.getInstance().getAt(0);
        this.setRam(ram);
        this.setProjectile(projectile);
        this.setDrops(drops);
    }
    getRam() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.ram;
    }
    setRam(ram) {
        this.ram = ram;
    }
    getProjectile() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.projectile;
    }
    setProjectile(projectile) {
        this.projectile = projectile;
    }
    getDrops() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.drops;
    }
    setDrops(drops) {
        this.drops = drops;
    }
}
