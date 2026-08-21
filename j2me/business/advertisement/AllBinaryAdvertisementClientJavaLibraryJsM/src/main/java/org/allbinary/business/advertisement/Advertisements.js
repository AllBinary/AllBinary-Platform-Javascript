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
import { MyRandomFactory } from '../../../../org/allbinary/game/rand/MyRandomFactory.js';
import { LockedUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js';
import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
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
