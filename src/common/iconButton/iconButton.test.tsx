import { expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/preact";
import { Moon } from "lucide-preact";

import { IconButton } from "./iconButton.component";

test("should render", () => {
  const { container, getByRole } = render(
    <IconButton>
      <Moon />
    </IconButton>
  );

  expect(getByRole("button")).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

test("should respond to button event handlers", () => {
  const mockHandler = vi.fn();
  const { getByRole } = render(
    <IconButton onClick={mockHandler}>
      <Moon />
    </IconButton>
  );

  fireEvent.click(getByRole("button"));

  expect(mockHandler).toHaveBeenCalled();
});
