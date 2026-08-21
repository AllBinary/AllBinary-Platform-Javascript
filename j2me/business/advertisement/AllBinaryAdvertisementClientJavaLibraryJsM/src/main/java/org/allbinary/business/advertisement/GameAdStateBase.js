/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2025 AllBinary
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
import { ForcedLogUtil } from '../../../../org/allbinary/logic/communication/log/ForcedLogUtil.js';
import { EventStrings } from '../../../../org/allbinary/logic/util/event/EventStrings.js';
import { Advertisements } from './Advertisements.js';
export class GameAdStateBase extends Object {
    constructor(adConfiguration) {
        super();
        this.advertisementsP = new Advertisements();
        this.okayToShowAdsP = false;
        this.adConfigurationP = adConfiguration;
    }
    initViewArray(viewArray) {
    }
    onStart(anyType = {}) {
        this.init();
    }
    init() {
    }
    isShowingAtLocation(location) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    isShowingAt() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    show() {
    }
    hide() {
    }
    onEvent(eventObject) {
        ForcedLogUtil.log(EventStrings.getInstance().PERFORMANCE_MESSAGE, this);
    }
    processAdState(gameState, gameType) {
    }
    processPageAdState() {
    }
    //@Throws(Exception.constructor)
    playingAdState() {
    }
    //@Throws(Exception.constructor)
    playingAdStateWH(width, height) {
    }
    //@Throws(Exception.constructor)
    notPlayingAdState() {
    }
    setGameIsReady(gameIsReady) {
    }
    isGameIsReady() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    getAdvertisements() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.advertisementsP;
    }
    getAdConfiguration() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.adConfigurationP;
    }
    isOkayToShowPageAd() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    setOkayToShowAds(okayToShowAds) {
        this.okayToShowAdsP = okayToShowAds;
    }
    isOkayToShowAds() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.okayToShowAdsP;
    }
    isEnabled() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
