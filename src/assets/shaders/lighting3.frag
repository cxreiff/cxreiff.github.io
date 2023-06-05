precision mediump float;

uniform mat4 mv_matrix, view;
varying vec3 frag_position, frag_normal;

const vec3 light_direction = normalize(vec3(1.0, -1.0, 0.0));
const vec4 base_color =  vec4(0.6, 0.4, 0.8, 1.0);
const vec4 light_diffuse = vec4(0.8, 0.8, 0.8, 0.0);
const vec4 light_ambient = vec4(0.2, 0.2, 0.2, 1.0);
const vec4 light_specular = vec4(0.8, 0.8, 0.8, 1.0);

void main() {
    vec3 normal = normalize(frag_normal);
    vec3 reflection = reflect(light_direction, normal);
    vec3 eye = normalize(frag_position);

    vec4 diffuse_factor = max(-dot(normal, light_direction), 0.0) * light_diffuse;
    vec4 ambient_diffuse_factor = diffuse_factor + light_ambient;
    vec4 specular_factor = max(pow(-dot(reflection, eye), 5.0), 0.0) * light_specular;

    gl_FragColor = specular_factor + ambient_diffuse_factor * base_color;
}
