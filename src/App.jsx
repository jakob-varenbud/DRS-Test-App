//---------IMPORTS------------\

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";

//---------MAIN------------\

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "login",
          element: <div>LOGIN TEST</div>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
export default App;
