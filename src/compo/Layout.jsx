import { Link, Outlet } from "react-router-dom";
import '../css/Layout.css';

function Layout() {
  return (
    <div>
      <h2>홈 페이지</h2>
      <nav>
        <ul>
          <li><Link to="/react-site/">Home</Link></li>
          <li><Link to="/react-site/login">login</Link></li>
          <li><Link to="/react-site/work1">work1</Link></li>
          <li><Link to="/react-site/about">about</Link></li>
          <li><Link to="/react-site/miniblog">miniblog</Link></li>
          <li><Link to="/react-site/book">book</Link></li>
          <li><Link to="/react-site/clock">clock</Link></li>
          <li><Link to="/react-site/comment">comment</Link></li>
          <li><Link to="/react-site/notification">notification</Link></li>
          <li><Link to="/react-site/accommodate">accommodate</Link></li>
          <li><Link to="/react-site/ConfirmButton">ConfirmButton</Link></li>
          <li><Link to="/react-site/AttendanceBook">AttendanceBook</Link></li>
          <li><Link to="/react-site/SignUp">SignUp</Link></li>
          <li><Link to="/react-site/TemperatureInput">TemperatureInput</Link></li>
          <li><Link to="/react-site/Card">Card</Link></li>
          <li><Link to="/react-site/DarkOrLight">DarkOrLight</Link></li>
          <li><Link to="/react-site/Blocks">Blocks</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default Layout;
