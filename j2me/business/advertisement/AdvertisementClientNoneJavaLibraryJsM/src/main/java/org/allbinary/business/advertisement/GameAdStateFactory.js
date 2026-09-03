/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const JsType = globalThis.jsinterop.annotations.JsType;
import { GameAdState } from '../../../../org/allbinary/game/GameAdState.js';
//not GWT import const GameAdStateFactoryInterface = globalThis.org.allbinary.business.advertisement.GameAdStateFactoryInterface;
import { AppNameLicensingAdConfiguration } from './AppNameLicensingAdConfiguration.js';
//not GWT import const GameAdStateBase = globalThis.org.allbinary.business.advertisement.GameAdStateBase;
export class GameAdStateFactory extends Object {
    constructor() {
        super(...arguments);
        this.gameAdStateArray = [
            new GameAdState(new AppNameLicensingAdConfiguration())
        ];
        this.gameAdState = this.gameAdStateArray[0];
    }
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameAdStateFactory.instance;
    }
    getCurrentInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameAdState;
    }
    //@Throws(Exception.constructor)
    getInstanceForApp(softwareInformation) {
        this.gameAdState = this.gameAdStateArray[0];
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gameAdStateArray[0];
    }
    isEnabled() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
}
GameAdStateFactory.instance = new GameAdStateFactory();
