import { test, expect } from "vitest";
import { render } from "@testing-library/preact";

import { Frame } from "./frame.component";
import styles from "./frame.module.scss";

test("should render", () => {
  const { container, getByAltText } = render(
    <Frame
      aspect={16 / 9}
      loading={false}
      className={"test"}
      style={{ background: "red" }}
    >
      <img src={"test"} alt={"test"} />
    </Frame>
  );

  expect(getByAltText("test")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

test("should constrain size to provided aspect ratio", () => {
  const { container, rerender } = render(
    <Frame aspect={9 / 16}>
      <img src={"test"} alt={"test"} />
    </Frame>
  );

  expect(container.firstElementChild?.lastElementChild).toBeInTheDocument();
  expect(
    container.firstElementChild!.lastElementChild!.getAttribute("viewBox")
  ).toEqual(`0 0 ${9 / 16} 1`);

  rerender(
    <Frame aspect={16 / 9}>
      <img src={"test"} alt={"test"} />
    </Frame>
  );

  expect(container.firstElementChild?.lastElementChild).toBeInTheDocument();
  expect(
    container.firstElementChild!.lastElementChild!.getAttribute("viewBox")
  ).toEqual(`0 0 ${16 / 9} 1`);
});

test("should hide when loading prop is true", () => {
  const { container } = render(
    <Frame aspect={9 / 16} loading={true}>
      <img src={"test"} alt={"test"} />
    </Frame>
  );

  expect(container.firstElementChild).toBeInTheDocument();
  expect(container.firstElementChild!).toHaveClass(styles.hidden);
  expect(container).toMatchSnapshot();
});
