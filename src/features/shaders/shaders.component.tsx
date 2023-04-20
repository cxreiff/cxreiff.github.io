import { FC } from "react";
import { useParams } from "react-router-dom";

import { Subnavigation } from "~src/common/subnavigation/subnavigation.component";
import { ShaderDemo } from "~src/common/shaderDemo/shaderDemo.component";
import { CATEGORIES, Category, SHADERS_LIST } from "./shadersList";

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
      {SHADERS_LIST[category].map((shaderProps, index) => (
        <ShaderDemo key={index} {...shaderProps} />
      ))}
    </section>
  );
};

export default Shaders;
