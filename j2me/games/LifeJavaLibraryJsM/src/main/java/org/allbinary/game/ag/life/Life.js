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
import { Exception } from '../../../../../java/lang/Exception.js';
import { RuntimeException } from '../../../../../java/lang/RuntimeException.js';
//not GWT import - same folder const LifeInterface
export class Life extends Object {
    static createLife() {
        try {
            //if statement needs to be on the same line and ternary does not work the same way.
            return new Life(0, 0);
            //: 
        }
        catch (e) {
            throw new RuntimeException();
        }
    }
    constructor(lives, maxlives) {
        super();
        this.maxlives = maxlives;
        if (lives > this.maxlives) {
            throw new Exception("To Many Lives");
        }
        this.lives = lives;
        this.startLives = lives;
    }
    get() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.lives;
    }
    set(lives) {
        this.lives = lives;
    }
    reset() {
        this.lives = this.startLives;
    }
    add(lives) {
        if (!this.reachedLimit()) {
            if (this.lives + lives <= this.getMaxlives()) {
                this.lives = (this.lives + lives);
            }
            else {
                this.lives = this.getMaxlives();
            }
        }
    }
    isAlive() {
        if (this.lives <= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
    }
    getMaxlives() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.maxlives;
    }
    reachedLimit() {
        if (this.lives > this.maxlives || this.lives < 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    deaths(lives) {
        if (!this.reachedLimit()) {
            if (this.lives - lives >= 0) {
                this.lives = (this.lives - lives);
            }
            else {
                this.lives = 0;
            }
        }
    }
    getStartLives() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.startLives;
    }
    setStartLives(startLives) {
        this.startLives = startLives;
    }
}
Life.NO_LIFE = Life.createLife();
