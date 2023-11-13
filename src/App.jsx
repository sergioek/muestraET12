import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Comments } from "./components/Comments";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comentarios" element={<Comments />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
