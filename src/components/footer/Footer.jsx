import React from "react";
import FollowMe from "../FollowMe/FollowMe";
import FooterBox from "./footerBox/FooterBox";

export default function Footer({}) {
  const arr = ["one", "two", "three"];
  console.log(Array.isArray(arr));
  return (
    <footer>
      <FollowMe></FollowMe>
      <div className="footer_container">
        <FooterBox title={"hola"} links={arr}></FooterBox>
      </div>
    </footer>
  );
}
