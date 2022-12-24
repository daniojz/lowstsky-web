import { React, useState } from "react";

export default function Home({}) {
  const [animationState, setAnimationState] = useState(1);

  const logoButtonClickHandler = () => {
    animationState === 1 ? setAnimationState(2) : setAnimationState(1);
  };

  return (
    <>
      <section className="homeSection">
        <div className="homeContainer">
          <div className="homeContent">
            <div
              className={`logoButton ${
                animationState === 1 ? "logoButton-state1" : "logoButton-state2"
              }`}
            >
              <span onClick={logoButtonClickHandler} className="">
                <img
                  className="homeSection-icon"
                  src="/lowstsky-icon.png"
                ></img>
              </span>
            </div>
            <div
              className={`presentationContainer ${
                animationState === 1
                  ? "presentationContainer-hidden"
                  : "presentationContainer-show"
              }`}
            >
              <div className="presentationImgContent">
                <img src="https://firebasestorage.googleapis.com/v0/b/lowstsky-web.appspot.com/o/1671796280790.jpg?alt=media&token=af1aecee-5bf6-4d78-a39a-4c218db0fdbf"></img>
              </div>
              <div className="presentationTextContent">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Provident qui officiis totam ea. Vel, omnis ad quas atque
                  rerum vitae, cum sit animi modi earum minus recusandae esse
                  officiis odit? /n asodfjasodifj Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Provident qui officiis totam ea.
                  Vel, omnis ad quas atque rerum vitae, cum sit animi modi earum
                  minus recusandae esse officiis odit? /n asodfjasodifj
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="lastReleasesSection"></section>
      <section className="lastReleasesSection"></section>
    </>
  );
}
