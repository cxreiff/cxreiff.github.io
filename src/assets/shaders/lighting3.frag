precision mediump float;

uniform mat4 model, view;
varying vec3 frag_position, frag_normal;

const vec4 light_direction = normalize(vec4(1.0, -1.0, 0.0, 0.0));
const vec4 base_color =  vec4(0.6, 0.4, 0.8, 1.0);
const vec4 light_diffuse = vec4(0.8, 0.8, 0.8, 0.0);
const vec4 light_ambient = vec4(0.2, 0.2, 0.2, 1.0);
const vec4 light_specular = vec4(0.8, 0.8, 0.8, 1.0);

void main() {
    vec3 view_light_direction = (view * light_direction).xyz;
    vec3 view_normal = (view * model * vec4(frag_normal, 0.0)).xyz;
    vec3 normal = normalize(view_normal);
    vec3 reflection = reflect(view_light_direction, normal);
    vec3 eye = normalize((view * model * vec4(frag_position, 1.0)).xyz);

    vec4 diffuse_factor = max(-dot(normal, view_light_direction), 0.0) * light_diffuse;
    vec4 ambient_diffuse_factor = diffuse_factor + light_ambient;
    vec4 specular_factor = pow(max(-dot(reflection, eye), 0.0), 12.0) * light_specular;

    gl_FragColor = specular_factor + ambient_diffuse_factor * base_color;
}
