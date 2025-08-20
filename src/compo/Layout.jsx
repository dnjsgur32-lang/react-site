import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import "../css/Layout.css";

function Layout() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="layoutContainer">
      <h2 className="heading">홈 페이지</h2>

      {/* 메뉴 열기/닫기 버튼 */}
      <button 
        className="menuToggleBtn" 
        onClick={() => setShowMenu(!showMenu)}
      >
        {showMenu ? "메뉴 닫기" : "메뉴 열기"}
      </button>

      {/* 사이드 메뉴 */}
      <nav className={`sidebar ${showMenu ? "show" : ""}`}>
        <ul>
          <li><Link to="/react-site/">Home</Link></li>
          <li><Link to="/react-site/login">Login</Link></li>
          <li><Link to="/react-site/work1">Work1</Link></li>
          <li><Link to="/react-site/about">About</Link></li>
          <li><Link to="/react-site/miniblog">MiniBlog</Link></li>
          <li><Link to="/react-site/book">Book</Link></li>
          <li><Link to="/react-site/clock">Clock</Link></li>
          <li><Link to="/react-site/comment">Comment</Link></li>
          <li><Link to="/react-site/notification">Notification</Link></li>
          <li><Link to="/react-site/accommodate">Accommodate</Link></li>
          <li><Link to="/react-site/confirmbutton">ConfirmButton</Link></li>
          <li><Link to="/react-site/attendancebook">AttendanceBook</Link></li>
          <li><Link to="/react-site/signup">SignUp</Link></li>
          <li><Link to="/react-site/temperatureinput">TemperatureInput</Link></li>
          <li><Link to="/react-site/profilecard">ProfileCard</Link></li>
          <li><Link to="/react-site/darkorlight">DarkOrLight</Link></li>
          <li><Link to="/react-site/blocks">Blocks</Link></li>
        </ul>
      </nav>

      {/* 메인 콘텐츠 */}
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
