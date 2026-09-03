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
//not GWT import const JsConstructor = globalThis.jsinterop.annotations.JsConstructor;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class VectorInfo extends Object {
    constructor(width, height, points, totalFrames) {
        super();
        this.width = width;
        this.height = height;
        this.points = points;
        this.totalFrames = totalFrames;
    }
    getWidth() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.width;
    }
    setWidth(width) {
        this.width = width;
    }
    getHeight() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.height;
    }
    setHeight(height) {
        this.height = height;
    }
    getPoints() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.points;
    }
    setPoints(points) {
        this.points = points;
    }
    getTotalFrames() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.totalFrames;
    }
    setTotalFrames(totalFrames) {
        this.totalFrames = totalFrames;
    }
}
