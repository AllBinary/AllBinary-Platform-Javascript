/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2002 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
//not GWT import const NumberStringHud = globalThis.org.allbinary.game.ag.layer.hud.basic.NumberStringHud;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Capital } from './Capital.js';
//not GWT import - same folder const Capital = globalThis.org.allbinary.game.layer.capital.Capital;
export class HudCapital extends Capital {
    constructor(moneyGraphic) {
        super();
        this.capitalGraphic = moneyGraphic;
    }
    removeMoney(points) {
        super.removeMoney(points);
        this.capitalGraphic.reduce(points);
    }
    getTotalMoney() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.capitalGraphic.get();
        ;
    }
    addMoney(points) {
        super.addMoney(points);
        this.capitalGraphic.add(points);
    }
}
