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
import { Object } from '../../../java/lang/Object.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { Rectangle } from './Rectangle.js';
//not GWT import const Rectangle = globalThis.org.allbinary.graphics.Rectangle;
//not plain js import { PointFactory } from './PointFactory.js';
const PointFactory = globalThis.org.allbinary.graphics.PointFactory;
export class RectangleFactory extends Object {
}
RectangleFactory.SINGLETON = new Rectangle(PointFactory.getInstance().ZERO_ZERO, 0, 0);
