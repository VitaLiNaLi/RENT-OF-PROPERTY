const React = require("react");
// const Navbar = require("./Navbar");

module.exports = function Layout({ title, children}) {
  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        {/* <link rel="stylesheet" href="/styles/product.css" />
        <link rel="stylesheet" href="/styles/nav.css" />
        <script defer src="/scripts/productScript.js" />
        <script defer src="/scripts/orderScript.js" />
        <script defer src="/scripts/userScript.js" /> */}
        <link rel="stylesheet" href="/css/1.css" />
<script defer src="/js/userScript.js" />

      </head>
      {/* <Navbar user={user} /> */}
      <body>{children}</body>
    </html>
  );
};