const React = require('react');
const AdminAdd = require("./AdminAdd");

module.exports = function Navbar() {
  return (
<nav className="py-2 bg-body-tertiary border-bottom">
    <div className="container d-flex flex-wrap">
                    
      <ul className="nav me-auto">
        <li className="nav-item"><a href="/" className="nav-link link-body-emphasis px-2 active" aria-current="page">Home</a></li>
        <li className="nav-item"><a href="user/favorites" className="nav-link link-body-emphasis px-2">Favorites</a></li>
        <li className="nav-item"><a href="/admin" className="nav-link link-body-emphasis px-2">Admin</a></li>

      </ul>
      <ul className="nav">
        <li className="nav-item"><a href="/authorization" className="nav-link link-body-emphasis px-2">Login</a></li>
        <li className="nav-item"><a href="/registration" className="nav-link link-body-emphasis px-2">Sign up</a></li>
      </ul>
    </div>
  </nav>
  );
}

