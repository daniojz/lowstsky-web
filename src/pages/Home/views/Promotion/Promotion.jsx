import { React, useState } from "react";
import {useTranslation} from "react-i18next"
import PromoBox from "../../components/promoBox/PromoBox";

const Promotion = ({}) => {
  const [ t, i18n ] = useTranslation('home');

  return (
    <>
      <PromoBox title={t('promotion.promoBox1.title')} imgUrl={t('promotion.promoBox1.imgUrl')} pageUrl={t('promotion.promoBox1.pageUrl')}></PromoBox>
      <PromoBox title={t('promotion.promoBox2.title')} imgUrl={t('promotion.promoBox2.imgUrl')} pageUrl={t('promotion.promoBox2.pageUrl')}></PromoBox>
      <PromoBox title={t('promotion.promoBox3.title')} imgUrl={t('promotion.promoBox3.imgUrl')} pageUrl={t('promotion.promoBox3.pageUrl')}></PromoBox>
    </>
  );
};

export default Promotion;
