// DEPTH MAP VERTEX SHADER

precision mediump float;

//[demo_hide]
uniform mat4 light_projection, light_view, model;
attribute vec3 position, normal;
varying vec3 frag_position;
//[demo_hide_end]

void main() {
    vec4 p = light_projection * light_view * model * vec4(position, 1.0);
    frag_position = p.xyz;
    gl_Position = p;
}
