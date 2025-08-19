import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Library from "./comp_03/Library.jsx";
import Clock from "./comp_04/Clock.jsx";
import CommentList from "./comp_05/CommentList.jsx";
import MiniBlog from "./comp_miniblog/MiniBlog.jsx";
import About from './compo/About';
import Home from './compo/Home';
import Layout from './compo/Layout';
import Login from './compo/Login';
import Work1 from './compo/Work1.jsx';
import NotificationList from "./comp_06/NotificationList";
import Accommodate from "./comp_07/Accommodate.jsx";
import ConfirmButton from "./comp_08/ConfirmButton.jsx";
import LandingPage from "./comp_09/LandingPage.jsx";
import AttendanceBook from "./comp_10/AttendanceBook.jsx";
import SignUp from "./comp_11/SignUp.jsx";
import TemperatureInput from "./comp_12/TemperatureInput.jsx";
import DarkOrLight from "./comp_14/DarkOrLight.jsx";
import Blocks from "./comp_15/Blocks.jsx";
import Card from "./comp_13/Card.jsx";

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
            <Route path="book/*" element={<Library />} />
            <Route path="clock/*" element={<Clock />} />
            <Route path="comment/*" element={<CommentList />} />
            <Route path="notification/*" element={<NotificationList />} />
            <Route path="accommodate/*" element={<Accommodate />} />
            <Route path="confirmbutton/*" element={<ConfirmButton />} />
            <Route path="landingpage/*" element={<LandingPage />} />
            <Route path="AttendanceBook/*" element={<AttendanceBook />} />
            <Route path="SignUp/*" element={<SignUp />} />
            <Route path="TemperatureInput/*" element={<TemperatureInput />} />
            <Route path="Card/*" element={<Card />} />
            <Route path="DarkOrLight/*" element={<DarkOrLight />} />
            <Route path="Blocks/*" element={<Blocks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;