const React = require('react');

module.exports = function Footer() {
  return (
    <footer id="footer" className="pt-3 m-4 text-center">
      {`© SOS Tehnologies ${new Date().getFullYear()}`}
   
    </footer>
  );
}

