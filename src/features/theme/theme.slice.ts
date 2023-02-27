import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const LOCAL_STORAGE_KEY = "theme";

export enum Theme {
  LIGHTMODE = "lightmode",
  GREENISH = "greenish",
  BLUISH = "bluish",
  DARKMODE = "darkmode",
}

type ThemeState = {
  theme: Theme;
  transitioning: boolean;
};

const initialState: ThemeState = {
  theme: Theme.LIGHTMODE,
  transitioning: false,
};

document.documentElement.classList.add(`theme--${Theme.LIGHTMODE}`);
const localStorageState = localStorage.getItem(LOCAL_STORAGE_KEY);
for (const theme of Object.values(Theme)) {
  if (theme === localStorageState) {
    initialState.theme = theme;
    document.documentElement.classList.remove(`theme--${Theme.LIGHTMODE}`);
    document.documentElement.classList.add(`theme--${theme}`);
  }
}

export const setTheme = createAsyncThunk(
  "theme/setTheme",
  async (theme: Theme) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
);

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setTheme.pending, (state, action) => {
      document.documentElement.classList.remove(`theme--${state.theme}`);
      document.documentElement.classList.add(`theme--${action.meta.arg}`);
      document.documentElement.classList.add("theme--transition");
      state.theme = action.meta.arg;
      localStorage.setItem(LOCAL_STORAGE_KEY, action.meta.arg);
      state.transitioning = true;
    });
    builder.addCase(setTheme.fulfilled, (state) => {
      document.documentElement.classList.remove("theme--transition");
      state.transitioning = false;
    });
  },
});

export default themeSlice.reducer;
