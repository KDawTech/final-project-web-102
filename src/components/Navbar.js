import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">HobbyHub</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/feed">Feed</Link>
        <Link to="/create">Create Post</Link>
      </div>
    </nav>
  );
}
