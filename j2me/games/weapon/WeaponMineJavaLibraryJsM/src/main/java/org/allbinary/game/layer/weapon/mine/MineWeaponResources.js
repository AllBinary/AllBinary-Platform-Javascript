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
import { BasicGameResources } from '../../../../../../org/allbinary/game/layer/resources/BasicGameResources.js';
import { NullUtil } from '../../../../../../org/allbinary/logic/NullUtil.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MineWeaponResources extends BasicGameResources {
    static getInstance() {
        if (MineWeaponResources.instance == NullUtil.getInstance().NULL_OBJECT) {
            MineWeaponResources.instance = new MineWeaponResources();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return MineWeaponResources.instance;
    }
    constructor() {
        super();
        this.DROP_TEXT_RESOURCE = "/mine_drop_text_20_by_20.png";
        this.DROP_RESOURCE = "/mine_drop_20_by_20.png";
        this.DROP_ICON_RESOURCE = "/mine_drop_icon_20_by_20.png";
        var ROOT = "/mine";
        ;
        var SMALL = "_20_by_20.png";
        ;
        var MEDIUM = SMALL;
        ;
        var SIZE_FOUR = SMALL;
        ;
        var SIZE_FIVE = SMALL;
        ;
        var SIZE_SIX = SMALL;
        ;
        var SIZE = [
            SMALL, MEDIUM, SIZE_FOUR, SIZE_FIVE, SIZE_SIX
        ];
        ;
        super.init(ROOT, SIZE);
    }
}
MineWeaponResources.instance = NullUtil.getInstance().NULL_OBJECT;
