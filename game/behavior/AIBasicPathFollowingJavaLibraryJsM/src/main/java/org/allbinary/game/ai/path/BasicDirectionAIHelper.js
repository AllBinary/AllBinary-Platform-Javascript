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
import { Math } from '../../../../../java/lang/Math.js';
//not plain js import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
//not GWT import const Direction = globalThis.org.allbinary.direction.Direction;
import { DirectionFactory } from '../../../../../org/allbinary/direction/DirectionFactory.js';
//not GWT import const DirectionFactory = globalThis.org.allbinary.direction.DirectionFactory;
//not plain js import { AngleIncrementInfo } from '../../../../../org/allbinary/math/AngleIncrementInfo.js';
const AngleIncrementInfo = globalThis.org.allbinary.math.AngleIncrementInfo;
//not plain js import { AngleInfo } from '../../../../../org/allbinary/math/AngleInfo.js';
const AngleInfo = globalThis.org.allbinary.math.AngleInfo;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class BasicDirectionAIHelper extends Object {
    constructor(name, angleInfo) {
        super();
        this.name = name;
        this.angleInfo = angleInfo;
    }
    turnAI(frame) {
        var keyDirection = -1;
        ;
        var directionAngle = this.angleInfo.getAngleIncrementInfo().getFrameAngle(frame);
        ;
        var angle = this.angleInfo.getAngle();
        ;
        var degrees = Math.abs(directionAngle - angle);
        ;
        if (degrees < 180) {
            if (angle > directionAngle) {
                keyDirection = Canvas.LEFT;
            }
            else if (angle < directionAngle) {
                keyDirection = Canvas.RIGHT;
            }
        }
        else {
            if (angle > directionAngle) {
                keyDirection = Canvas.RIGHT;
            }
            else if (angle < directionAngle) {
                keyDirection = Canvas.LEFT;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return keyDirection;
    }
    getAIKeyPressed(frame) {
        var angle = this.angleInfo.getAngleIncrementInfo().getFrameAngle(frame.intValue());
        ;
        if (this.angleInfo.getAngle() != angle) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.turnAI(frame.intValue());
            ;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return Canvas.UP;
        }
    }
    getAIKeyPressedFromDirection(geographicMapDirectionData) {
        var keyDirection = -1;
        ;
        var angleIncrementInfo = this.angleInfo.getAngleIncrementInfo();
        ;
        var directionFactory = DirectionFactory.getInstance();
        ;
        if (geographicMapDirectionData == directionFactory.DOWN) {
            keyDirection = this.getAIKeyPressed(angleIncrementInfo.DOWN_FRAME);
        }
        else if (geographicMapDirectionData == directionFactory.UP) {
            keyDirection = this.getAIKeyPressed(angleIncrementInfo.UP_FRAME);
        }
        else if (geographicMapDirectionData == directionFactory.LEFT) {
            keyDirection = this.getAIKeyPressed(angleIncrementInfo.LEFT_FRAME);
        }
        else if (geographicMapDirectionData == directionFactory.RIGHT) {
            keyDirection = this.getAIKeyPressed(angleIncrementInfo.RIGHT_FRAME);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return keyDirection;
    }
    getAngleInfoP() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.angleInfo;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
}
