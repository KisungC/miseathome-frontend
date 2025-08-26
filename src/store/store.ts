import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './api/authApi'
import userProfileReducer from './slices/authSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [authApi.reducerPath]: authApi.reducer,
      userProfile: userProfileReducer
    },
    middleware:(getDefaultMiddleware) =>
      getDefaultMiddleware().concat(authApi.middleware)
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']