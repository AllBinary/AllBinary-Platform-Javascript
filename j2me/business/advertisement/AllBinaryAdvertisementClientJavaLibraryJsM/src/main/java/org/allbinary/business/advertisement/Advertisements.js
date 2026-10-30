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
//not plain js import { MyRandomFactory } 
const MyRandomFactory = globalThis.org.allbinary.game.rand.MyRandomFactory;
import { LockedUtil } from '../../../../org/allbinary/logic/system/security/licensing/LockedUtil.js';
//not GWT import const LockedUtil
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//sameFolderImports - not GWT import - same folder const AdvertisementProcessorInterface
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
        let size = this.pageList.size();
        ;
        if (size > 0) {
            let random = this.myRandomFactory.getAbsoluteNextInt(size);
            ;
            let advertisementProcessorInterface = this.pageList.objectArray[random];
            ;
            advertisementProcessorInterface.start();
        }
    }
    processRandomPage() {
        if (LockedUtil.getInstance().isLocked()) {
            let size = this.pageList.size();
            ;
            if (size > 0) {
                let random = this.myRandomFactory.getAbsoluteNextInt(size);
                ;
                let advertisementProcessorInterface = this.pageList.objectArray[random];
                ;
                advertisementProcessorInterface.process();
            }
        }
    }
    stopAllPage() {
        for (let index = this.pageList.size(); --index >= 0;) {
            let advertisementProcessorInterface = this.pageList.objectArray[index];
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
        for (let index = this.bannerList.size(); --index >= 0;) {
            let advertisementProcessorInterface = this.bannerList.objectArray[index];
            ;
            advertisementProcessorInterface.start();
        }
    }
    stopAllBanner() {
        for (let index = this.bannerList.size(); --index >= 0;) {
            let advertisementProcessorInterface = this.bannerList.objectArray[index];
            ;
            advertisementProcessorInterface.stop();
        }
    }
    getBanner(index) {
        let advertisementProcessorInterface = this.bannerList.objectArray[index];
        ;
        //if statement needs to be on the same line and ternary does not work the same way.
        return advertisementProcessorInterface;
    }
    stopAll() {
        this.stopAllBanner();
        this.stopAllPage();
    }
}
