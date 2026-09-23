/* Generated Code Do Not Modify */
import { Object } from '../../../../../java/lang/Object.js';
import { CustomGPoint } from '../../../../../org/allbinary/graphics/CustomGPoint.js';
//not GWT import const CustomGPoint
//Current folder imports from return types, extended types, and scope (deduplicated)
export class AnalogLocationInput extends Object {
    constructor(playerId) {
        super();
        this.rz = 0;
        this.rightTrigger = 0;
        this.leftTrigger = 0;
        this.playerId = playerId;
        this.customGPoint = new CustomGPoint(0, 0, 0);
    }
    getPlayerId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.playerId;
    }
    getCustomGPoint() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.customGPoint;
    }
    getRz() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rz;
    }
    setRz(rz) {
        this.rz = rz;
    }
    getRightTrigger() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.rightTrigger;
    }
    setRightTrigger(rightTrigger) {
        this.rightTrigger = rightTrigger;
    }
    getLeftTrigger() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.leftTrigger;
    }
    setLeftTrigger(leftTrigger) {
        this.leftTrigger = leftTrigger;
    }
}
AnalogLocationInput.NULL_ANALOG_LOCATION_INPUT = new AnalogLocationInput(-1);
