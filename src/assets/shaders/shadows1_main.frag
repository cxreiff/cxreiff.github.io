// MAIN FRAGMENT SHADER

//[demo_hide]
precision mediump float;

uniform float min_bias, max_bias;
uniform mat4 model, view;
uniform vec3 light_direction;
uniform sampler2D shadow_map;
varying vec3 frag_position, frag_normal, frag_shadow;

#define texel_size 1.0 / 2048.0

const vec3 base_color =  vec3(0.6, 0.4, 0.8);
const vec3 light_diffuse = vec3(0.8, 0.8, 0.8);
const vec3 light_ambient = vec3(0.2, 0.2, 0.2);
const vec3 light_specular = vec3(0.8, 0.8, 0.8);
//[demo_hide_end]

float sample_shadow_map(vec2 coords, float z, float bias) {
    float a = texture2D(shadow_map, coords).z;
    float b = frag_shadow.z;
    return step(b - bias, a);
}

void main() {
    vec3 view_position = normalize((view * model * vec4(frag_position, 1.0)).xyz);
    vec3 view_normal = normalize((view * model * vec4(frag_normal, 0.0)).xyz);
    vec3 view_light = (view * normalize(vec4(light_direction, 0.0))).xyz;

    vec3 ambient = light_ambient * base_color;
    float cos_theta = dot(view_normal, -view_light);
    vec3 diffuse = max(cos_theta, 0.0) * light_diffuse;

    vec3 reflection = reflect(view_light, view_normal);
    float reflected_cos_theta = dot(-reflection, view_position);
    vec3 specular = pow(max(reflected_cos_theta, 0.0), 20.0) * light_specular;

    vec2 coords = frag_shadow.xy * 0.5 + 0.5;
    float bias = max(max_bias * (1.0 - cos_theta), min_bias);

    float s0 = sample_shadow_map(coords + texel_size * vec2(0.0, 0.0), frag_shadow.z, bias);
    float s1 = sample_shadow_map(coords + texel_size * vec2(1.0, 0.0), frag_shadow.z, bias);
    float s2 = sample_shadow_map(coords + texel_size * vec2(0.0, 1.0), frag_shadow.z, bias);
    float s3 = sample_shadow_map(coords + texel_size * vec2(1.0, 1.0), frag_shadow.z, bias);
    float shadow = (s0 + s1 + s2 + s3) / 4.0;

    gl_FragColor = vec4((specular * shadow) + (ambient + diffuse * shadow) * base_color, 1.0);
}
