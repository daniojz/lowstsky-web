import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import LanguageButton from '../languageButton/languageButton'
import FollowMe from '../FollowMe/FollowMe'

const navMenu = () => {
  const [t, i18n] = useTranslation('global')
  const location = useLocation()
  const [hidden, setHidden] = useState(true)
  const [background, setBackground] = useState(false)

  useEffect(() => {
    setNavMenuState(0)

    const handleScroll = (event) => {
      hidden === true && window.scrollY !== 0
        ? setBackground(true)
        : setBackground(false)
    }
    const handleResize = (event) => {
      const screenWith = window.screen.width
      console.log(hidden)
      if (screenWith >= 992 && hidden === false) {
        setNavMenuState(0)
        console.log(hidden)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleResize)
    }
  }, [location])

  const handleMenuButton = (event) => {
    if (hidden === false) {
      setNavMenuState(1)
    } else {
      setNavMenuState(2)
    }
  }

  const setNavMenuState = (state) => {
    switch (state) {
      case 0:
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
        setHidden(true)
        break
      case 1:
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
        setHidden(true)
        break
      case 2:
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
        setHidden(false)
        break
      default:
        break
    }
  }

  return (
    <div className={`${hidden === true ? 'navHidden' : ''}`}>
      <nav
        className={`navMenu ${background === true ? 'backgroundnavMenu' : ''}`}
      >
        <div className='navMenuContainer'>
          <div className='navMenuItem'>
            <Link to='/home'>{t('header.navMenu.home')}</Link>
          </div>
          <div className='navMenuItem'>
            <Link to='/typeBeats'>{t('header.navMenu.typeBeats')}</Link>
          </div>
          <div className='navMenuItem'>
            <Link to='/'>{t('header.navMenu.beatsPersonalizados')}</Link>
          </div>
          <div className='navMenuItem'>
            <Link to='/'>{t('header.navMenu.mezclaMastering')}</Link>
          </div>
          <div className='navMenuItem'>
            <Link to='/'>{t('header.navMenu.produccionesColabs')}</Link>
          </div>
          <div className='navMenuItem'>
            <Link to='/'>{t('header.navMenu.artwork')}</Link>
          </div>
          <div className='navMenuItem'>
            <Link to='/'>{t('header.navMenu.contact')}</Link>
          </div>
        </div>
        <div className='navSocial'>
          <FollowMe></FollowMe>
        </div>
      </nav>
      <div className={`navBar`}>
        <LanguageButton
          handleClick={() => i18n.changeLanguage('en')}
        ></LanguageButton>
        <div className='navBarButton'>
          <button onClick={handleMenuButton}>
            {hidden ? (
              <Icon
                icon='akar-icons:three-line-horizontal'
                width='40'
                height='40'
              />
            ) : (
              <Icon icon='akar-icons:x-small' width='40' height='40' />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

export default navMenu
