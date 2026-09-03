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
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
//not plain js import { MyRandomFactory } from '../../../../org/allbinary/game/rand/MyRandomFactory.js';
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
import { LockedUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js';
//not GWT import const LockedUtil = globalThis.org.allbinary.logic.system.security.licensing.LockedUtil;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not GWT import const AdvertisementProcessorInterface = globalThis.org.allbinary.business.advertisement.AdvertisementProcessorInterface;
export class Advertisements extends Object {
    constructor() {
        super(...arguments);
        this.bannerList = new BasicArrayListD();
        this.pageList = new BasicArrayListD();
        this.myRandomFactory = MyRandomFactory.getInstance();
    }
    addPage(advertisementProcessorInterface) {
        if (!this.pageList.contains(advertisementProcessorInterface)) {
            this.pageList.add(advertisementProcessorInterface);
        }
    }
    startRandomPage() {
        var size = this.pageList.size();
        ;
        if (size > 0) {
            var random = this.myRandomFactory.getAbsoluteNextInt(size);
            ;
            var advertisementProcessorInterface = this.pageList.objectArray[random];
            ;
            advertisementProcessorInterface.start();
        }
    }
    processRandomPage() {
        if (LockedUtil.getInstance().isLocked()) {
            var size = this.pageList.size();
            ;
            if (size > 0) {
                var random = this.myRandomFactory.getAbsoluteNextInt(size);
                ;
                var advertisementProcessorInterface = this.pageList.objectArray[random];
                ;
                advertisementProcessorInterface.process();
            }
        }
    }
    stopAllPage() {
        for (var index = this.pageList.size(); --index >= 0;) {
            var advertisementProcessorInterface = this.pageList.objectArray[index];
            ;
            advertisementProcessorInterface.stop();
        }
    }
    addBanner(advertisementProcessorInterface) {
        if (!this.bannerList.contains(advertisementProcessorInterface)) {
            this.bannerList.add(advertisementProcessorInterface);
        }
    }
    startAll() {
        for (var index = this.bannerList.size(); --index >= 0;) {
            var advertisementProcessorInterface = this.bannerList.objectArray[index];
            ;
            advertisementProcessorInterface.start();
        }
    }
    stopAllBanner() {
        for (var index = this.bannerList.size(); --index >= 0;) {
            var advertisementProcessorInterface = this.bannerList.objectArray[index];
            ;
            advertisementProcessorInterface.stop();
        }
    }
    getBanner(index) {
        var advertisementProcessorInterface = this.bannerList.objectArray[index];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return advertisementProcessorInterface;
    }
    stopAll() {
        this.stopAllBanner();
        this.stopAllPage();
    }
}
