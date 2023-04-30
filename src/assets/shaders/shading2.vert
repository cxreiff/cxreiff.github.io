// PLAIN MESH
// https://github.com/mikolalysenko/bunny

precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform mat4 model, view, projection;

attribute vec3 position, normal;

varying vec2 frag_texcoord;
varying vec3 frag_position, frag_normal;

void main() {
    vec4 eye_position = view * model * vec4(position, 1.0);
    gl_Position = projection * eye_position;
    frag_position = eye_position.xyz;
    frag_normal = (view * model * vec4(position, 1.0)).xyz;
    frag_texcoord = position.xy * vec2(0.5, -0.5) + vec2(0.5);
}
