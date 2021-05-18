import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type HomepageState = {
    counter: number,
}

type IncrementPayload = {
    interval: number,
}

const initialState: HomepageState = {
    counter: 0,
}

const homepageSlice = createSlice({
    name: 'homepage',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<IncrementPayload>) => {
            const { interval } = action.payload
            state.counter += interval
        },
    },
})

export const {
    increment,
} = homepageSlice.actions

export default homepageSlice.reducer
