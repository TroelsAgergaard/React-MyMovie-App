import React from "react";
import ReactDOM from "react-dom/client";
import DetailsView from "./pages/DetailsView";
import ListView from "./pages/ListView";
import { loader as MovieDataLoader } from "./templates/NowShowing";
import ErrorView from "./pages/ErrorView";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index loader={MovieDataLoader} element={<ListView />} />
      <Route path="/details/:id" element={<DetailsView />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
