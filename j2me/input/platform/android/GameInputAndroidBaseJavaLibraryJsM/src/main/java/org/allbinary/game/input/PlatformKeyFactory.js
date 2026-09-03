/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not plain js import { NullUtil } from '../../../../org/allbinary/logic/NullUtil.js';
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { ActivityFractureControllerUtilFactory } from './ActivityFractureControllerUtilFactory.js';
//not GWT import const AndroidKeyFactory = globalThis.org.allbinary.game.input.AndroidKeyFactory;
import { AndroidGameKey } from './AndroidGameKey.js';
//not GWT import const Input = globalThis.org.allbinary.game.input.Input;
export class PlatformKeyFactory extends Object {
    constructor() {
        super(...arguments);
        this.androidKeyFactory = ActivityFractureControllerUtilFactory.getInstance();
    }
    static getInstance() {
        if (PlatformKeyFactory.instance == NullUtil.getInstance().NULL_OBJECT) {
            PlatformKeyFactory.instance = new PlatformKeyFactory();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return PlatformKeyFactory.instance;
    }
    getString(keyCode) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return AndroidGameKey.getString(keyCode);
        ;
    }
    isSubmission(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.androidKeyFactory.isSubmission(input);
        ;
    }
    isDelete(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.androidKeyFactory.isDelete(input);
        ;
    }
    isBackSpace(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.androidKeyFactory.isBackSpace(input);
        ;
    }
    isLeft(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.androidKeyFactory.isLeft(input);
        ;
    }
    isRight(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.androidKeyFactory.isRight(input);
        ;
    }
    isUp(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.androidKeyFactory.isUp(input);
        ;
    }
    isDown(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.androidKeyFactory.isDown(input);
        ;
    }
    isEnter(input) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.androidKeyFactory.isEnter(input);
        ;
    }
}
PlatformKeyFactory.instance = NullUtil.getInstance().NULL_OBJECT;
