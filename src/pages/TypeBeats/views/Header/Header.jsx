import { React, useState } from "react";
import {useTranslation} from "react-i18next"

const Header = ({}) => {
  const [ t, i18n ] = useTranslation('typesBeats');

  return (
    <div className="typeBeatsHeaderContent">

    </div>
  );
};

export default Header;
