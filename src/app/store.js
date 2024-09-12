import { configureStore } from "@reduxjs/toolkit"
import employeeReducer from "../redux/employeeSlice.js"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import { combineReducers } from "redux"

const persistConfig = {
  key: "root",
  storage,
}

const rootReducer = combineReducers({
  employee: employeeReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function createStore() {
  const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })

  const persistor = persistStore(store)

  return { store, persistor }
}