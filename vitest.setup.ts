import * as matchers from "@testing-library/jest-dom/matchers";
import createFetchMock from "vitest-fetch-mock";
import { expect, vi } from "vitest";

expect.extend(matchers);

const fetchMock = createFetchMock(vi);
fetchMock.enableMocks();
