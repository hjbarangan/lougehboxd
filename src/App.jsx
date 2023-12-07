import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import  Homepage  from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
