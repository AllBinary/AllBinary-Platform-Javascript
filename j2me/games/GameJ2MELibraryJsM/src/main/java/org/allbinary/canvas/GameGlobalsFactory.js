/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2022 AllBinary
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
import { Object } from '../../../java/lang/Object.js';
import { Integer } from '../../../java/lang/Integer.js';
//not plain js import { GPoint } 
const GPoint = globalThis.org.allbinary.graphics.GPoint;
//not plain js import { PointFactory } 
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameGlobalsFactory extends Object {
    constructor() {
        super(...arguments);
        this.newCanvas = true;
        this.newDisplaybleTime = Integer.MIN_VALUE;
        this.point = PointFactory.getInstance().ZERO_ZERO;
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameGlobalsFactory.instance;
    }
}
GameGlobalsFactory.instance = new GameGlobalsFactory();
