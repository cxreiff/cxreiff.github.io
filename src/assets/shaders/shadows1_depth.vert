precision mediump float;

uniform mat4 light_projection, light_view, model;
attribute vec3 position, normal;
varying vec3 frag_position;

void main() {
    vec4 p = light_projection * light_view * model * vec4(position, 1.0);
    frag_position = p.xyz;
    gl_Position = p;
}
