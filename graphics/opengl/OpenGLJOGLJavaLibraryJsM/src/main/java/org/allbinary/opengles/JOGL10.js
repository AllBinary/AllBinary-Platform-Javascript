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
//sameFolderImports - not GWT import - same folder const FloatBuffer
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
    glDeleteTextures(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glDeleteTextures$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glDeleteTextures$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glDeleteTextures');
    }
    glDeleteTextures$overload1(n, textures, offset) {
        this.gl10.glDeleteTextures(n, textures, offset);
    }
    glDeleteTextures$overload2(n, textures) {
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
    glFogfv(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glFogfv$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glFogfv$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glFogfv');
    }
    glFogfv$overload1(pname, params, offset) {
        this.gl10.glFogfv(pname, params, offset);
    }
    glFogfv$overload2(pname, params) {
        this.gl10.glFogfv(pname, params);
    }
    glFrontFace(mode) {
        this.gl10.glFrontFace(mode);
    }
    glFrustumf(left, right, bottom, top, zNear, zFar) {
        this.gl10.glFrustumf(left, right, bottom, top, zNear, zFar);
    }
    glGenTextures(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glGenTextures$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glGenTextures$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glGenTextures');
    }
    glGenTextures$overload1(n, textures, offset) {
        this.gl10.glGenTextures(n, textures, offset);
    }
    glGenTextures$overload2(n, textures) {
        this.gl10.glGenTextures(n, textures);
    }
    glGetError() {
        //if statement needs to be on the same line and ternary does not work the same way.
        return this.gl10.glGetError();
        ;
    }
    glGetIntegerv(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glGetIntegerv$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glGetIntegerv$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glGetIntegerv');
    }
    glGetIntegerv$overload1(pname, params, offset) {
        this.gl10.glGetIntegerv(pname, params, offset);
    }
    glGetIntegerv$overload2(pname, params) {
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
    glLightModelfv(...args) {
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[2] === 'number')
            return this.glLightModelfv$overload1(args[0], args[1], args[2]);
        if (args.length === 2 && typeof args[0] === 'number')
            return this.glLightModelfv$overload2(args[0], args[1]);
        throw new TypeError('No matching overload: glLightModelfv');
    }
    glLightModelfv$overload1(pname, params, offset) {
        this.gl10.glLightModelfv(pname, params, offset);
    }
    glLightModelfv$overload2(pname, params) {
        this.gl10.glLightModelfv(pname, params);
    }
    glLightf(light, pname, param) {
        this.gl10.glLightf(light, pname, param);
    }
    glLightfv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glLightfv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glLightfv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glLightfv');
    }
    glLightfv$overload1(light, pname, params, offset) {
        this.gl10.glLightfv(light, pname, params, offset);
    }
    glLightfv$overload2(light, pname, params) {
        this.gl10.glLightfv(light, pname, params);
    }
    glLineWidth(width) {
        this.gl10.glLineWidth(width);
    }
    glLoadIdentity() {
        this.gl10.glLoadIdentity();
    }
    glLoadMatrixf(...args) {
        if (args.length === 2 && typeof args[1] === 'number')
            return this.glLoadMatrixf$overload1(args[0], args[1]);
        if (args.length === 1)
            return this.glLoadMatrixf$overload2(args[0]);
        throw new TypeError('No matching overload: glLoadMatrixf');
    }
    glLoadMatrixf$overload1(m, offset) {
        this.gl10.glLoadMatrixf(m, offset);
    }
    glLoadMatrixf$overload2(m) {
        this.gl10.glLoadMatrixf(m);
    }
    glLogicOp(opcode) {
        this.gl10.glLogicOp(opcode);
    }
    glMaterialf(face, pname, param) {
        this.gl10.glMaterialf(face, pname, param);
    }
    glMaterialfv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glMaterialfv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glMaterialfv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glMaterialfv');
    }
    glMaterialfv$overload1(face, pname, params, offset) {
        this.gl10.glMaterialfv(face, pname, params, offset);
    }
    glMaterialfv$overload2(face, pname, params) {
        this.gl10.glMaterialfv(face, pname, params);
    }
    glMatrixMode(mode) {
        this.gl10.glMatrixMode(mode);
    }
    glMultMatrixf(...args) {
        if (args.length === 2 && typeof args[1] === 'number')
            return this.glMultMatrixf$overload1(args[0], args[1]);
        if (args.length === 1)
            return this.glMultMatrixf$overload2(args[0]);
        throw new TypeError('No matching overload: glMultMatrixf');
    }
    glMultMatrixf$overload1(m, offset) {
        this.gl10.glMultMatrixf(m, offset);
    }
    glMultMatrixf$overload2(m) {
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
    glTexEnvfv(...args) {
        if (args.length === 4 && typeof args[0] === 'number' && typeof args[1] === 'number' && typeof args[3] === 'number')
            return this.glTexEnvfv$overload1(args[0], args[1], args[2], args[3]);
        if (args.length === 3 && typeof args[0] === 'number' && typeof args[1] === 'number')
            return this.glTexEnvfv$overload2(args[0], args[1], args[2]);
        throw new TypeError('No matching overload: glTexEnvfv');
    }
    glTexEnvfv$overload1(target, pname, params, offset) {
        this.gl10.glTexEnvfv(target, pname, params, offset);
    }
    glTexEnvfv$overload2(target, pname, params) {
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
