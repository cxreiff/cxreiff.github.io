precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

float circle(in vec2 uv, in float radius, in vec2 center) {
    vec2 dist = uv - center;
    return 1. - smoothstep(
        radius - (radius * 0.01),
        radius + (radius * 0.01),
        dot(dist, dist) * 4.0
    );
}

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution;

    vec3 color = vec3(
        circle(uv, 0.4, vec2(
            0.5 - sin(u_time / 2.) / 12.,
            0.5 - sin(u_time / 2.) / 12.
        )),
        circle(uv,0.4,vec2(
            0.5 + sin(u_time / 2.) / 12.,
            0.5 - cos(u_time) / 12.
        )),
        circle(uv,0.4,vec2(
            0.5 - sin(u_time) / 12.,
            0.5 - cos(u_time / 2.) / 12.
        ))
    );

    gl_FragColor = vec4(color, 1.0);
}

