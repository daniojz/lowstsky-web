import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const SongCover = ({ imgUrl, pageUrl }) => {
  return (
    <>
      <Link to={pageUrl}>
        <div className='songCoverContainer'>
          <img className='songCoverImg' src={imgUrl}></img>
        </div>
      </Link>
    </>
  )
}

SongCover.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
}

export default SongCover
