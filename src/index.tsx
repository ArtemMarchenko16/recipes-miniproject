import React from "react";
import ReactDOM from "react-dom/client";
import {RouterProvider} from "react-router-dom";
import {routes} from "./routes/Routes";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
    <RouterProvider router={routes}/>

);
