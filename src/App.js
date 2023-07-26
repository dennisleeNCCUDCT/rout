import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AlbumLayout from "./pages/AlbumLayout";
import Albumindex from "./pages/Albumindex";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/album" element={<AlbumLayout />}>
            <Route index element={<Albumindex />}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
