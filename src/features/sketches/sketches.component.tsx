import { useParams } from "react-router-dom";

import { IFrame } from "~src/common/iframe/iframe.component";
import { Subnavigation } from "~src/common/subnavigation/subnavigation.component";
import { BEVY_SKETCHES_URL } from "~src/utilities/constants";

const SKETCHES = ["1", "2", "3"] as const;
type SketchId = (typeof SKETCHES)[number];

const Sketches = () => {
  let { id } = useParams<{ id: SketchId }>();

  if (!(id && SKETCHES.includes(id))) {
    id = SKETCHES[0];
  }

  return (
    <section>
      <Subnavigation
        current={`/projects/sketches/${id}`}
        routes={SKETCHES.map((sketch) => ({
          route: `/projects/sketches/${sketch}`,
          label: sketch,
        }))}
      />
      <IFrame
        aspect={16 / 9}
        url={`${BEVY_SKETCHES_URL}?id=${id}`}
        title={"bevy sketch"}
      />
    </section>
  );
};

export default Sketches;
