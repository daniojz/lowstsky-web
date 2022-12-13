import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export default function Navbar({ showIcon }) {
  const [t, i18n] = useTranslation();

  return (
    <nav>
      <div className="navbar_container">
        <Link href="/sobre-mi">
          <a>SOBRE MI</a>
        </Link>
        <Link href="/">
          <a>TYPE BEATS</a>
        </Link>
        <Link href="/">
          <a>BEATS PERSONALIZADOS</a>
        </Link>
        <Link href="/">
          <a>MEZCLA Y MASTERING</a>
        </Link>
        <Link href="/">
          <a>PRODUCCIONES/COLABS</a>
        </Link>
        <Link href="/">
          <a>ARTWORK</a>
        </Link>
      </div>
      <div className={showIcon ? "icon" : "none"}>
        <Link href="/">
          <a>
            <img src="/lowstsky-icon.png"></img>
          </a>
        </Link>
      </div>
    </nav>
  );
}
