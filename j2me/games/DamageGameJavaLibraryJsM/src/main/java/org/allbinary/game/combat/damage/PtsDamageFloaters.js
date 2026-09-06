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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
//not GWT import const BasicColor = globalThis.org.allbinary.graphics.color.BasicColor;
import { BasicColorArrayIndexer } from '../../../../../org/allbinary/graphics/color/BasicColorArrayIndexer.js';
//not GWT import const BasicColorArrayIndexer = globalThis.org.allbinary.graphics.color.BasicColorArrayIndexer;
import { BasicColorFactory } from '../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory = globalThis.org.allbinary.graphics.color.BasicColorFactory;
import { BasicColorSetUtil } from '../../../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
//not GWT import const AllBinaryLayer = globalThis.org.allbinary.layer.AllBinaryLayer;
import { CharArrayFactory } from '../../../../../org/allbinary/logic/java/character/CharArrayFactory.js';
//not GWT import const CharArrayFactory = globalThis.org.allbinary.logic.java.character.CharArrayFactory;
//not plain js import { PrimitiveLongUtil } 
const PrimitiveLongUtil = globalThis.org.allbinary.logic.math.PrimitiveLongUtil;
//not plain js import { CircularIndexUtil } 
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//not GWT import const ViewPositionBase = globalThis.org.allbinary.view.ViewPositionBase;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { DamageFloaters } from './DamageFloaters.js';
//not GWT import - same folder const DamageFloaters = globalThis.org.allbinary.game.combat.damage.DamageFloaters;
export class PtsDamageFloaters extends DamageFloaters {
    constructor(layerInterface) {
        super();
        this.basicSetColorUtil = BasicColorSetUtil.getInstance();
        this.lastDamage = new Array(5);
        this.lastDamageString = new Array(5).fill(null).map(() => new Array(0).fill(0));
        this.lastDamageStringSizeArray = new Array(5);
        this.circularIndexUtil = CircularIndexUtil.createInstance(5);
        this.myRandomFactory = MyRandomFactory.getInstance();
        this.primitiveLongUtil = PrimitiveLongUtil.createPowerOfTen(100000);
        this.layerInterface = layerInterface;
        var CHAR_ARRAY = CharArrayFactory.getInstance().getZeroCharArray();
        ;
        for (var index = this.lastDamageString.length - 1; index >= 0; index--) {
            this.lastDamageString[index] = CHAR_ARRAY;
        }
    }
    add(damage) {
        var index = this.circularIndexUtil.getIndex();
        ;
        this.lastDamage[index] = damage;
        this.lastDamageString[index] = this.primitiveLongUtil.getCharArray(this.lastDamage[index]);
        this.lastDamageStringSizeArray[index] = this.primitiveLongUtil.getCurrentTotalDigits();
        this.circularIndexUtil.next();
    }
    paint(graphics) {
        var viewPosition = this.layerInterface.getViewPosition();
        ;
        var x = viewPosition.getX();
        ;
        var y = viewPosition.getY();
        ;
        for (var index = this.lastDamage.length - 1; index >= 0; index--) {
            if (this.lastDamage[index] != 0) {
                var delta = 10 * (index + 2);
                ;
                this.basicSetColorUtil.setBasicColorP(graphics, PtsDamageFloaters.basicColorArrayIndexer.get());
                graphics.drawChars(this.lastDamageString[index], 0, this.lastDamageStringSizeArray[index], x - this.myRandomFactory.getNextInt(delta), y - delta, 0);
                PtsDamageFloaters.basicColorArrayIndexer.next();
            }
            this.lastDamage[index] = 0;
        }
    }
}
PtsDamageFloaters.basicColorArrayIndexer = new BasicColorArrayIndexer([
    BasicColorFactory.getInstance().WHITE, BasicColorFactory.getInstance().RED, BasicColorFactory.getInstance().YELLOW, BasicColorFactory.getInstance().BLUE
]);
