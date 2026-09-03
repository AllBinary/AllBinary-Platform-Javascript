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
import { AnalogLocationInputFactory } from '../../../../org/allbinary/game/input/analog/AnalogLocationInputFactory.js';
//not GWT import const AnalogLocationInputFactory = globalThis.org.allbinary.game.input.analog.AnalogLocationInputFactory;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class LocalPlayerInputIdFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return LocalPlayerInputIdFactory.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.MAX_NUMBER_OF_PLAYERS = 6;
        this.MAX_FAST_DEVICEID = 65;
        this.deviceIdToplayerId = new Array(this.MAX_FAST_DEVICEID);
        this.playerIdToDeviceId = new Array(this.MAX_NUMBER_OF_PLAYERS);
        this.playersInPlay = new Array(this.MAX_NUMBER_OF_PLAYERS);
        this.totalDevicesMapped = 0;
        for (var index = this.deviceIdToplayerId.length - 1; index >= 0; index--) {
            this.deviceIdToplayerId[index] = -1;
        }
    }
    getDeviceId(playerInputId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.playerIdToDeviceId[playerInputId];
    }
    getPlayerForDevice(deviceId) {
        var index = 0;
        ;
        if (deviceId < this.MAX_FAST_DEVICEID) {
            var playerInputId = this.deviceIdToplayerId[deviceId];
            ;
            if (playerInputId != -1) {
                //if statement needs to be on the same line and ternary does not work the same way.
                return playerInputId;
            }
        }
        else {
            for (index = this.totalDevicesMapped - 1; index >= 0; index--) {
                if (this.playerIdToDeviceId[index] == deviceId) {
                    //if statement needs to be on the same line and ternary does not work the same way.
                    return index;
                }
            }
        }
        index = this.totalDevicesMapped;
        if (deviceId < this.MAX_FAST_DEVICEID) {
            this.deviceIdToplayerId[deviceId] = index;
        }
        else {
            this.logUtil.putF(new StringMaker().append("Added DeviceId: ").appendint(deviceId).append(" beyond fast Id list").toString(), this, "getPlayerForDevice");
        }
        this.playerIdToDeviceId[index] = deviceId;
        AnalogLocationInputFactory.getInstance().addPlayer(this.totalDevicesMapped);
        this.totalDevicesMapped++;
        this.logUtil.putF(new StringMaker().append("Added DeviceId: ").appendint(deviceId).append(" at: ").appendint(index).append(" Total: ").appendint(this.totalDevicesMapped).toString(), this, "getPlayerForDevice");
        //if statement needs to be on the same line and ternary does not work the same way.
        return index;
    }
    getTotalDevicesInPlay() {
        var total = 0;
        ;
        for (var index = this.totalDevicesMapped - 1; index >= 0; index--) {
            if (this.playersInPlay[index] == true) {
                total++;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return total;
    }
    isPlayerInPlay(playerInputId) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.playersInPlay[playerInputId];
    }
    setPlayerInPlay(playerInputId) {
        this.logUtil.putF(new StringMaker().append("Setting PlayerInPlay with playerInputId: ").appendint(playerInputId).toString(), this, "setPlayerInPlay");
        this.playersInPlay[playerInputId] = true;
    }
    setPlayerOutOfPlay(playerInputId) {
        this.logUtil.putF(new StringMaker().append("Setting PlayerOutOfPlay with playerInputId: ").appendint(playerInputId).toString(), this, "setPlayerOutOfPlay");
        this.playersInPlay[playerInputId] = false;
    }
    getPlayersInPlay() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.playersInPlay;
    }
}
LocalPlayerInputIdFactory.instance = new LocalPlayerInputIdFactory();
