import React from 'react'
import { Icon } from '@iconify/react'

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

export default FollowMe
