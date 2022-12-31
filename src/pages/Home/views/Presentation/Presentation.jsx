import { React, useState } from "react";
import { useTranslation } from "react-i18next";
import FollowMe from "../../../../components/FollowMe/FollowMe";
import ScrollDownButton from "../../../../components/ScrollDownButton/ScrollDownButton";

const Presentation = ({}) => {
  const [ t, i18n ] = useTranslation(['global', 'home']);
  const [animationState, setAnimationState] = useState(1);

  const logoButtonClickHandler = () => {
    animationState === 1 ? setAnimationState(2) : setAnimationState(1);
  };

  return (
    <div className="presentationContent">
      <div className={`logoContainer`}>
        <img onClick={logoButtonClickHandler} className="logoContainer-icon" src="/lowstsky-icon.png"></img>
      </div>
      <div className={`presentationContainer ${animationState === 1 ? "presentationContainer-hidden" : "presentationContainer-show"}`}>
        <div className="presentationTextContent">
          <h2>{t('presentation.presentationText.greeting', { ns: 'home' })}</h2>
          <br></br>
          <p>{t('presentation.presentationText.presentationMessage', { ns: 'home' })}</p>
          <br></br>
          <p>{t('presentation.presentationText.presentationMessage', { ns: 'home' })}</p>
        </div>
        <div className="presentationContactContent">
          <br></br>
          <p>{t('contact.email.link')}</p>
          <p>Pantoja, Toledo, Castilla-La Mancha</p>
          <br></br>
        </div>
        <div className="presentationFollowMeContent">
            <FollowMe color="white"></FollowMe>
        </div>
      </div>
      <ScrollDownButton anchor="#promo"></ScrollDownButton>
    </div>
  );
};

export default Presentation;
