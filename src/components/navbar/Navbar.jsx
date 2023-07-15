import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Icon } from '@iconify/react'

const Navbar = () => {
  const [t, i18n] = useTranslation('global')
  const [hidden, setHidden] = useState(false)
  const [background, setBackground] = useState(false)

  useEffect(() => {
    const handleScroll = (event) => {
      window.scrollY > screen.height - 400 ? setHidden(true) : setHidden(false)
      window.scrollY === 0 ? setBackground(false) : setBackground(true)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleLogoOnClick = (event) => {
    setHidden(false)
  }

  return (
    <nav
      id='navbar'
      className={`${hidden === true ? 'navbarHidden' : ''} ${
        background === true ? 'backgroundNavbar' : ''
      }`}
    >
      <div className={`navbarContainer`}>
        <Link to='/home'>{t('header.navbar.home')}</Link>
        <Link to='/typeBeats'>{t('header.navbar.typeBeats')}</Link>
        <Link to='/'>{t('header.navbar.beatsPersonalizados')}</Link>
        <Link to='/'>{t('header.navbar.mezclaMastering')}</Link>
        <Link to='/'>{t('header.navbar.produccionesColabs')}</Link>
        <Link to='/'>{t('header.navbar.artwork')}</Link>
        <Link to='/'>{t('header.navbar.contact')}</Link>
      </div>
      <div className='navbarShowButton'>
        <button onClick={handleLogoOnClick}>
          <Icon
            icon='akar-icons:three-line-horizontal'
            width='35'
            height='35'
          />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
