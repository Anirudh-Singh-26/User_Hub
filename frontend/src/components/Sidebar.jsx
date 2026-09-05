import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar" >
      <div className="sidebar-logo" >
        <h2 >UserHub</h2>
      </div>

      <nav className="sidebar-nav">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/users"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Users
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
