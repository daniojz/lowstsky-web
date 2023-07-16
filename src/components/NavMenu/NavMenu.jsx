import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import LanguageButton from '../languageButton/languageButton'

const navMenu = () => {
  const [t, i18n] = useTranslation('global')
  const [hidden, setHidden] = useState(false)
  const [background, setBackground] = useState(false)

  useEffect(() => {
    const handleScroll = (event) => {
      screen.width > 992 && window.scrollY === 0
        ? setBackground(false)
        : setBackground(true)
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleMenu = (event) => {
    hidden === true ? setHidden(false) : setHidden(true)
  }

  return (
    <div className={`${hidden === true ? 'navHidden' : ''}`}>
      <nav
        className={`navMenu ${background === true ? 'backgroundnavMenu' : ''}`}
      >
        <div className={`navMenuContainer`}>
          <Link to='/home'>{t('header.navMenu.home')}</Link>
          <Link to='/typeBeats'>{t('header.navMenu.typeBeats')}</Link>
          <Link to='/'>{t('header.navMenu.beatsPersonalizados')}</Link>
          <Link to='/'>{t('header.navMenu.mezclaMastering')}</Link>
          <Link to='/'>{t('header.navMenu.produccionesColabs')}</Link>
          <Link to='/'>{t('header.navMenu.artwork')}</Link>
          <Link to='/'>{t('header.navMenu.contact')}</Link>
        </div>
      </nav>
      <div className='navbar'>
        <LanguageButton></LanguageButton>
        <div className='navMenuButton'>
          <button onClick={handleMenu}>
            <Icon
              icon='akar-icons:three-line-horizontal'
              width='40'
              height='40'
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default navMenu
