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
import { Object } from '../../../../../../java/lang/Object.js';
import { BasicColorFactory } from '../../../../../../org/allbinary/graphics/color/BasicColorFactory.js';
import { MotionGestureToMotionGestureActionAssociation } from '../../../../../../org/allbinary/input/motion/gesture/MotionGestureToMotionGestureActionAssociation.js';
import { StringUtil } from '../../../../../../org/allbinary/logic/string/StringUtil.js';
import { BasicArrayListD } from '../../../../../../org/allbinary/util/BasicArrayListD.js';
//Current folder imports from return types, extended types, and scope (deduplicated)
export class MotionGestureConfiguration extends Object {
    constructor() {
        super();
        this.diagonalMotionGestureAllowed = true;
        this.diagonalTolerance = 7;
        this.minimumMotionGesture = 9;
        this.button = StringUtil.getInstance().EMPTY_STRING;
        this.color = BasicColorFactory.getInstance().BLUE;
        this.executingActions = true;
        this.mouseButtonMask = 0;
        this.activeCommands = new BasicArrayListD();
    }
    addMotionGestureAction(list, commandAction) {
        this.activeCommands.add(new MotionGestureToMotionGestureActionAssociation(list, commandAction));
    }
    clearMotionGestureAction() {
        this.activeCommands.clear();
    }
    getAssociateCommandActionsList() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.activeCommands;
    }
    isDiagonalMotionGestureAllowed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.diagonalMotionGestureAllowed;
    }
    isExecutingActionsAllowed() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.executingActions;
    }
    setExecutingActionsAllowed(executingActionAllowed) {
        this.executingActions = executingActionAllowed;
    }
    setDiagonalMotionGestureAllowed(diagonalMotionGestureAllowed) {
        this.diagonalMotionGestureAllowed = diagonalMotionGestureAllowed;
    }
    getDiagonalTolerance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.diagonalTolerance;
    }
    setDiagonalTolerance(diagonalTolerance) {
        this.diagonalTolerance = diagonalTolerance;
    }
    getMinimumMotionGesture() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.minimumMotionGesture;
    }
    setMinimumMotionGesture(minimumMotionGesture) {
        this.minimumMotionGesture = minimumMotionGesture;
    }
    getButton() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.button;
    }
    setButton(button) {
        this.button = button;
    }
    getColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.color;
    }
    setColor(color) {
        this.color = color;
    }
    getMouseButtonMask() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.mouseButtonMask;
    }
    setMouseButtonMask(mouseButtonMask) {
        this.mouseButtonMask = mouseButtonMask;
    }
}
