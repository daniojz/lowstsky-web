import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SongCover = ({ imgUrl, pageUrl }) => {
  return (
    <div className='songCoverContainer'>
      <Link to={pageUrl}>
        <img className='songCoverImg' src={imgUrl}></img>
      </Link>
    </div>
  )
}

SongCover.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
}

export default SongCover
