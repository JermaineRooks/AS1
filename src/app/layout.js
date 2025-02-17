'use client';

import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import './globals.css'; // Global styles

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Welcome to My Next.js App</title>
      </head>
      <body style={bodyStyle}>

        {/* Header with navigation */}
        <header style={headerStyle}>
          <h1>Welcome to My Next.js App!</h1>
          <nav style={navStyle}>
            <ul style={navListStyle}>
              <li style={navItemStyle}>
                <Link href="/" style={navLinkStyle}>Home</Link>
              </li>
              <li style={navItemStyle}>
                <Link href="/about" style={navLinkStyle}>About</Link>
              </li>
              <li style={navItemStyle}>
                <Link href="/contact" style={navLinkStyle}>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content */}
        <main style={mainStyle}>
          {children} {/* This will render the page-specific content */}
        </main>

        {/* Footer */}
        <footer style={footerStyle}>
          <p style={footerTextStyle}>© 2025 My Next.js App</p>
        </footer>

      </body>
    </html>
  );
};

const bodyStyle = {
  fontFamily: 'Arial, sans-serif',
  margin: '0',
  padding: '0',
  backgroundColor: '#1d1f20',
  color: '#e0e0e0',
};

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const navStyle = {
  marginTop: '20px',
};

const navListStyle = {
  listStyle: 'none',
  padding: '0',
  margin: '0',
  display: 'flex',
  justifyContent: 'center',
};

const navItemStyle = {
  margin: '0 15px',
};

const navLinkStyle = {
  color: '#4caf50',
  textDecoration: 'none',
  fontSize: '18px',
  fontWeight: 'bold',
};

const mainStyle = {
  padding: '40px',
  backgroundColor: '#f4f4f4',
  textAlign: 'center',
  borderTop: '5px solid #4caf50',
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

const footerTextStyle = {
  fontSize: '14px',
};

export default Layout;