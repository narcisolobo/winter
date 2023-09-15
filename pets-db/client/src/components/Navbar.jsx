import { Link } from 'react-router-dom';
import LoggedIn from './LoggedIn';
import LoggedOut from './LoggedOut';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          petsDb
        </Link>
      </div>
      <div className="flex-none">
        {/* <LoggedIn /> */}
        <LoggedOut />
      </div>
    </div>
  );
}
export default Navbar;
