import Homepage from '../pages/Homepage';
import Login from '../pages/Login';
import Userpage from '../pages/Userpage';
import '../styles/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userpage" element={<Userpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
