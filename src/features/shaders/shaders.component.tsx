import { useParams } from "react-router-dom";
import cn from "classnames";

import { Subnavigation } from "src/common/subnavigation/subnavigation.component";
import { CodeDemo } from "src/common/codeDemo/codeDemo.component";
import { CATEGORIES, Category, SHADERS_LIST } from "./shadersList";
import { ShaderView } from "src/common/shaderView/shaderView.component";
import { Toggle } from "src/common/toggle/toggle.component";
import { useLocalStorage } from "src/hooks/useLocalStorage";

import styles from "./shaders.module.scss";

const Shaders = () => {
  const [codeVisible, setCodeVisible] = useLocalStorage(
    "SHADER_CODE_VISIBLE",
    true
  );
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
        options={[
          <Toggle
            key={"show_code"}
            className={styles.toggle}
            value={codeVisible}
            setter={setCodeVisible}
          >
            show code
          </Toggle>,
        ]}
      />
      <div
        className={cn(styles.shader_list, {
          [styles.code_visible]: codeVisible,
        })}
      >
        {SHADERS_LIST[category].map(({ procedure, code }, index) =>
          codeVisible ? (
            <CodeDemo key={`${category!}${index}`} excerpts={code}>
              <ShaderView procedure={procedure} />
            </CodeDemo>
          ) : (
            <ShaderView key={index} procedure={procedure} />
          )
        )}
      </div>
    </section>
  );
};

export default Shaders;
