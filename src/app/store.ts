import { createStore, applyMiddleware, compose } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import history from './history'
import homepage from 'src/features/homepage/homepage.slice'

const router = connectRouter(history)

const store = configureStore({
    reducer: {
        router,
        homepage,
    },
    middleware: [
        ...getDefaultMiddleware(),
        routerMiddleware(history),
    ],
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store

