import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const LOCAL_STORAGE_KEY = 'theme'

export enum Theme {
    REDDISH = 'reddish',
    GREENISH = 'greenish',
    BLUISH = 'bluish',
}

type ThemeState = {
    theme: Theme,
    transitioning: boolean,
}

const initialState: ThemeState = {
    theme: Theme.REDDISH,
    transitioning: false,
}

const localStorageState = localStorage.getItem(LOCAL_STORAGE_KEY)
for (const theme of Object.values(Theme)) {
    if (theme === localStorageState) {
        initialState.theme = theme
    }
}

export const setTheme = createAsyncThunk(
    'theme/setTheme',
    async (theme: Theme) => {
        await new Promise(resolve => setTimeout(resolve, 200))
    },
)

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setTheme.pending, (state, action) => {
            state.theme = action.meta.arg
            localStorage.setItem(LOCAL_STORAGE_KEY, action.meta.arg)
            state.transitioning = true
        })
        builder.addCase(setTheme.fulfilled, (state) => {
            state.transitioning = false
        })
    },
})

export default themeSlice.reducer
