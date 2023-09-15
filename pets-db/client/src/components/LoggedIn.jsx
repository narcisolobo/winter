import { NavLink } from 'react-router-dom';

function LoggedIn() {
  return (
    <ul className="menu menu-horizontal px-1">
      <li>
        <NavLink to="/pets" end>
          All Pets
        </NavLink>
      </li>
      <li>
        <NavLink to="/pets/new" end>
          Add a Pet
        </NavLink>
      </li>
      <li>
        <details>
          <summary>kermit@thefrog.com</summary>
          <ul className="p-2 bg-base-100">
            <li>
              <a>My Profile</a>
            </li>
            <li>
              <a>Log out</a>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  );
}
export default LoggedIn;
