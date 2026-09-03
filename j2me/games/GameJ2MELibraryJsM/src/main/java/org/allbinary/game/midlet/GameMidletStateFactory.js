/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const GameState = globalThis.org.allbinary.game.state.GameState;
import { GameStateFactory } from '../../../../org/allbinary/game/state/GameStateFactory.js';
//not GWT import const GameStateFactory = globalThis.org.allbinary.game.state.GameStateFactory;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not GWT import const JsProperty = globalThis.jsinterop.annotations.JsProperty;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class GameMidletStateFactory extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return GameMidletStateFactory.INSTANCE;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.currentGameState = GameStateFactory.getInstance().NO_GAME_STATE;
    }
    getCurrentGameState() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.currentGameState;
    }
    setCurrentGameState(currentGameState) {
        this.logUtil.putF(new StringMaker().append("Current GameState: ").append(StringUtil.getInstance().toString(currentGameState)).toString(), this, "setCurrentGameState");
        this.currentGameState = currentGameState;
    }
}
GameMidletStateFactory.INSTANCE = new GameMidletStateFactory();
