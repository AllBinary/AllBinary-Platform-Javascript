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
//not plain js import { Graphics } 
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import - same folder const TestInputInterface = globalThis.org.allbinary.game.input.TestInputInterface;
export class TestInputExample extends Object {
    constructor() {
        super(...arguments);
        this.testValue = 0;
    }
    up() {
    }
    down() {
    }
    left() {
        this.testValue++;
    }
    right() {
        this.testValue--;
    }
    strafeLeft() {
    }
    strafeRight() {
    }
    paint(graphics) {
    }
    paintThreed(graphics) {
    }
}
