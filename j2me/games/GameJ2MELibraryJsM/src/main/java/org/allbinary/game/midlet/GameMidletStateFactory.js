/* Generated Code Do Not Modify */
import { Object } from '../../../../java/lang/Object.js';
//not GWT import const GameState
import { GameStateFactory } from '../../../../org/allbinary/game/state/GameStateFactory.js';
//not GWT import const GameStateFactory
//not plain js import { LogUtil } 
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
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
        this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().CURRENT).append(" GameState: ").append(StringUtil.getInstance().toString(currentGameState)).toString(), this, "setCurrentGameState");
        this.currentGameState = currentGameState;
    }
}
GameMidletStateFactory.INSTANCE = new GameMidletStateFactory();
