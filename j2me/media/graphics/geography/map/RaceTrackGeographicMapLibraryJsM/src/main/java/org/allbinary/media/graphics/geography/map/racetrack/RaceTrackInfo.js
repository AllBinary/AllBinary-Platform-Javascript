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
import { Object } from '../../../../../../../java/lang/Object.js';
//not GWT import - same folder const RaceTrackFrictionProperties = globalThis.org.allbinary.media.graphics.geography.map.racetrack.RaceTrackFrictionProperties;
export class RaceTrackInfo extends Object {
    constructor(id, name, raceTrackFrictionProperties, foregroundBasicColor, backgroundBasicColor, qualifyTime, worstContinuePosition, totalLaps) {
        super();
        this.id = id;
        this.name = name;
        this.raceTrackFrictionProperties = raceTrackFrictionProperties;
        this.backgroundBasicColor = backgroundBasicColor;
        this.foregroundBasicColor = foregroundBasicColor;
        this.qualifyTime = qualifyTime;
        this.worstContinuePosition = worstContinuePosition;
        this.totalLaps = totalLaps;
    }
    getId() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getQualifyTime() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.qualifyTime;
    }
    setQualifyTime(qualifyTime) {
        this.qualifyTime = qualifyTime;
    }
    getWorstContinuePosition() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.worstContinuePosition;
    }
    setWorstContinuePosition(worstContinuePosition) {
        this.worstContinuePosition = worstContinuePosition;
    }
    getTotalLaps() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.totalLaps;
    }
    setTotalLaps(totalLaps) {
        this.totalLaps = totalLaps;
    }
    getForegroundBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.foregroundBasicColor;
    }
    setForegroundBasicColor(foregroundBasicColor) {
        this.foregroundBasicColor = foregroundBasicColor;
    }
    getBackgroundBasicColor() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.backgroundBasicColor;
    }
    setBackgroundBasicColor(backgroundBasicColor) {
        this.backgroundBasicColor = backgroundBasicColor;
    }
    getRaceTrackFrictionProperties() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.raceTrackFrictionProperties;
    }
    setRaceTrackFrictionProperties(raceTrackFrictionProperties) {
        this.raceTrackFrictionProperties = raceTrackFrictionProperties;
    }
}
