precision mediump float;

uniform mat4 mv_matrix, view;
varying vec3 frag_normal;

const vec4 base_color =  vec4(0.6, 0.4, 0.8, 1.0);
const vec4 light_direction = normalize(vec4(1.0, -1.0, 0.0, 0.0));
const vec4 light_diffuse = vec4(0.8, 0.8, 0.8, 0.0);
const vec4 light_ambient = vec4(0.2, 0.2, 0.2, 1.0);

void main() {
    vec3 world_light_direction = (view * light_direction).xyz;
    vec3 normal = normalize(frag_normal);

    vec4 diffuse_factor = max(-dot(normal, world_light_direction), 0.0) * light_diffuse;
    vec4 ambient_diffuse_factor = diffuse_factor + light_ambient;

    gl_FragColor = ambient_diffuse_factor * base_color;
}
