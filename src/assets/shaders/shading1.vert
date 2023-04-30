// DIFFUSION LIGHTING (BROKEN)
// https://github.com/mikolalysenko/bunny

precision mediump float;

attribute vec3 position;

uniform float u_time;
uniform vec2 u_resolution;
uniform mat4 model, view, projection;

void main() {
    gl_Position = projection * view * model * vec4(position, 1.0);
}
