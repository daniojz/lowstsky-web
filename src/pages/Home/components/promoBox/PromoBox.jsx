import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const PromoBox = ({ title, imgUrl, pageUrl }) => {
  return (
    <>
      <div className='promoBoxContainer'>
        <Link to={pageUrl}>
          <img src={imgUrl}></img>
          <h1>{title}</h1>
        </Link>
      </div>
    </>
  )
}

PromoBox.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  pageUrl: PropTypes.string.isRequired,
}

export default PromoBox
