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
import { Exception } from '../../../../../java/lang/Exception.js';
//not GWT import const GameKey
import { GameKeyFactory } from '../../../../../org/allbinary/game/input/GameKeyFactory.js';
//not GWT import const Input
import { InputFactory } from '../../../../../org/allbinary/game/input/InputFactory.js';
//not GWT import const InputFactory
//not plain js import { NullUtil } 
const NullUtil = globalThis.org.allbinary.logic.NullUtil;
//not plain js import { PreLogUtil } 
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
//not plain js import { StringMaker } 
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } 
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
//not plain js import { CommonLabels } 
const CommonLabels = globalThis.org.allbinary.string.CommonLabels;
//not plain js import { CommonSeps } 
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { BasicArrayList } 
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } 
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { InputMapping } from './InputMapping.js';
//not GWT import - same folder const InputMapping
export class InputToGameKeyMapping extends InputMapping {
    static getNullInstance() {
        if (InputToGameKeyMapping.instance == NullUtil.getInstance().NULL_OBJECT) {
            InputToGameKeyMapping.instance = new InputToGameKeyMapping();
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return InputToGameKeyMapping.instance;
    }
    constructor() {
        super();
        this.gameKeyFactory = GameKeyFactory.getInstance();
        this.mappedGameKeys = [
            this.gameKeyFactory.UP, this.gameKeyFactory.DOWN, this.gameKeyFactory.LEFT, this.gameKeyFactory.RIGHT
        ];
        this.platformToGameKeyMapping = new Array(InputFactory.getInstance().MAX);
        this.negativePlatformToGameKeyMapping = [];
        this.logUtil.putF(this.commonStrings.START, this, this.commonStrings.CONSTRUCTOR);
        this.clear();
    }
    clear() {
        for (var index = this.platformToGameKeyMapping.length - 1; index >= 0; index--) {
            this.platformToGameKeyMapping[index] = this.gameKeyFactory.NONE;
        }
    }
    removeAll() {
        super.removeAll();
        this.clear();
    }
    addMapping(inputToGameKeyMapping) {
        for (var index = inputToGameKeyMapping.getMaxMappable() - 1; index >= 0; index--) {
            var input = inputToGameKeyMapping.getInstance(index);
            ;
            if (input != this.gameKeyFactory.NONE) {
                this.addAll(input, inputToGameKeyMapping.getMappedInput(input));
            }
        }
    }
    addAll(input, list) {
        for (var index = list.size() - 1; index >= 0; index--) {
            var mappedToInput = list.objectArray[index];
            ;
            this.add(input, mappedToInput);
        }
    }
    add(input, mappedToInput) {
        super.add(input, mappedToInput);
        this.set(input, mappedToInput);
    }
    remove(input, mappedToInput) {
        this.logUtil.putF(new StringMaker().append(CommonLabels.getInstance().START_LABEL).append(StringUtil.getInstance().toString(input)).append(" == ").append(StringUtil.getInstance().toString(mappedToInput)).toString(), this, "InputToGameKeyMapping::remove");
        super.remove(input, mappedToInput);
        this.set(input, this.gameKeyFactory.NONE);
    }
    set(input, mappedToInput) {
        var id = mappedToInput.getId();
        ;
        if (id >= 0 && id < this.platformToGameKeyMapping.length) {
            this.platformToGameKeyMapping[id] = input;
        }
    }
    getMaxMappable() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.platformToGameKeyMapping.length;
    }
    getReverseInstance(id) {
        var list = new BasicArrayListD();
        ;
        var inputFactory = InputFactory.getInstance();
        ;
        for (var index = 0; index < this.platformToGameKeyMapping.length; index++) {
            if (this.platformToGameKeyMapping[index].getId() == id) {
                var input = inputFactory.getInstanceById(index);
                ;
                if (input !=
                    null) {
                    list.add(input);
                }
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return list;
    }
    //@Throws(Exception.constructor)
    initGameKey(canvas, gameKey) {
        var key = canvas.getKeyCode(gameKey.getId());
        ;
        if (key < 0 && -key < this.negativePlatformToGameKeyMapping.length) {
            this.negativePlatformToGameKeyMapping[-key] = gameKey;
        }
        else if (key > 0) {
            if (this.platformToGameKeyMapping[key] == this.gameKeyFactory.NONE) {
                this.platformToGameKeyMapping[key] = gameKey;
            }
        }
        else {
            PreLogUtil.putOE(new StringMaker().append(gameKey.toString()).append(CommonSeps.getInstance().COLON_SEP).appendint(key).toString(), this, this.commonStrings.INIT, new Exception());
        }
    }
    //@Throws(Exception.constructor)
    getSmallestCanvasGameKeyCode(canvas) {
        var nextKey = 0;
        ;
        var smallestKey = 0;
        ;
        for (var index = this.mappedGameKeys.length; --index >= 0;) {
            nextKey = canvas.getKeyCode(this.mappedGameKeys[index].getId());
            if (nextKey < smallestKey) {
                smallestKey = nextKey;
            }
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return smallestKey;
    }
    init(canvas) {
        try {
            var negativePlatformToGameKeyMapping = [];
            ;
            var smallestKey = this.getSmallestCanvasGameKeyCode(canvas);
            ;
            if (smallestKey < 0) {
                smallestKey--;
                if (smallestKey < -256) {
                    smallestKey = -256;
                }
                negativePlatformToGameKeyMapping = new Array(-smallestKey);
                for (var index = negativePlatformToGameKeyMapping.length; --index >= 0;) {
                    negativePlatformToGameKeyMapping[index] = this.gameKeyFactory.NONE;
                }
                this.negativePlatformToGameKeyMapping = negativePlatformToGameKeyMapping;
            }
            for (var index = this.mappedGameKeys.length; --index >= 0;) {
                this.initGameKey(canvas, this.mappedGameKeys[index]);
            }
            //: 
        }
        catch (t) {
            this.logUtil.put(this.commonStrings.EXCEPTION, this, this.commonStrings.INIT, t);
        }
    }
    getInstanceForCanvas(canvas, id) {
        if (id >= 0 && id < this.platformToGameKeyMapping.length) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.platformToGameKeyMapping[id];
        }
        else if (id < 0 && -id < this.negativePlatformToGameKeyMapping.length) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.negativePlatformToGameKeyMapping[-id];
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.gameKeyFactory.NONE;
        }
    }
    getInstance(id) {
        if (id >= 0 && id < this.platformToGameKeyMapping.length) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.platformToGameKeyMapping[id];
        }
        else if (id < 0 && -id < this.negativePlatformToGameKeyMapping.length) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.negativePlatformToGameKeyMapping[-id];
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return this.gameKeyFactory.NONE;
        }
    }
}
InputToGameKeyMapping.instance = NullUtil.getInstance().NULL_OBJECT;
