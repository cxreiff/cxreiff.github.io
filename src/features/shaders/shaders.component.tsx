import { FC } from "react";
import { useParams } from "react-router-dom";

import { Subnavigation } from "~src/common/subnavigation/subnavigation.component";
import { CodeDemo } from "~src/common/codeDemo/codeDemo.component";
import { CATEGORIES, Category, SHADERS_LIST } from "./shadersList";
import { ShaderView } from "~src/common/shaderView/shaderView.component";

const Shaders: FC = () => {
  let { category } = useParams<{ category: Category }>();

  if (!(category && CATEGORIES.includes(category))) {
    category = CATEGORIES[0];
  }

  return (
    <section>
      <Subnavigation
        current={`/projects/shaders/${category}`}
        routes={CATEGORIES.map((nav_category) => ({
          route: `/projects/shaders/${nav_category}`,
          label: nav_category,
        }))}
      />
      {SHADERS_LIST[category].map(({ procedure, code }, index) => (
        <CodeDemo key={index} excerpts={code}>
          <ShaderView procedure={procedure} />
        </CodeDemo>
      ))}
    </section>
  );
};

export default Shaders;
