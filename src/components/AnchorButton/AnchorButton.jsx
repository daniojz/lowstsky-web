import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

/**
 *
 * @param {number} anchor element to scroll to when the users clicks on the icon
 * @param {string} color color of the icon
 *
 */
const AnchorButton = ({ anchor, color }) => {
  return (
    <a href={anchor} className={`anchorButtonContainer ${color}`}>
      <Icon icon='akar-icons:chevron-down' width='20' height='20' />
    </a>
  )
}

AnchorButton.propTypes = {
  anchor: PropTypes.string.isRequired,
  color: PropTypes.string,
}
AnchorButton.defaultProps = {
  color: 'grey',
}

export default AnchorButton
