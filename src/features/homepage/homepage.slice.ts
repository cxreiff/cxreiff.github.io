import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type HomepageState = {
    counter: number,
}

type IncrementPayload = {
    interval: number,
}

type DecrementPayload = {
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
        decrement: (state, action: PayloadAction<DecrementPayload>) => {
          const { interval } = action.payload
          state.counter -= interval
        },
    },
})

export const {
    increment,
    decrement,
} = homepageSlice.actions

export default homepageSlice.reducer
