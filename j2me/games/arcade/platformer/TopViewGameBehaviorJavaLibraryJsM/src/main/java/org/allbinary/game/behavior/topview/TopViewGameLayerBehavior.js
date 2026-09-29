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
import { GameLayerBehavior } from '../../../../../org/allbinary/game/layer/behavior/GameLayerBehavior.js';
//not GWT import - same folder const InitialJumpBehavior
export class TopViewGameLayerBehavior extends GameLayerBehavior {
    constructor(maxGravityActionIndex) {
        super();
        this.isJumpAction = true;
        this.isJumpOver = false;
        this.isFallingWithoutJumpAttempt = false;
        this.gravityActionIndex = 0;
        this.maxGravityActionIndex = maxGravityActionIndex;
    }
    gravity() {
        if (this.gravityActionIndex == 0) {
            this.gravityActionIndex++;
            this.isFallingWithoutJumpAttempt = true;
        }
    }
    land(velocityProperties) {
        velocityProperties.getVelocityYBasicDecimalP().setint(0);
        this.landReset();
    }
    landReset() {
        this.gravityActionIndex = 0;
        this.isFallingWithoutJumpAttempt = false;
        this.isJumpAction = true;
        this.isJumpOver = false;
    }
    up(velocityProperties, acceleration, jumpBehavior, accelerationMultiplier) {
        if (!this.isJumpOver) {
            if (this.gravityActionIndex < this.maxGravityActionIndex) {
                var acceleration2 = -acceleration.getForward() * accelerationMultiplier;
                ;
                velocityProperties.getVelocityYBasicDecimalP().addint(acceleration2);
                velocityProperties.limitXYToForwardAndReverseMaxVelocity();
                this.gravityActionIndex++;
            }
            else {
            }
        }
        else {
        }
        if (this.isJumpAction) {
            jumpBehavior.process();
            this.isJumpAction = false;
        }
    }
    inputFrames(velocityProperties) {
        if (this.gravityActionIndex > 0 && velocityProperties.getVelocityYBasicDecimalP().getUnscaled() > 0) {
            this.isJumpOver = true;
        }
    }
}
