//[demo_hide]
precision mediump float;

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

mat2 rotate2d(float angle) {
    return mat2(
        cos(angle), -sin(angle),
        sin(angle), cos(angle)
    );
}
//[demo_hide_end]

float box(in vec2 uv, in vec2 size) {
    size = vec2(0.5) - size * 0.5;
    vec2 uvi = smoothstep(size, size + vec2(0.001), uv);
    uvi *= smoothstep(size, size + vec2(0.001), vec2(1.0) - uv);
    return uvi.x * uvi.y;
}

float cross(in vec2 uv, float size) {
    uv -= vec2(0.5);
    uv *= rotate2d(PI / 4.);
    uv += vec2(0.5);
    return (
        box(uv, vec2(size, size / 5.))
        + box(uv, vec2(size / 5., size))
    );
}

float circle(in vec2 uv, in float r) {
    vec2 uvc = uv - vec2(0.5);
    float uvd = dot(uvc, uvc);
    return smoothstep(r - (r * 0.01), r + (r * 0.01), uvd * 9.0)
        - smoothstep(r - (r * 0.01), r + (r * 0.01), uvd * 4.0);
}

vec2 tile(in vec2 uv, in vec2 scale) {
    return fract(uv * scale);
}

float pick(in float picked, in vec2 pos, in vec2 coords) {
    vec2 pick = step(coords, pos) - step(coords + 0.01, pos);
    return picked + pick.x * pick.y;
}

void main() {
	vec2 uv = gl_FragCoord.xy / u_resolution;
    
    vec2 GRID = vec2(floor(
        abs(mod(u_time * 2. - 5.5, 10.0) - 5.0) + 0.5
    ) + 1.0);
    
    vec2 pos = floor(uv * GRID);

    uv = tile(uv, GRID);
    
    float picked = 0.0;
    picked = pick(picked, pos, vec2(0, 1));
    picked = pick(picked, pos, vec2(1, 2));
    picked = pick(picked, pos, vec2(1, 4));
    picked = pick(picked, pos, vec2(2, 1));
    picked = pick(picked, pos, vec2(3, 0));
    picked = pick(picked, pos, vec2(3, 3));
    picked = pick(picked, pos, vec2(4, 2));
    picked = pick(picked, pos, vec2(4, 5));
    picked = pick(picked, pos, vec2(5, 1));
    picked = pick(picked, pos, vec2(5, 4));

    vec3 color = vec3(mix(
        circle(uv, 0.5),
        cross(uv, 0.75),
        picked
    ));

	gl_FragColor = vec4(color, 1.0);
}
