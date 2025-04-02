import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex space-x-4 justify-end bg-amber-900 text-amber-200 p-4 font-bold">
      <Link to="/">Home</Link>

      <Link to="/owner">Owner</Link>
      <Link to="/user">User</Link>
      <Link to="/admin">Admin</Link>
    </nav>
  );
};

export default Navbar;
