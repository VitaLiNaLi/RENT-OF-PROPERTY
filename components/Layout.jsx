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
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossOrigin="anonymous" />
        <script defer src="/js/updateInput.js" />

      </head>
      {/* <Navbar user={user} /> */}
      <body>{children}</body>
    </html>
  );
};