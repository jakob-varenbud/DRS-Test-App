//---------IMPORTS------------\

import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";

//---------MAIN------------\

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>HOEMTET</div>,
    },
  ]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
