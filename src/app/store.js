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

//Persistence configuration, unique key in order to have a unique store
const persistConfig = {
  key: "WealthHealthApp",
  storage,
}

//Allows to combine reducers, here we can use "employee"
const rootReducer = combineReducers({
  employee: employeeReducer,
})

//Creates a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

//Creates and configures the store
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

  //Allows to persist the store
  const persistor = persistStore(store)

  return { store, persistor }
}