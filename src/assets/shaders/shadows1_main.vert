precision mediump float;

uniform mat4 model, view, projection, light_projection, light_view;
attribute vec3 position, normal;
varying vec3 frag_position, frag_normal, frag_shadow, v_normal;

void main() {
    vec4 world_position = model * vec4(position, 1.0);
    frag_position = position;
    frag_normal = normal;
    frag_shadow = (light_projection * light_view * world_position).xyz;
    gl_Position = projection * view * world_position;
}
