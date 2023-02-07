import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt, faSave, faPlusSquare, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import UploadConfigFile from "./UploadConfigFile";
import { FileConfigEntry } from "../DataTypes/ConfigEntries";
import { v4 as uuid } from "uuid";
import { Dispatch, SetStateAction } from "react";

interface ActionBarProps {
  save: () => void;
  addEntry: () => void;
  loggedOut: boolean;
  setTypeHidden: (value: boolean) => void;
  typeHidden: boolean;
  setLoadedConfigs: (content: FileConfigEntry[]) => void;
  setReloadSettings: Dispatch<SetStateAction<string>>;
}

export function ActionBar(props: ActionBarProps) {
  const toggleHidden = () => props.setTypeHidden(!props.typeHidden);
  return (
    <div className="ActionBar">
      Configurator
      <span id="refreshButton" onClick={() => props.setReloadSettings(uuid().toString())} hidden={props.loggedOut}>
        <FontAwesomeIcon icon={faRedoAlt} size="lg" title="Neu laden" />
      </span>
      <span id="saveButton" onClick={props.save} hidden={props.loggedOut}>
        <FontAwesomeIcon icon={faSave} size="lg" title="Speichern" />
      </span>
      <UploadConfigFile setLoadedConfigs={props.setLoadedConfigs} loggedOut={props.loggedOut} />
      <span id="addButton" onClick={props.addEntry} hidden={props.loggedOut}>
        <FontAwesomeIcon icon={faPlusSquare} size="lg" title="Hinzufügen" />
      </span>
      <span id="hideButton" onClick={toggleHidden} hidden={props.loggedOut}>
        <FontAwesomeIcon icon={faEyeSlash} size="lg" title="Typ ausblenden" className={props.typeHidden ? "hidden" : ""} />
      </span>
    </div>
  );
}
