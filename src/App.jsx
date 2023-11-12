//---------IMPORTS------------\

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//---------MAIN------------\

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h1>Home</h1>
          <p>This is the home page</p>
        </>
      ),
    },
  ]);

  return <></>;
}
export default App;
