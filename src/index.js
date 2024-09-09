import React from "react"
import ReactDOM from "react-dom/client"
import Router from "./components/Router"
//import { Provider } from "react-redux"
//import createStore from "./app/store"
//import { PersistGate } from "redux-persist/integration/react"

const root = ReactDOM.createRoot(document.getElementById('root'))
//const { store, persistor } = createStore()
root.render(
  //<Provider store={store}>
    //<PersistGate loading={null} persistor={persistor}>
      <Router />
    //</PersistGate>
  //</Provider>
)