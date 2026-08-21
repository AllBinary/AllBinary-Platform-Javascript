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
import { MyRandomFactory } from '../../../../org/allbinary/game/rand/MyRandomFactory.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
import { BasicGraphicsPipeline } from './BasicGraphicsPipeline.js';
export class RandomTranslation extends Object {
    //@Throws(Exception.constructor)
    static getInstance(vector, howMuch) {
        var myRandomFactory = MyRandomFactory.getInstance();
        ;
        var x = -myRandomFactory.getNextInt(howMuch);
        ;
        ;
        var y = myRandomFactory.getNextInt(howMuch);
        ;
        var graphicsPipe = new BasicGraphicsPipeline(vector);
        ;
        graphicsPipe.createMatrix();
        graphicsPipe.translate(x, y);
        //if statement needs to be on the same line and ternary does not work the same way.
        return graphicsPipe.getMatrix();
        ;
    }
}
