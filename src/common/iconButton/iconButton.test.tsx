import { expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/preact";
import { MoonIcon } from "lucide-preact";

import { IconButton } from "./iconButton.component";

test("should render", () => {
  const { container, getByRole } = render(
    <IconButton>
      <MoonIcon />
    </IconButton>
  );

  expect(getByRole("button")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

test("should respond to button event handlers", () => {
  const mockHandler = vi.fn();
  const { getByRole } = render(
    <IconButton onClick={mockHandler}>
      <MoonIcon />
    </IconButton>
  );

  fireEvent.click(getByRole("button"));

  expect(mockHandler).toHaveBeenCalled();
});
