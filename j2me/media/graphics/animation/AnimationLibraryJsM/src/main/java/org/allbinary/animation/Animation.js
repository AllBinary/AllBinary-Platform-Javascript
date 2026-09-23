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
//not GWT import const BasicColor
import { BasicColorFactory } from '../../../org/allbinary/graphics/color/BasicColorFactory.js';
//not GWT import const BasicColorFactory
import { BasicColorSetUtil } from '../../../org/allbinary/graphics/color/BasicColorSetUtil.js';
//not GWT import - same folder const AnimationInterface
export class Animation extends Object {
    constructor() {
        super();
        this.basicSetColorUtil = BasicColorSetUtil.getInstance();
        this.basicColor = BasicColorFactory.getInstance().WHITE;
        this.colorP = 0;
        this.changeBasicColorP = BasicColorFactory.getInstance().NULL_COLOR;
        this.changeColorP = 0;
        this.alphaP = 0;
    }
    setAlpha(alpha) {
        this.alphaP = alpha;
    }
    //@Throws(Exception.constructor)
    nextFrame() {
    }
    paintXY(graphics, x, y) {
        this.basicSetColorUtil.setBasicColorP3(graphics, this.getBasicColorP(), this.getColor());
    }
    paintThreedXYZ(graphics, x, y, z) {
    }
    isThreed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getBasicColorP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.basicColor;
    }
    setBasicColorP(basicColor) {
        this.basicColor = basicColor;
        this.colorP = this.basicColor.intValue();
    }
    setBackgroundBasicColorP(basicColor) {
    }
    getChangeBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.changeBasicColorP;
    }
    changeBasicColor(basicColor) {
        this.changeBasicColorP = basicColor;
        this.changeColorP = this.changeBasicColorP.intValue();
    }
    getChangeColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.changeColorP;
    }
    getColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.colorP;
    }
    setScale(scaleX, scaleY) {
    }
    setMaxScale(maxScaleX, maxScaleY) {
    }
    //@Throws(Exception.constructor)
    set(gl) {
    }
    setDx(dx) {
    }
    getDx() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
    setDy(dy) {
    }
    getDy() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return 0;
    }
}
