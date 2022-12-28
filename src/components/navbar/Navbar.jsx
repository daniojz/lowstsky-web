import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

const Navbar = ({}) => {
  const [t, i18n] = useTranslation();

  return (
    <nav>
      <div className="navbar_container">
        <Link href="/home">
          <a>HOME</a>
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
        <Link href="/">
          <a>CONTACT</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar