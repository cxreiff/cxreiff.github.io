precision mediump float;

uniform sampler2D textures[1];
uniform mat4 model, view;

varying vec2 frag_texcoord;
varying vec3 frag_position, frag_normal;

const vec3 light_direction = vec3(1.0, 0.0, 0.0);
const vec4 light_diffuse = vec4(0.8, 0.8, 0.8, 0.0);
const vec4 light_ambient = vec4(0.2, 0.2, 0.2, 1.0);

void main()
{
    vec3 mv_light_direction = (model * view * vec4(light_direction, 0.0)).xyz;
    vec3 normal = normalize(frag_normal);
    vec3 eye = normalize(frag_position);
    vec3 reflection = reflect(mv_light_direction, normal);

    vec4 frag_diffuse = vec4(0.6, 0.4, 0.8, 1.0);
    vec4 diffuse_factor = max(-dot(normal, mv_light_direction), 0.0) * light_diffuse;
    vec4 ambient_diffuse_factor = diffuse_factor + light_ambient;

    gl_FragColor = ambient_diffuse_factor * frag_diffuse;
}
