import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import history from './history'
import homepage from '~/src/features/homepage/homepage.slice'
import photos from '~/src/features/photos/photos.slice'

const router = connectRouter(history)

const middleware = getDefaultMiddleware().concat(
    routerMiddleware(history)
)

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  /* eslint-disable-next-line */
  const { logger } = require('redux-logger');
  middleware.push(logger);
}

const store = configureStore({
    reducer: {
        router,
        homepage,
        photos,
    },
    middleware,
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store