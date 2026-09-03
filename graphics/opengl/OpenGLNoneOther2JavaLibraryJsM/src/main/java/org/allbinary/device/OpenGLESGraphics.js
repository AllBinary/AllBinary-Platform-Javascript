/* Generated Code Do Not Modify */
import { RuntimeException } from '../../../java/lang/RuntimeException.js';
//not GWT import const GL10 = globalThis.javax.microedition.khronos.opengles.GL10;
//not plain js import { Font } from '../../../javax/microedition/lcdui/Font.js';
const Font = globalThis.javax.microedition.lcdui.Font;
//not plain js import { Graphics } from '../../../javax/microedition/lcdui/Graphics.js';
const Graphics = globalThis.javax.microedition.lcdui.Graphics;
//not GWT import const OpenGLSurfaceChangedInterface = globalThis.org.allbinary.image.opengles.OpenGLSurfaceChangedInterface;
//not plain js import { CommonStrings } from '../../../org/allbinary/string/CommonStrings.js';
const CommonStrings = globalThis.org.allbinary.string.CommonStrings;
//not GWT import const GraphicsInterface = globalThis.org.allbinary.device.GraphicsInterface;
import { NullGL10 } from './NullGL10.js';
//not GWT import const NullGL10 = globalThis.org.allbinary.device.NullGL10;
export class OpenGLESGraphics extends Graphics {
    constructor() {
        super();
        this.commonStrings = CommonStrings.getInstance();
        this.gl = NullGL10.NULL_GL10;
    }
    updateGL(gl) {
    }
    set(gl) {
    }
    //@Throws(Exception.constructor)
    init() {
    }
    //@Throws(Exception.constructor)
    update() {
    }
    setOrthoginalMode() {
    }
    setCameraMode() {
    }
    getGl10() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gl;
    }
    setFontDebug(font, fontDebug) {
        throw new RuntimeException();
    }
}
