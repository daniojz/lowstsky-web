import {useState, useEffect, React} from "react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { Icon } from "@iconify/react";


const Navbar = ({}) => {
  const [ t, i18n ] = useTranslation('global');
  const [hidden, setHidden] = useState(false);
  let scrollY = 0;

  useEffect(() => {
    const handleScroll = event => {
      window.scrollY>screen.height-86 ? setHidden(true) : setHidden(false)
      scrollY = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogoOnClick = event => {
    setHidden(false)
  };

  return (
    <nav className={`${hidden==true ? 'navbarHidden' : ''}`}>
      <div className={`navbarContainer`}>
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
      <div className="navbarShowButton">
        <button onClick={handleLogoOnClick}>
          <Icon icon="akar-icons:three-line-horizontal" width="35" height="35" />
        </button>
      </div>
    </nav>
  );
}

export default Navbar