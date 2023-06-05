// DIFFUSION LIGHTING
// https://github.com/mikolalysenko/bunny

precision mediump float;

uniform mat4 mv_matrix, projection;
attribute vec3 position, normal;
varying vec3 frag_position, frag_normal;

void main() {
    vec4 eye_position = mv_matrix * vec4(position, 1.0);
    frag_position = position;
    frag_normal = normal;
    gl_Position = projection * eye_position;
}
