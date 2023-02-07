import React from "react";
import * as LogoSvg from "../icons/Logo.svg";
import packageJson from "../../package.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle, faInfoCircle, faPowerOff, faQuestionCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { useWindowWidth } from "@react-hook/window-size";

interface ApplicationBarProps {
  logout: () => void;
  loggedOut: boolean;
}

export function ApplicationBar(props: ApplicationBarProps) {
  const userName = props.loggedOut ? "-" : "Ritter, Claudia";
  return (
    <div className="ApplicationBar">
      <LogoSvg.ReactComponent width="60px" height="20px"></LogoSvg.ReactComponent>
      <span id="userIcon">
        <FontAwesomeIcon icon={faUser} size="lg" />
      </span>
      <p id="userName">{userName}</p>
      <span id="applicationBarDefaultIcon">
        <FontAwesomeIcon icon={faQuestionCircle} size="lg" title="Hilfe" />
      </span>
      <span id="applicationBarDefaultIcon">
        <FontAwesomeIcon icon={faExclamationTriangle} size="lg" title="Warnungen" />
      </span>
      <span id="applicationBarDefaultIcon">
        <FontAwesomeIcon icon={faInfoCircle} size="lg" title="Informationen" />
      </span>
      {useWindowWidth() > 430 ? <span id="applicationBarVersion">{packageJson.version}</span> : <></>}
      <span id="applicationBarDefaultIcon" onClick={props.logout}>
        <FontAwesomeIcon icon={faPowerOff} size="lg" title="Ausloggen" />
      </span>
    </div>
  );
}
