precision mediump float;

uniform mat4 mv_matrix, projection;
attribute vec3 position, normal;
varying vec3 frag_position, frag_normal;

void main() {
    frag_position = (mv_matrix * vec4(position, 1.0)).xyz;
    frag_normal = (mv_matrix * vec4(normal, 0.0)).xyz;
    gl_Position = projection * mv_matrix * vec4(position, 1.0);
}
