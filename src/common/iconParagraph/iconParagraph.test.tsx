import { test, expect } from "vitest";
import { render } from "@testing-library/preact";
import { MoonIcon } from "lucide-preact";

import { IconParagraph } from "./iconParagraph.component";

test("should render", () => {
  const { container, getByRole, getByText } = render(
    <IconParagraph icon={<MoonIcon role={"img"} />}>TEST</IconParagraph>
  );

  expect(getByRole("img")).toBeInTheDocument();
  expect(getByText("TEST")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});
