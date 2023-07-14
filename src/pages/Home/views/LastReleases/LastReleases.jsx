import { useTranslation } from 'react-i18next'
import SongCover from '../../components/SongCover/SongCover'

const LastReleases = () => {
  const [t, i18n] = useTranslation('home')

  return (
    <div className='lastReleasesContent'>
      <h1 className='lastReleasesTitle'>{t('lastReleases.title')}</h1>
      <div className='lastReleasesContainer'>
        <SongCover
          imgUrl={t('lastReleases.songCover1.imgUrl')}
          pageUrl={t('lastReleases.songCover1.pageUrl')}
        ></SongCover>
        <SongCover
          imgUrl={t('lastReleases.songCover2.imgUrl')}
          pageUrl={t('lastReleases.songCover2.pageUrl')}
        ></SongCover>
        <SongCover
          imgUrl={t('lastReleases.songCover3.imgUrl')}
          pageUrl={t('lastReleases.songCover3.pageUrl')}
        ></SongCover>
      </div>
    </div>
  )
}

export default LastReleases
