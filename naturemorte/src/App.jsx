import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./pages/Layout/RootLayout";
import Landing from "./pages/Landing/Landing";
import About from "./pages/About/About";
import Vision from "./pages/Vision/Vision";
import Visit from "./pages/Visit/Visit";
import Park from "./pages/Park/Park";
import Grant from "./pages/Grant/Grant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route path="visit" element={<Visit />} />
          <Route path="park" element={<Park />} />
          <Route path="grant" element={<Grant />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
