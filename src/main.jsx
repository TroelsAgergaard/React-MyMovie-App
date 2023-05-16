import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import DetailsView, { DetailsViewData } from "./pages/DetailsView";
import ErrorView from "./pages/ErrorView";
import ListView, { ListViewData } from "./pages/ListView";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index loader={ListViewData} element={<ListView />} />
      <Route
        path="/details/:id"
        loader={DetailsViewData}
        element={<DetailsView />}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
