import { createStore, applyMiddleware, compose } from 'redux'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import history from './history'
import homepage from '~/src/features/homepage/homepage.slice'

const router = connectRouter(history)

const middleware = [
    ...getDefaultMiddleware(),
    routerMiddleware(history),
];
 
if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middleware.push(logger);
}

const store = configureStore({
    reducer: {
        router,
        homepage,
    },
    middleware,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store

