import React from 'react';

function Navbar() {
  return (
    <nav style={navStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <a href="/" style={linkStyle}>Home</a>
        </li>
        <li style={liStyle}>
          <a href="/about" style={linkStyle}>About</a>
        </li>
        <li style={liStyle}>
          <a href="/services" style={linkStyle}>Services</a>
        </li>
        <li style={liStyle}>
          <a href="/contact" style={linkStyle}>Contact</a>
        </li>
      </ul>
    </nav>
  );
}

// CSS styles
const navStyle = {
  backgroundColor: 'white',
};

const ulStyle = {
  display: 'flex',
  listStyle: 'none',
  padding: 20,
};

const liStyle = {
  marginRight: '20px',
};

const linkStyle = {
  color: 'purple',
  fontWeight: 'bold',
  textDecoration: 'none',
};

export default Navbar;
