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
import { Integer } from '../../../../../java/lang/Integer.js';
//not plain js import { Canvas } from '../../../../../javax/microedition/lcdui/Canvas.js';
const Canvas = globalThis.javax.microedition.lcdui.Canvas;
import { ArtificialIntelligence } from '../../../../../org/allbinary/ai/ArtificialIntelligence.js';
//not GWT import const RotationAnimationInterfaceCompositeInterface = globalThis.org.allbinary.animation.RotationAnimationInterfaceCompositeInterface;
import { BasicAI } from '../../../../../org/allbinary/game/ai/BasicAI.js';
//not GWT import const VelocityInterfaceCompositeInterface = globalThis.org.allbinary.game.physics.velocity.VelocityInterfaceCompositeInterface;
import { DisplayInfoSingleton } from '../../../../../org/allbinary/graphics/displayable/DisplayInfoSingleton.js';
//not GWT import const AllBinaryLayerManager = globalThis.org.allbinary.layer.AllBinaryLayerManager;
//not plain js import { AngleIncrementInfo } from '../../../../../org/allbinary/math/AngleIncrementInfo.js';
const AngleIncrementInfo = globalThis.org.allbinary.math.AngleIncrementInfo;
//not plain js import { CircularIndexUtil } from '../../../../../org/allbinary/util/CircularIndexUtil.js';
const CircularIndexUtil = globalThis.org.allbinary.util.CircularIndexUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class HorizontaRotationManeuverAI extends BasicAI {
    constructor(ownerLayerInterface, gameInput) {
        super(ownerLayerInterface, gameInput);
        this.circularIndexUtil = CircularIndexUtil.createInstanceAt(10, Integer.MAX_VALUE);
        this.currentSpeedDivisor = 5;
        //For kotlin this is before the body of the constructor.
        var rotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface();
        ;
        this.rotationAnimationInterface = rotationAnimationInterfaceCompositeInterface.getRotationAnimationInterface();
        var velocityInterfaceCompositeInterface = this.getOwnerLayerInterface();
        ;
        this.baseVelocityInterface = velocityInterfaceCompositeInterface.getVelocityProperties();
        this.velocityInterface = this.baseVelocityInterface;
        var rotationAnimationInterface = this.rotationAnimationInterface;
        ;
        var angleIncrementInfo = rotationAnimationInterface.getAngleInfoP().getAngleIncrementInfo();
        ;
        rotationAnimationInterfaceCompositeInterface.setFrame(angleIncrementInfo.RIGHT_FRAME.intValue());
    }
    transition() {
        var rotationAnimationInterface = this.rotationAnimationInterface;
        ;
        var angleIncrementInfo = rotationAnimationInterface.getAngleInfoP().getAngleIncrementInfo();
        ;
        var rotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface();
        ;
        rotationAnimationInterfaceCompositeInterface.setFrame(angleIncrementInfo.RIGHT_FRAME.intValue());
        var allbinaryLayer = this.getOwnerLayerInterface();
        ;
        allbinaryLayer.setPosition(allbinaryLayer.getXP(), 1, allbinaryLayer.getZP());
    }
    //@Throws(Exception.constructor)
    processAI(allBinaryLayerManager) {
        var rotationAnimationInterface = this.rotationAnimationInterface;
        ;
        var angleIncrementInfo = rotationAnimationInterface.getAngleInfoP().getAngleIncrementInfo();
        ;
        var frame = this.rotationAnimationInterface.getFrame();
        ;
        var ownerLayerInterface = this.getOwnerLayerInterface();
        ;
        if (ownerLayerInterface.getXP() - ownerLayerInterface.getWidth() <= 0 && frame == angleIncrementInfo.LEFT_FRAME.intValue()) {
            this.reverse();
            this.drop();
        }
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        if (ownerLayerInterface.getX2() + ownerLayerInterface.getWidth() > displayInfo.getLastWidth() && frame == angleIncrementInfo.RIGHT_FRAME.intValue()) {
            this.reverse();
            this.accelerate();
            this.drop();
        }
        var index = this.circularIndexUtil.getIndex();
        ;
        if (index % this.currentSpeedDivisor == 0 && index % 2 == 0) {
            super.processKeyAI(Canvas.UP);
            this.velocityInterface.limitMaxXYVelocity(this.velocityInterface.getMaxForwardVelocity() / this.currentSpeedDivisor);
        }
        this.circularIndexUtil.next();
        if (frame == angleIncrementInfo.LEFT_FRAME.intValue()) {
            super.processKeyAI(Canvas.KEY_NUM0);
        }
        else if (frame == angleIncrementInfo.RIGHT_FRAME.intValue()) {
            super.processKeyAI(Canvas.KEY_POUND);
        }
    }
    reverse() {
        var rotationAnimationInterface = this.rotationAnimationInterface;
        ;
        var angleIncrementInfo = rotationAnimationInterface.getAngleInfoP().getAngleIncrementInfo();
        ;
        var frame = this.rotationAnimationInterface.getFrame();
        ;
        if (frame == angleIncrementInfo.LEFT_FRAME.intValue()) {
            var rotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface();
            ;
            rotationAnimationInterfaceCompositeInterface.setFrame(angleIncrementInfo.RIGHT_FRAME.intValue());
            this.baseVelocityInterface.zero();
        }
        else if (frame == angleIncrementInfo.RIGHT_FRAME.intValue()) {
            var rotationAnimationInterfaceCompositeInterface = this.getOwnerLayerInterface();
            ;
            rotationAnimationInterfaceCompositeInterface.setFrame(angleIncrementInfo.LEFT_FRAME.intValue());
            this.baseVelocityInterface.zero();
        }
    }
    accelerate() {
        if (this.currentSpeedDivisor > 1) {
            this.currentSpeedDivisor--;
        }
    }
    drop() {
        var displayInfo = DisplayInfoSingleton.getInstance();
        ;
        var ownerLayerInterface = this.getOwnerLayerInterface();
        ;
        var y = ownerLayerInterface.getYP();
        ;
        if (ownerLayerInterface.getY2() + ownerLayerInterface.getHeight() > displayInfo.getLastHeight()) {
            y = 0;
        }
        else {
            y += ownerLayerInterface.getHeight() + 1;
        }
        ownerLayerInterface.setPosition(ownerLayerInterface.getXP(), y, ownerLayerInterface.getZP());
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return ArtificialIntelligence.AI_ID;
    }
}
