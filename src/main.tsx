import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./index.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import RequirAuth from "./halpers/RequirAuth";
import { Provider } from "react-redux";
import store from "./redux/store";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <RequirAuth>
                <Home />
            </RequirAuth>
        ),
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "*",
        element: <h1>404</h1>,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
