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
import { Object } from '../../../java/lang/Object.js';
import { GLU } from '../../../com/jogamp/opengl/glu/GLU.js';
//not GWT import const FloatBuffer = globalThis.org.allbinary.opengles.FloatBuffer;
//JOGLEToKhronosGL10
export class JOGL10 extends Object {
    constructor(gl, gl2) {
        super();
        this.RED = "red: ";
        this.GREEN = " green: ";
        this.BLUE = " blue: ";
        this.ALPHA = " alpha: ";
        this.PNAME = "pname: ";
        this._PNAME = " pname: ";
        this.PARAM = " param: ";
        this.PARAMS = " params: ";
        this.LIGHT = "light: ";
        this.FACE = "face: ";
        this.TARGET = "target: ";
        this.gl10 = gl2;
        this.glu = GLU.createGLU(this.gl10);
        this.GL_LINE = com.jogamp.opengl.GL2.GL_LINE;
        this.GL_QUAD_STRIP = com.jogamp.opengl.GL2.GL_QUAD_STRIP;
    }
    getJOGLGL() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gl10;
    }
    glActiveTexture(texture) {
        this.gl10.glActiveTexture(texture);
    }
    glAlphaFunc(func, ref) {
        this.gl10.glAlphaFunc(func, ref);
    }
    glBindTexture(target, texture) {
        this.gl10.glBindTexture(target, texture);
    }
    glBlendFunc(sfactor, dfactor) {
        this.gl10.glBlendFunc(sfactor, dfactor);
    }
    glClear(mask) {
        this.gl10.glClear(mask);
    }
    glClearColor(red, green, blue, alpha) {
        this.gl10.glClearColor(red, green, blue, alpha);
    }
    glClearDepthf(depth) {
        this.gl10.glClearDepthf(depth);
    }
    glClearStencil(s) {
        this.gl10.glClearStencil(s);
    }
    glClientActiveTexture(texture) {
        this.gl10.glClientActiveTexture(texture);
    }
    glColor4f(red, green, blue, alpha) {
        this.gl10.glColor4f(red, green, blue, alpha);
    }
    glColorMask(red, green, blue, alpha) {
        this.gl10.glColorMask(red, green, blue, alpha);
    }
    glColorPointer(size, type, stride, pointer) {
        this.gl10.glColorPointer(size, type, stride, pointer);
    }
    glCompressedTexImage2D(target, level, internalformat, width, height, border, imageSize, data) {
        this.gl10.glCompressedTexImage2D(target, level, internalformat, width, height, border, imageSize, data);
    }
    glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data) {
        this.gl10.glCompressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, data);
    }
    glCopyTexImage2D(target, level, internalformat, x, y, width, height, border) {
        this.gl10.glCopyTexImage2D(target, level, internalformat, x, y, width, height, border);
    }
    glCopyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height) {
        this.gl10.glCopyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);
    }
    glCullFace(mode) {
        this.gl10.glCullFace(mode);
    }
    glDeleteTextures(n, textures, offset) {
        this.gl10.glDeleteTextures(n, textures, offset);
    }
    glDeleteTextures(n, textures) {
        this.gl10.glDeleteTextures(n, textures);
    }
    glDepthFunc(func) {
        this.gl10.glDepthFunc(func);
    }
    glDepthMask(flag) {
        this.gl10.glDepthMask(flag);
    }
    glDepthRangef(zNear, zFar) {
        this.gl10.glDepthRangef(zNear, zFar);
    }
    glDisable(cap) {
        this.gl10.glDisable(cap);
    }
    glDisableClientState(array) {
        this.gl10.glDisableClientState(array);
    }
    glDrawArrays(mode, first, count) {
        this.gl10.glDrawArrays(mode, first, count);
    }
    glDrawElements(mode, count, type, indices) {
        this.gl10.glDrawElements(mode, count, type, indices);
    }
    glEnable(cap) {
        this.gl10.glEnable(cap);
    }
    glEnableClientState(array) {
        this.gl10.glEnableClientState(array);
    }
    glFinish() {
        this.gl10.glFinish();
    }
    glFlush() {
        this.gl10.glFlush();
    }
    glFogf(pname, param) {
        this.gl10.glFogf(pname, param);
    }
    glFogfv(pname, params, offset) {
        this.gl10.glFogfv(pname, params, offset);
    }
    glFogfv(pname, params) {
        this.gl10.glFogfv(pname, params);
    }
    glFrontFace(mode) {
        this.gl10.glFrontFace(mode);
    }
    glFrustumf(left, right, bottom, top, zNear, zFar) {
        this.gl10.glFrustumf(left, right, bottom, top, zNear, zFar);
    }
    glGenTextures(n, textures, offset) {
        this.gl10.glGenTextures(n, textures, offset);
    }
    glGenTextures(n, textures) {
        this.gl10.glGenTextures(n, textures);
    }
    glGetError() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gl10.glGetError();
        ;
    }
    glGetIntegerv(pname, params, offset) {
        this.gl10.glGetIntegerv(pname, params, offset);
    }
    glGetIntegerv(pname, params) {
        this.gl10.glGetIntegerv(pname, params);
    }
    glGetString(name) {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gl10.glGetString(name);
        ;
    }
    glHint(target, mode) {
        this.gl10.glHint(target, mode);
    }
    glLightModelf(pname, param) {
        this.gl10.glLightModelf(pname, param);
    }
    glLightModelfv(pname, params, offset) {
        this.gl10.glLightModelfv(pname, params, offset);
    }
    glLightModelfv(pname, params) {
        this.gl10.glLightModelfv(pname, params);
    }
    glLightf(light, pname, param) {
        this.gl10.glLightf(light, pname, param);
    }
    glLightfv(light, pname, params, offset) {
        this.gl10.glLightfv(light, pname, params, offset);
    }
    glLightfv(light, pname, params) {
        this.gl10.glLightfv(light, pname, params);
    }
    glLineWidth(width) {
        this.gl10.glLineWidth(width);
    }
    glLoadIdentity() {
        this.gl10.glLoadIdentity();
    }
    glLoadMatrixf(m, offset) {
        this.gl10.glLoadMatrixf(m, offset);
    }
    glLoadMatrixf(m) {
        this.gl10.glLoadMatrixf(m);
    }
    glLogicOp(opcode) {
        this.gl10.glLogicOp(opcode);
    }
    glMaterialf(face, pname, param) {
        this.gl10.glMaterialf(face, pname, param);
    }
    glMaterialfv(face, pname, params, offset) {
        this.gl10.glMaterialfv(face, pname, params, offset);
    }
    glMaterialfv(face, pname, params) {
        this.gl10.glMaterialfv(face, pname, params);
    }
    glMatrixMode(mode) {
        this.gl10.glMatrixMode(mode);
    }
    glMultMatrixf(m, offset) {
        this.gl10.glMultMatrixf(m, offset);
    }
    glMultMatrixf(m) {
        this.gl10.glMultMatrixf(m);
    }
    glMultiTexCoord4f(target, s, t, r, q) {
        this.gl10.glMultiTexCoord4f(target, s, t, r, q);
    }
    glNormal3f(nx, ny, nz) {
        this.gl10.glNormal3f(nx, ny, nz);
    }
    glNormalPointer(type, stride, pointer) {
        this.gl10.glNormalPointer(type, stride, pointer);
    }
    glOrthof(left, right, bottom, top, zNear, zFar) {
        this.gl10.glOrthof(left, right, bottom, top, zNear, zFar);
    }
    glPixelStorei(pname, param) {
        this.gl10.glPixelStorei(pname, param);
    }
    glPointSize(size) {
        this.gl10.glPointSize(size);
    }
    glPolygonOffset(factor, units) {
        this.gl10.glPolygonOffset(factor, units);
    }
    glPopMatrix() {
        this.gl10.glPopMatrix();
    }
    glPushMatrix() {
        this.gl10.glPushMatrix();
    }
    glReadPixels(x, y, width, height, format, type, pixels) {
        this.gl10.glReadPixels(x, y, width, height, format, type, pixels);
    }
    glRotatef(angle, x, y, z) {
        this.gl10.glRotatef(angle, x, y, z);
    }
    glRotatex(angle, x, y, z) {
        this.gl10.glRotatef(angle, x, y, z);
    }
    glSampleCoverage(value, invert) {
        this.gl10.glSampleCoverage(value, invert);
    }
    glScalef(x, y, z) {
        this.gl10.glScalef(x, y, z);
    }
    glScalex(x, y, z) {
        this.gl10.glScalef(x, y, z);
    }
    glScissor(x, y, width, height) {
        this.gl10.glScissor(x, y, width, height);
    }
    glShadeModel(mode) {
        this.gl10.glShadeModel(mode);
    }
    glStencilFunc(func, ref, mask) {
        this.gl10.glStencilFunc(func, ref, mask);
    }
    glStencilMask(mask) {
        this.gl10.glStencilMask(mask);
    }
    glStencilOp(fail, zfail, zpass) {
        this.gl10.glStencilOp(fail, zfail, zpass);
    }
    glTexCoordPointer(size, type, stride, pointer) {
        this.gl10.glTexCoordPointer(size, type, stride, pointer);
    }
    glTexEnvf(target, pname, param) {
        this.gl10.glTexEnvf(target, pname, param);
    }
    glTexEnvfv(target, pname, params, offset) {
        this.gl10.glTexEnvfv(target, pname, params, offset);
    }
    glTexEnvfv(target, pname, params) {
        this.gl10.glTexEnvfv(target, pname, params);
    }
    glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels) {
        this.gl10.glTexImage2D(target, level, internalformat, width, height, border, format, type, pixels);
    }
    glTexParameterf(target, pname, param) {
        this.gl10.glTexParameterf(target, pname, param);
    }
    glTexParameteri(target, pname, param) {
        this.gl10.glTexParameteri(target, pname, param);
    }
    glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels) {
        this.gl10.glTexSubImage2D(target, level, xoffset, yoffset, width, height, format, type, pixels);
    }
    glTranslatef(x, y, z) {
        this.gl10.glTranslatef(x, y, z);
    }
    glVertexPointer(size, type, stride, pointer) {
        this.gl10.glVertexPointer(size, type, stride, pointer);
    }
    glViewport(x, y, width, height) {
        this.gl10.glViewport(x, y, width, height);
    }
    glBegin(i) {
        this.gl10.glBegin(i);
    }
    glEnd() {
        this.gl10.glEnd();
    }
    glVertex3f(f, f2, f3) {
        this.gl10.glVertex3f(f, f2, f3);
    }
    glPolygonMode(i, i1) {
        this.gl10.glPolygonMode(i, i1);
    }
}
