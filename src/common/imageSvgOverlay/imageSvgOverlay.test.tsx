import { test, expect } from "vitest";
import { render } from "@testing-library/preact";

import { ImageSvgOverlay } from "./imageSvgOverlay.component";
import { IMAGE_URLS } from "src/utilities/constants";

test("should render", () => {
  const { container } = render(
    <ImageSvgOverlay aspect={3 / 2} source={IMAGE_URLS.ABOUT_ME}>
      <svg />
    </ImageSvgOverlay>
  );

  expect(container).toMatchSnapshot();
});
