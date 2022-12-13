import React from "react";
import { Icon } from "@iconify/react";

export default function FollowMe({}) {
  return (
    <div className="followMe_container">
      <span>
        <a href="">
          <Icon icon="akar-icons:github-fill" width="25" height="25" />
        </a>
      </span>
      <span>
        <a href="">
          <Icon icon="akar-icons:instagram-fill" width="25" height="25" />
        </a>
      </span>
      <span>
        <a href="">
          <Icon icon="akar-icons:twitter-fill" width="25" height="25" />
        </a>
      </span>
      <span>
        <a href="">
          <Icon icon="akar-icons:soundcloud-fill" width="25" height="25" />
        </a>
      </span>
      <span>
        <a href="">
          <Icon icon="akar-icons:youtube-fill" width="25" height="25" />
        </a>
      </span>
    </div>
  );
}
