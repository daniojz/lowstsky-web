import React from "react";
import { Icon } from "@iconify/react";

const FollowMe = ({color}) => {
  let colorClass = "grey"

  switch (color) {
    case 'white':
      colorClass = "white"
      break;
    case 'black':
      colorClass = "black"
      break;
    case 'grey':
      colorClass = "grey"
      break;        
  }

  return (
    <div className={`followMeContainer ${colorClass}`}>
      <span>
        <a href="">
          <Icon icon="akar-icons:github-fill" width="20" height="20" />
        </a>
      </span>
      <span>
        <a href="">
          <Icon icon="akar-icons:instagram-fill" width="20" height="20" />
        </a>
      </span>
      <span>
        <a href="">
          <Icon icon="akar-icons:twitter-fill" width="20" height="20" />
        </a>
      </span>
      <span>
        <a href="">
          <Icon icon="akar-icons:soundcloud-fill" width="20" height="20" />
        </a>
      </span>
      <span>
        <a href="">
          <Icon icon="akar-icons:youtube-fill" width="20" height="20" />
        </a>
      </span>
    </div>
  );
}

export default FollowMe