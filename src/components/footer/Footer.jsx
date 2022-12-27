import React from "react";
import FollowMe from "../FollowMe/FollowMe";
import FooterBox from "./footerBox/FooterBox";

const Footer = ({}) => {
  const footerJson =  {
    "footerEsJson":
      {
        "Tienda":[
          {
            "title" : "ver mis beats",
            "type" : "link",
            "link" : ""
          },
          {
            "title" : "compra mis beats en BeatStars",
            "type" : "external-link",
            "link" : ""
          },
          {
            "title" : "compra mis beats in BeatStars",
            "type" : "link",
            "link" : ""
          }
        ],
        "Servicios":[
          {
            "title" : "Beat Personalizado",
            "type" : "link",
            "link" : ""
          },
          {
            "title" : "Mezcla y masterización",
            "type" : "link",
            "link" : ""
          },
          {
            "title" : "Type Beats",
            "type" : "link",
            "link" : ""
          }
        ],
        // "Servicios":[
        //   "Beat Personalizado",
        //   "Mezcla y masterización",
        //   "Type Beats",
        // ],
        // "Escucha mi musica":[
        //   "Producciones y colaboraciones",
        //   "Youtube",
        //   "SoundCloud",
        //   "Type Beats"
        // ],
        // "Contacto":[
        //   "Contacto",
        //   "lowstskymusic@gmail.com",
        //   "Instagram"
        // ],
      }
  }

  return (
    <>
      <FollowMe className="followMeContainer"></FollowMe>
      <div className="footerContainer">
        {/* {(footerJson)
          ? links.map((link) => {
              return <a href={link}>{link}</a>;
            })
          : null} */}
        <FooterBox title={"hola"} links={footerJson.footerEsJson.Tienda}></FooterBox>
        <FooterBox title={"hola"} links={footerJson.footerEsJson.Servicios}></FooterBox>
        <FooterBox title={"hola"} links={footerJson.footerEsJson.Tienda}></FooterBox>
        <FooterBox title={"hola"} links={footerJson.footerEsJson.Tienda}></FooterBox>
      </div>
    </>
  );
}

export default Footer