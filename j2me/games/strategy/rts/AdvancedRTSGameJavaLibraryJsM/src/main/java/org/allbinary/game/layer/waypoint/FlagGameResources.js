/*
        *
        *  AllBinary Open License Version 1
        *  Copyright (c) 2006 AllBinary
        *
        *  By agreeing to this license you and any business entity you represent are
        *  legally bound to the AllBinary Open License Version 1 legal agreement.
        *
        *  You may obtain the AllBinary Open License Version 1 legal agreement from
        *  AllBinary or the root directory of AllBinary's AllBinary Platform repository.
        *
        *  Created By: Travis Berthelot
*/
import { BasicGameResources } from '../../../../../org/allbinary/game/layer/resources/BasicGameResources.js';
//not GWT import const BasicGameResources = globalThis.org.allbinary.game.layer.resources.BasicGameResources;
import { GameGraphicsResourceUtil } from '../../../../../org/allbinary/game/layer/resources/GameGraphicsResourceUtil.js';
//not GWT import const GameGraphicsResourceUtil = globalThis.org.allbinary.game.layer.resources.GameGraphicsResourceUtil;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
export class FlagGameResources extends BasicGameResources {
    constructor() {
        super();
        this.NAME = StringUtil.getInstance().EMPTY_STRING;
        this.RESOURCE_ICON_ANIMATION = StringUtil.getInstance().EMPTY_STRING;
        this.RESOURCE_ICON_BUILD = StringUtil.getInstance().EMPTY_STRING;
        this.RESOURCE_ICON = StringUtil.getInstance().EMPTY_STRING;
        this.ICON_SIZE = "_64_by_64.png";
    }
    //@Throws(Exception.constructor)
    append(ROOT, sizeString) {
        super.append(ROOT, sizeString);
        var string = GameGraphicsResourceUtil.getInstance().getName();
        ;
        BasicGameResources.stringBuffer.delete(0, BasicGameResources.stringBuffer.length());
        BasicGameResources.stringBuffer.append(ROOT);
        BasicGameResources.stringBuffer.append(FlagGameResources.DESTROY);
        BasicGameResources.stringBuffer.append(string);
        BasicGameResources.stringBuffer.append(sizeString);
        this.RESOURCE_DESTROY = BasicGameResources.stringBuffer.toString();
        BasicGameResources.stringBuffer.delete(0, BasicGameResources.stringBuffer.length());
        BasicGameResources.stringBuffer.append(FlagGameResources.ICON);
        BasicGameResources.stringBuffer.append(ROOT);
        this.RESOURCE_ICON_ANIMATION = BasicGameResources.stringBuffer.toString();
        BasicGameResources.stringBuffer.delete(0, BasicGameResources.stringBuffer.length());
        BasicGameResources.stringBuffer.append(ROOT);
        BasicGameResources.stringBuffer.append(FlagGameResources.ICON);
        BasicGameResources.stringBuffer.append(string);
        BasicGameResources.stringBuffer.append(this.ICON_SIZE);
        this.RESOURCE_ICON = BasicGameResources.stringBuffer.toString();
        BasicGameResources.stringBuffer.delete(0, BasicGameResources.stringBuffer.length());
        BasicGameResources.stringBuffer.append(ROOT);
        BasicGameResources.stringBuffer.append(FlagGameResources.ICON_BUILD);
        BasicGameResources.stringBuffer.append(string);
        BasicGameResources.stringBuffer.append(this.ICON_SIZE);
        this.RESOURCE_ICON_BUILD = BasicGameResources.stringBuffer.toString();
    }
}
FlagGameResources.ICON = "_icon";
FlagGameResources.BUILD = "_build";
FlagGameResources.DESTROY = "_destroy";
FlagGameResources.ICON_BUILD = "_icon" + FlagGameResources.BUILD;
