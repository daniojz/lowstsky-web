import React from "react";
import FollowMe from "../FollowMe/FollowMe";
import FooterBox from "./footerBox/FooterBox";
import {useTranslation} from "react-i18next"

const Footer = ({}) => {
  const [ t, i18n ] = useTranslation('global');

  return (
    <div className="footerContent">
      <FollowMe className="followMeContainer" color={"white"}></FollowMe>
        <div className="footerContainer">
          <FooterBox title={t('footer.footerBox.footerBox1.title')} links={t('footer.footerBox.footerBox1.links')}></FooterBox>
          <FooterBox title={t('footer.footerBox.footerBox2.title')} links={t('footer.footerBox.footerBox2.links')}></FooterBox>
          <FooterBox title={t('footer.footerBox.footerBox3.title')} links={t('footer.footerBox.footerBox3.links')}></FooterBox>
          <FooterBox title={t('footer.footerBox.footerBox4.title')} links={t('footer.footerBox.footerBox4.links')}></FooterBox>
        </div>
    </div>
  );
}

export default Footer