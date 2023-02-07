import { faBell, faCirclePlay, faGear, faInfoCircle, faQuestionCircle, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import * as LogoSvg from "../icons/Logo.svg";

interface ApplicationBarProps {
  logout: () => void;
  loggedOut: boolean;
}

export function ApplicationBar(props: ApplicationBarProps) {
  return (
    <div className="ApplicationBar">
      <span id="applicationBarDefaultIcon" onClick={props.logout}>
        <FontAwesomeIcon icon={faRightFromBracket} size="lg" title="Abmelden" />
        <span>&nbsp;&nbsp; Abmelden</span>
      </span>
      <LogoSvg.ReactComponent width="60px" height="20px"></LogoSvg.ReactComponent>
      <span id="applicationBarDefaultIcon">
        <FontAwesomeIcon icon={faInfoCircle} size="lg" title="Info / Fehler melden" />
      </span>
      <span id="applicationBarDefaultIcon">
        <FontAwesomeIcon icon={faQuestionCircle} size="lg" title="Hilfe" />
      </span>
      <span id="applicationBarDefaultIcon">
        <FontAwesomeIcon icon={faGear} size="lg" title="Einstellungen" />
      </span>
      <span id="applicationBarDefaultIcon">
        <FontAwesomeIcon icon={faCirclePlay} size="lg" title="Schulungsvideo Arbeitgeber - Auswahl" />
      </span>
      <span id="applicationBarDefaultIcon">
        <FontAwesomeIcon icon={faBell} size="lg" title="Es liegen keine weitere Nachrichten für Sie vor." />
      </span>
    </div>
  );
}
