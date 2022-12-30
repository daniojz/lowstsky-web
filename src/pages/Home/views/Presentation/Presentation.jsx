import { React, useState } from "react";
import FollowMe from "../../../../components/FollowMe/FollowMe";

const Presentation = ({}) => {
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
          <h2>Hola!</h2>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            qui officiis totam ea. Vel, omnis ad quas atque rerum vitae, cum sit
            animi modi earum minus recusandae esse officiis odit? /n
            asodfjasodifj Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Provident qui officiis totam ea. Vel, omnis ad quas atque
            rerum vitae, cum sit animi modi earum minus recusandae esse officiis
            odit? /n asodfjasodifj 
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            qui officiis totam ea. Vel, omnis ad quas atque rerum vitae, cum sit
            animi modi earum minus recusandae esse officiis odit? /n
            asodfjasodifj Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Provident qui officiis totam ea. Vel, omnis ad quas atque
            rerum vitae, cum sit animi modi earum minus recusandae esse officiis
            odit? /n asodfjasodifj
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident
            qui officiis totam ea. Vel, omnis ad quas atque rerum vitae, cum sit
            animi modi earum minus recusandae esse officiis odit? /n
            asodfjasodifj Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Provident qui officiis totam ea. Vel, omnis ad quas atque
            rerum vitae, cum sit animi modi earum minus recusandae esse officiis
            odit? /n asodfjasodifj
          </p>
        </div>
        <div className="presentationContactContent">
          <br></br>
          <p>lowstskymusic@gmail.com</p>
          <p>Pantoja, Toledo, Castilla-La Mancha</p>
          <br></br>
        </div>
        <div className="presentationFollowMeContent">
            <FollowMe color="white"></FollowMe>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
