import React from "react";

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    position: "sticky",
    bottom: 0,
    left: 0,
    width: "100%",
    background: "rgba(0, 0, 0, 0.75)",
    color: "#ffffff",
    padding: "14px 24px",
    zIndex: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backdropFilter: "blur(6px)",
  };

  const linkStyle: React.CSSProperties = {
    color: "#ffffff",
    textDecoration: "none",
    marginLeft: "16px",
    fontWeight: 500,
  };

  return (
    <footer style={footerStyle}>
      <div>
        Hostaria Germoglio
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", justifyContent: "flex-end" }}>
        <span>Partita IVA: 12345678901</span>
        <nav style={{ display: "flex", alignItems: "center" }}>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            Instagram
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            Facebook
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>
            TikTok
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
