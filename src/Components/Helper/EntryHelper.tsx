import React from "react";
import BoolSelector from "./BoolSelector";
import { faFileWord, faQuestion, faClock } from "@fortawesome/free-solid-svg-icons";
import { Constants } from "../../DataTypes/Constants";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConfigEntry } from "../../DataTypes/ConfigEntries";
import { v4 as uuid } from "uuid";

function getDate() {
  return moment().format("YYYY-MM-DDTHH:mm:ss");
}

interface EntryContentResult {
  valueTag: JSX.Element;
  icon: JSX.Element;
}

interface ConfigTypeSelectorProps {
  onSelect: (value: string) => void;
  type: string;
}

export function ConfigTypeSelector(props: ConfigTypeSelectorProps) {
  const types = ["", Constants.CONFIG_TYPES.BOOL, Constants.CONFIG_TYPES.DATETIME, Constants.CONFIG_TYPES.STRING];
  const options = types.map((file) => <option key={uuid()}>{file}</option>);
  return (
    <select id="configType" onChange={(event) => props.onSelect(event.target.value)}>
      {options}
    </select>
  );
}

export function getContentDependingOnType(entry: ConfigEntry, typeHidden: boolean, setValue: (value: string) => void): EntryContentResult {
  const { type, value } = entry;
  let valueTag;
  let icon;
  if (type === Constants.CONFIG_TYPES.BOOL && !typeHidden) {
    valueTag = <BoolSelector value={value} setValue={setValue}></BoolSelector>;
    icon = <FontAwesomeIcon icon={faQuestion} />;
  } else if (type === Constants.CONFIG_TYPES.DATETIME && !typeHidden) {
    valueTag = <input type="datetime-local" onChange={(e) => setValue(e.target.value)} value={value ? value : getDate()}></input>;
    icon = <FontAwesomeIcon icon={faClock} />;
  } else {
    valueTag = <input placeholder="Please fill value" onChange={(e) => setValue(e.target.value)} value={value ? value : ""}></input>;
    icon = <FontAwesomeIcon icon={faFileWord} />;
  }
  return { valueTag, icon };
}
