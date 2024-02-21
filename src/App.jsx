import "./App.css";
import Halaman1 from "./pages/Halaman1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Halaman2 from "./pages/Halaman2";
import Halaman3 from "./pages/Halaman3";
import Halaman4 from "./pages/Halaman4";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Halaman1/>}/>
        <Route path="/halaman2" element={<Halaman2/>}/>
        <Route path="/halaman3" element={<Halaman3/>}/>
        <Route path="/halaman4" element={<Halaman4/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
