import { FC } from "react";

import { ShaderDemo } from "~src/common/shaderDemo/shaderDemo.component";
import vertexShader from "~src/assets/shaders/test.vert";
import fragmentShader from "~src/assets/shaders/test.frag";

const Shaders: FC = () => (
  <section>
    <ShaderDemo
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      position={[
        [-1, -1],
        [1, -1],
        [1, 1],
        [-1, -1],
        [-1, 1],
        [1, 1],
      ]}
    />
  </section>
);

export default Shaders;
