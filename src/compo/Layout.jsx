import { Link, Outlet } from "react-router-dom";
import '../css/Layout.css';

function Layout() {
  return (
    <div>
      <h2>홈 페이지</h2>
      <nav>
        <ul>
          <li><Link to="/react-site/">Home</Link></li>
          <li><Link to="/react-site/login">Login</Link></li>
          <li><Link to="/react-site/work1">Work1</Link></li>
          <li><Link to="/react-site/about">About</Link></li>
          <li><Link to="/react-site/miniblog">MiniBlog</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
export default Layout;
