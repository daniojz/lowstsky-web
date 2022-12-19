import React from "react";

export default function FooterBox({ title, links }) {
  return (
    <div className="footerBox_container">
      <h1>{title}</h1>
      {Array.isArray(links)
        ? links.map((link) => {
            return <a href={link}>{link}</a>;
          })
        : null}
    </div>
  );
}
