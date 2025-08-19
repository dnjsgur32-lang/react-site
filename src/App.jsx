import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './compo/Layout'
import Login from './compo/Login'
import Home from './compo/Home'
import Work1 from './compo/Work1.jsx'
import About from './compo/About'
import "./App.css";
import MiniBlog from "./comp_miniblog/MiniBlog.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>과제방</h1>
        <Routes>
          <Route path="/react-site/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="work1" element={<Work1 />} />
            <Route path="about" element={<About />} />
            <Route path="miniblog/*" element={<MiniBlog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;