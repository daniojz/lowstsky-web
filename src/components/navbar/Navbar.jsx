import { useState, useEffect, useRef, React } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Icon } from "@iconify/react";

const Navbar = ({ }) => {
  const [t, i18n] = useTranslation('global');
  const [hidden, setHidden] = useState(true)

  const handleLogoOnClick = event => {
    hidden ? setHidden(false) : setHidden(true)
  };

  return (
    <nav id="navbar">
      <div className={`navbarContent ${hidden==true ? 'hidden' : 'show'}`}>
        <div className={`navbarShowButton`}>
          <button onClick={handleLogoOnClick}>
            <Icon icon="akar-icons:three-line-horizontal" width="35" height="35" />
          </button>
        </div>
        <div className="navbarOptions">
          <Link to="/home" onClick={() => window.location.reload()}>
            <a>{t('header.navbar.sobreMi')}</a>
          </Link>
          <Link to="/typeBeats" onClick={() => window.location.reload()}>
            <a>{t('header.navbar.typeBeats')}</a>
          </Link>
          <Link to="/" onClick={() => window.location.reload()}>
            <a>{t('header.navbar.beatsPersonalizados')}</a>
          </Link>
          <Link to="/" onClick={() => window.location.reload()}>
            <a>{t('header.navbar.mezclaMastering')}</a>
          </Link>
          <Link to="/" onClick={() => window.location.reload()}>
            <a>{t('header.navbar.produccionesColabs')}</a>
          </Link>
          <Link to="/" onClick={() => window.location.reload()}>
            <a>{t('header.navbar.artwork')}</a>
          </Link>
          <Link to="/" onClick={() => window.location.reload()}>
            <a>{t('header.navbar.contact')}</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar