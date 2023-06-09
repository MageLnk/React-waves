import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import ShoppingPage from "../02-component-patterns/pages/ShoppingPage";
// Routes

// Components

// Styles
import logo from "../logo.svg";
// App
const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Shopping
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({ isActive }) => (isActive ? "nav-active" : "")}>
                Users
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ShoppingPage />} />
          <Route path="/about" element={<h1>Users</h1>} />
          <Route path="/users" element={<h1>Home</h1>} />

          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
