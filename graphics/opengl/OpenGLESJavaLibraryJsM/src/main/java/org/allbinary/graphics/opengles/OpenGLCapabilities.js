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
import { Integer } from '../../../../java/lang/Integer.js';
import { GL10 } from '../../../../javax/microedition/khronos/opengles/GL10.js';
//not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;
import { GL11 } from '../../../../javax/microedition/khronos/opengles/GL11.js';
//not GWT import const GL11 = globalThis.javax.microedition.khronos.opengles.GL11;
import { AndroidUtil } from '../../../../org/allbinary/AndroidUtil.js';
//not GWT import const AndroidUtil = globalThis.org.allbinary.AndroidUtil;
import { OpenGLESGL10ImageFactory } from '../../../../org/allbinary/image/opengles/OpenGLESGL10ImageFactory.js';
//not GWT import const OpenGLESGL10ImageFactory = globalThis.org.allbinary.image.opengles.OpenGLESGL10ImageFactory;
import { OpenGLESGL11VBOImageFactory } from '../../../../org/allbinary/image/opengles/OpenGLESGL11VBOImageFactory.js';
//not GWT import const OpenGLESGL11VBOImageFactory = globalThis.org.allbinary.image.opengles.OpenGLESGL11VBOImageFactory;
import { OpenGLImageSpecificFactory } from '../../../../org/allbinary/image/opengles/OpenGLImageSpecificFactory.js';
//not GWT import const OpenGLImageSpecificFactory = globalThis.org.allbinary.image.opengles.OpenGLImageSpecificFactory;
//not plain js import { BasicArrayList } from '../../../../org/allbinary/util/BasicArrayList.js';
const BasicArrayList = globalThis.org.allbinary.util.BasicArrayList;
//not plain js import { BasicArrayListD } from '../../../../org/allbinary/util/BasicArrayListD.js';
const BasicArrayListD = globalThis.org.allbinary.util.BasicArrayListD;
//not plain js import { CommonSeps } from '../../../../org/allbinary/string/CommonSeps.js';
const CommonSeps = globalThis.org.allbinary.string.CommonSeps;
//not plain js import { CommonStrings } from '../../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not plain js import { StringMaker } from '../../../../org/allbinary/logic/string/StringMaker.js';
const StringMaker = globalThis.org.allbinary.logic.string.StringMaker;
//not plain js import { StringUtil } from '../../../../org/allbinary/logic/string/StringUtil.js';
const StringUtil = globalThis.org.allbinary.logic.string.StringUtil;
import { Tokenizer } from '../../../../org/allbinary/logic/string/tokens/Tokenizer.js';
//not GWT import const Tokenizer = globalThis.org.allbinary.logic.string.tokens.Tokenizer;
//not plain js import { PreLogUtil } from '../../../../org/allbinary/logic/communication/log/PreLogUtil.js';
const PreLogUtil = globalThis.org.allbinary.logic.communication.log.PreLogUtil;
import { Features } from '../../../../org/allbinary/game/configuration/feature/Features.js';
//not GWT import const Features = globalThis.org.allbinary.game.configuration.feature.Features;
//not plain js import { LogUtil } from '../../../../org/allbinary/logic/communication/log/LogUtil.js';
const LogUtil = globalThis.org.allbinary.logic.communication.log.LogUtil;
//Current folder imports from return types, extended types, and scope (deduplicated)
import { OpenGLFeatureFactory } from './OpenGLFeatureFactory.js';
//not GWT import const OpenGLFeature = globalThis.org.allbinary.graphics.opengles.OpenGLFeature;
export class OpenGLCapabilities extends Object {
    static getInstance() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return OpenGLCapabilities.instance;
    }
    constructor() {
        super();
        this.logUtil = LogUtil.getInstance();
        this.CUSTOM_GL_SURFACE_VIEW = true;
        this.stringUtil = StringUtil.getInstance();
        this.initialized = false;
        this.glVersionString = this.stringUtil.EMPTY_STRING;
        this.glShaderVersionString = this.stringUtil.EMPTY_STRING;
        this.shaderVersion = 0;
        this.glRenderer = this.stringUtil.EMPTY_STRING;
        this.glVendor = this.stringUtil.EMPTY_STRING;
        this.glExtensions = this.stringUtil.EMPTY_STRING;
        this.possiblyAccelerated = false;
        this.acceleratedString = this.stringUtil.EMPTY_STRING;
        this.maxTextureSize = 64;
        this.VERSION_1_0 = "1.0";
        this.VERSION_1_1 = "1.1";
        this.VERSION_2_0 = "2.0";
        this.VERSION_3_0 = "3.0";
        this.VERSION_3_1 = "3.1";
        this.VERSION_3_2 = "3.2";
        this.VERSION_HIGHER_THAN_EXISTS = "999.999";
        this.VERSION_UNK = "Unk";
        this.GL_EXT_GPU_SHADER_100 = "GL_ARB_shading_language_100";
        this.GL_EXT_GPU_SHADER4 = "GL_EXT_gpu_shader4";
        this.glVersion = this.glVersionString;
        this.glInstanceVersion = this.VERSION_UNK;
        this.glExtensionDrawTexture = false;
        this.glThreedDrawTexture = false;
        this.glExtensionGPUShader4 = false;
        this.glExtensionGPUShader100 = false;
        this.vertexBufferObjectSupport = false;
    }
    isInitialized() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.initialized;
    }
    requireInitialization() {
    }
    initCapabilities(gl) {
        var METHOD_NAME = "initGLCapabilities";
        ;
        try {
            var features = Features.getInstance();
            ;
            var openGLFeatureFactory = OpenGLFeatureFactory.getInstance();
            ;
            var openGLImageSpecificFactory = OpenGLImageSpecificFactory.getInstance();
            ;
            var stringBuffer = new StringMaker();
            ;
            this.glVersionString = gl.glGetString(GL10.GL_VERSION);
            var GL_SHADING_LANGUAGE_VERSION = 0x8b8c;
            ;
            this.glShaderVersionString = gl.glGetString(GL_SHADING_LANGUAGE_VERSION);
            if (this.glShaderVersionString ==
                null) {
                this.glShaderVersionString = this.stringUtil.EMPTY_STRING;
            }
            try {
                if (this.glShaderVersionString !=
                    null
                    && this.glShaderVersionString.indexOf('.') >= 0) {
                    var startIndex = this.glShaderVersionString.lastIndexOf(' ');
                    ;
                    if (startIndex >= 0) {
                        this.glShaderVersionString = this.glShaderVersionString.substring(startIndex + 1);
                    }
                    this.shaderVersion = Integer.parseInt(this.glShaderVersionString.replace(CommonSeps.getInstance().PERIOD, StringUtil.getInstance().EMPTY_STRING));
                }
                //: 
            }
            catch (e) {
                var commonStrings = CommonStrings.getInstance();
                ;
                this.logUtil.put(commonStrings.EXCEPTION, this, METHOD_NAME, e);
            }
            this.glRenderer = gl.glGetString(GL10.GL_RENDERER);
            this.glVendor = gl.glGetString(GL10.GL_VENDOR);
            this.glExtensions = gl.glGetString(GL10.GL_EXTENSIONS);
            if (this.glExtensions.indexOf(this.GL_EXT_GPU_SHADER_100) >= 0) {
                this.glExtensionGPUShader100 = true;
            }
            else {
                this.glExtensionGPUShader100 = false;
            }
            if (this.glExtensions.indexOf(this.GL_EXT_GPU_SHADER4) >= 0) {
                this.glExtensionGPUShader4 = true;
            }
            else {
                this.glExtensionGPUShader4 = false;
            }
            if (this.glRenderer ==
                null) {
                this.glRenderer = this.stringUtil.EMPTY_STRING;
            }
            if (this.glRenderer.toLowerCase().indexOf("pixelflinger") >= 0) {
                this.acceleratedString = "Probably Not for " + this.glRenderer;
                this.possiblyAccelerated = false;
            }
            else {
                this.acceleratedString = "Probably for " + this.glRenderer;
                //Otherwise - statement - EmptyStmt
                this.possiblyAccelerated = true;
            }
            this.glExtensionDrawTexture = false;
            if (this.glVersionString ==
                null) {
                this.glVersionString = this.stringUtil.EMPTY_STRING;
                this.glVersion = this.VERSION_UNK;
            }
            else if (this.glVersionString.indexOf(" 1.0") >= 0) {
                this.glVersion = this.VERSION_1_0;
            }
            else if (this.glVersionString.indexOf(" 1.1") >= 0) {
                this.glVersion = this.VERSION_1_1;
            }
            else {
                this.glVersion = this.VERSION_UNK;
            }
            if (gl instanceof GL11) {
                this.glInstanceVersion = this.VERSION_1_1;
            }
            else if (gl instanceof GL10) {
                this.glInstanceVersion = this.VERSION_1_0;
            }
            if (this.glVendor ==
                null) {
                this.glVendor = this.stringUtil.EMPTY_STRING;
            }
            if (this.glExtensions ==
                null) {
                this.glExtensions = this.stringUtil.EMPTY_STRING;
            }
            if (this.possiblyAccelerated) {
                PreLogUtil.put(new StringMaker().append("VBO:?").appendboolean((this.glInstanceVersion == this.VERSION_1_1)).append("||").appendboolean(this.isExtension(openGLFeatureFactory.OPENGL_VERTEX_BUFFER_OBJECT)).toString(), this, METHOD_NAME);
                if ((this.glInstanceVersion == this.VERSION_1_1 || this.isExtension(openGLFeatureFactory.OPENGL_VERTEX_BUFFER_OBJECT))) {
                    if (AndroidUtil.isAndroid()) {
                        PreLogUtil.put("VBO implementation was detected, but disabled by default for Android", this, METHOD_NAME);
                    }
                    else {
                        PreLogUtil.put("VBO implementation was detected, but disabled for now", this, METHOD_NAME);
                    }
                }
            }
            var stringUtil = StringUtil.getInstance();
            ;
            if (features.isDefault(openGLFeatureFactory.OPENGL_AUTO_SELECT)) {
                if (this.vertexBufferObjectSupport) {
                    openGLImageSpecificFactory.setImageFactory(new OpenGLESGL11VBOImageFactory());
                }
                else {
                    stringBuffer.append("OpenGL is on but ");
                    stringBuffer.append(stringUtil.toString(openGLFeatureFactory.OPENGL_DRAW_TEXTURE));
                    stringBuffer.append(" was not available");
                    PreLogUtil.put(stringBuffer.toString(), this, METHOD_NAME);
                    openGLImageSpecificFactory.setImageFactory(new OpenGLESGL10ImageFactory());
                }
            }
            else {
                stringBuffer.append(stringUtil.toString(openGLFeatureFactory.OPENGL_AUTO_SELECT));
                stringBuffer.append(" is not on");
                PreLogUtil.put(stringBuffer.toString(), this, METHOD_NAME);
                openGLImageSpecificFactory.setImageFactory(new OpenGLESGL10ImageFactory());
            }
            var maxTextureSizeArray = new Array(1);
            ;
            gl.glGetIntegerv(GL10.GL_MAX_TEXTURE_SIZE, maxTextureSizeArray, 0);
            this.maxTextureSize = maxTextureSizeArray[0];
            this.initialized = true;
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            this.logUtil.put(commonStrings.EXCEPTION, this, METHOD_NAME, e);
        }
    }
    isExtension(gameFeature) {
        var index = this.glExtensions.indexOf(gameFeature.getName());
        ;
        if (index >= 0) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        else {
            //if statement needs to be on the same line and ternary does not work the same way.
            return false;
        }
    }
    isGlExtensionDrawTexture() {
        this.requireInitialization();
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.glExtensionDrawTexture;
    }
    isGlExtensionGPUShader100() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.glExtensionGPUShader100;
    }
    isGlExtensionGPUShader4() {
        this.requireInitialization();
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.glExtensionGPUShader4;
    }
    getGlVersion() {
        this.requireInitialization();
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.glVersion;
    }
    getGlVersionString() {
        this.requireInitialization();
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.glVersionString;
    }
    getGlShaderVersion() {
        this.requireInitialization();
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.glShaderVersionString;
    }
    isGlThreedDrawTexture() {
        this.requireInitialization();
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.glThreedDrawTexture;
    }
    getGlRenderer() {
        this.requireInitialization();
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.glRenderer;
    }
    isVertexBufferObjectSupport() {
        this.requireInitialization();
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.vertexBufferObjectSupport;
    }
    isTextureSizeValid(widthAndHeight) {
        this.requireInitialization();
        if (this.maxTextureSize >= widthAndHeight) {
            //if statement needs to be on the same line and ternary does not work the same way.
            return true;
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return false;
    }
    toString() {
        var commonSeps = CommonSeps.getInstance();
        ;
        var stringBuffer = new StringMaker();
        ;
        stringBuffer.append("GL_VERSION: ");
        stringBuffer.append(this.glVersionString);
        stringBuffer.append(" GL_SHADING_LANGUAGE_VERSION: ");
        stringBuffer.append(this.glShaderVersionString);
        stringBuffer.append(" GL_RENDERER: ");
        stringBuffer.append(this.glRenderer);
        stringBuffer.append(" GL_VENDOR: ");
        stringBuffer.append(this.glVendor);
        stringBuffer.append(commonSeps.NEW_LINE);
        stringBuffer.append(" Is Accelerated: ");
        stringBuffer.append(this.acceleratedString);
        stringBuffer.append(commonSeps.NEW_LINE);
        stringBuffer.append(" VBO Support: ");
        stringBuffer.appendboolean(this.isVertexBufferObjectSupport());
        stringBuffer.append(commonSeps.NEW_LINE);
        stringBuffer.append(" Max Texture Size: ");
        stringBuffer.appendint(this.maxTextureSize);
        stringBuffer.append(commonSeps.NEW_LINE);
        stringBuffer.append(" GL_EXTENSIONS: ");
        try {
            var tokenizer = new Tokenizer(commonSeps.SPACE);
            ;
            var list = tokenizer.getTokensFromString(this.glExtensions, new BasicArrayListD());
            ;
            var size = list.size();
            ;
            for (var index = 0; index < size; index++) {
                stringBuffer.append(commonSeps.NEW_LINE);
                stringBuffer.append(this.stringUtil.toString(list.objectArray[index]));
            }
            //: 
        }
        catch (e) {
            var commonStrings = CommonStrings.getInstance();
            ;
            PreLogUtil.putOE(commonStrings.EXCEPTION, this, commonStrings.TOSTRING, e);
        }
        //if statement needs to be on the same line and ternary does not work the same way.
        return stringBuffer.toString();
        ;
    }
}
OpenGLCapabilities.instance = new OpenGLCapabilities();
