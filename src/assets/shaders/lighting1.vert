// MESH RENDER
// https://github.com/mikolalysenko/bunny

precision mediump float;

attribute vec3 position;
uniform mat4 mv_matrix, projection;

void main() {
    gl_Position = projection * mv_matrix * vec4(position, 1.0);
}
