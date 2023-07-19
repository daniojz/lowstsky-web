import { Icon } from '@iconify/react'
import PropTypes from 'prop-types'

const FollowMe = ({ color }) => {
  return (
    <div className={`followMeContainer ${color}`}>
      <span>
        <a href=''>
          <Icon icon='akar-icons:github-fill' width='20' height='20' />
        </a>
      </span>
      <span>
        <a href=''>
          <Icon icon='akar-icons:instagram-fill' width='20' height='20' />
        </a>
      </span>
      <span>
        <a href=''>
          <Icon icon='akar-icons:twitter-fill' width='20' height='20' />
        </a>
      </span>
      <span>
        <a href=''>
          <Icon icon='akar-icons:soundcloud-fill' width='20' height='20' />
        </a>
      </span>
      <span>
        <a href=''>
          <Icon icon='akar-icons:youtube-fill' width='20' height='20' />
        </a>
      </span>
    </div>
  )
}

FollowMe.propTypes = {
  color: PropTypes.string,
}

export default FollowMe
