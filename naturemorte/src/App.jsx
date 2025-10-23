import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Layout/RootLayout";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Vision from "./pages/Vision/Vision";
import Visit from "./pages/Visit/Visit";
import Park from "./pages/Park/Park";
import Grant from "./pages/Grant/Grant";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        { path: "about", element: <About /> },
        { path: "vision", element: <Vision /> },
        { path: "visit", element: <Visit /> },
        { path: "park", element: <Park /> },
        { path: "grant", element: <Grant /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
