import React from "react";

function Footer() {
  const tarih = new Date().getFullYear();
  return (
    <footer>
      <p>Copy © {tarih} </p>
    </footer>
  );
}

export default Footer;
