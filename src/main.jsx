import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TaskList from "./components/TaskList.jsx";
import AiIRecommendations from "./components/AiIRecommendations.jsx";
import LoginSignup from "./components/LoginSignup.jsx";
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginSignup />,
  },
  {
    path: "/homepage",
    element: <App />,
    children: [
      {
        path: "tasklist",
        element: <TaskList />,
      },
      {
        path: "ai-recommendations",
        element: <AiIRecommendations/>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
