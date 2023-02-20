import { useState, useEffect, useRef, React } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Icon } from "@iconify/react";


const Navbar = ({ }) => {
  const [t, i18n] = useTranslation('global');
  const [hidden, sethidden] = useState(false);

  useEffect(() => {
    if (screen.width > 768) {
      sethidden({ ...state, view: "desktop" })

      const handleScroll = event => {
        window.scrollY > screen.height - 400 ? sethidden({ ...state, visibility: "hidden" }) : sethidden({ ...state, visibility: "show" })
        window.scrollY == 0 ? sethidden({ ...state, background: "transparent" }) : sethidden({ ...state, background: "gradient" })
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    } else {
      sethidden({ ...state, visibility: "hidden", view: "mobile" })
    }
  }, []);

  const handleLogoOnClick = event => {
    sethidden({ ...state, background: "dark", visibility: "show", view: "mobile" })
  };

  return (
    <nav id="navbar">
      <div className={`navbarShowButton ${hidden == true ? "hidden" : "show"}`}>
        <button onClick={handleLogoOnClick}>
          <Icon icon="akar-icons:three-line-horizontal" width="35" height="35" />
        </button>
      </div>
      <div className="navbarOptions">
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