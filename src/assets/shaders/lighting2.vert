precision mediump float;

uniform mat4 mv_matrix, projection;
attribute vec3 position, normal;
varying vec3 frag_normal;

void main() {
    frag_normal = (mv_matrix * vec4(normal, 0.0)).xyz;
    gl_Position = projection * mv_matrix * vec4(position, 1.0);
}
