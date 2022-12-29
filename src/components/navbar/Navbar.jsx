import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

const Navbar = ({}) => {
  const [ t, i18n ] = useTranslation('global');

  return (
    <nav>
      <div className="navbar_container">
        <Link href="/home">
          <a>{t('header.navbar.sobreMi')}</a>
        </Link>
        <Link href="/typeBeats">
          <a>{t('header.navbar.typeBeats')}</a>
        </Link>
        <Link href="/">
          <a>{t('header.navbar.beatsPersonalizados')}</a>
        </Link>
        <Link href="/">
          <a>{t('header.navbar.mezclaMastering')}</a>
        </Link>
        <Link href="/">
          <a>{t('header.navbar.produccionesColabs')}</a>
        </Link>
        <Link href="/">
          <a>{t('header.navbar.artwork')}</a>
        </Link>
        <Link href="/">
          <a>{t('header.navbar.contact')}</a>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar