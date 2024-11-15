import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { Provider } from "react-redux"
import createStore from "./app/store"
import { PersistGate } from "redux-persist/integration/react"
import Header from "../src/components/Header"
import CreateEmployee from "../src/pages/CreateEmployee/"
import EmployeeList from "../src/pages/EmployeeList/"
import Error from "../src/components/Error"
import "../src/sass/main.scss"

// Function in order to include the <Header /> in every page
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

// New way of creating the router with react-router-dom future update
const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <CreateEmployee /> },
        { path: "/employee-list", element: <EmployeeList /> },
        { path: "*", element: <Error /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
)

const { store, persistor } = createStore()
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RouterProvider router={router} future={{ v7_startTransition: true }}/>
    </PersistGate>
  </Provider>
)