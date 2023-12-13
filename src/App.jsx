import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/Login";
import  Homepage  from "./pages/Home";
import  { ManageProfiles }  from "./pages/ManageProfiles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ManageProfiles" element={<ManageProfiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
