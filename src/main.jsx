import React from 'react'
import './index.css'
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from './components/Common/Routes';
import App from './App';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);