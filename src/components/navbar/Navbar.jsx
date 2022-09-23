import React from "react";

export default function Navbar({}) {
  return (
    <nav>
      <div className="content">
        <a href="">SOBRE MI</a>
        <a href="">TYPE BEATS</a>
        <a href="">BEATS PERSONALIZADOS</a>
        <a href="">MEZCLA Y MASTERING</a>
        <a href="">PRODUCCIONES/COLABS</a>
        <a href="">ARTWORK</a>
      </div>
      <div className="icon">
        <a href="">
          <img src="/lowstsky-icon.png"></img>
        </a>
      </div>
    </nav>
  );
}
