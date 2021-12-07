import React from 'react';
import loadingIcon from "../../assets/icons/loadingIcon.svg";
import { ReactSVG } from 'react-svg';

const Preloader = () => (
  <div className="container">
    <ReactSVG src={loadingIcon}/>
  </div>
);

export default Preloader;