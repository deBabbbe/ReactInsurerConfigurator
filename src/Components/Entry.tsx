import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";
import { ConfigTypeSelector, getContentDependingOnType } from "./Helper/EntryHelper";
import { ConfigEntry } from "../DataTypes/ConfigEntries";
import { Constants } from "../DataTypes/Constants";

interface EntryProps {
  setType: (type: string) => void;
  setValue: (value: string) => void;
  setKey: (key: string) => void;
  removeEntry: (key: string) => void;
  entry: ConfigEntry;
  typeHidden: boolean;
}

export default function Entry(props: EntryProps) {
  const [selectTypeOpen, setSelectTypeOpen] = useState(false);
  const { valueTag, icon } = getContentDependingOnType(props.entry, props.typeHidden, props.setValue);
  const toggleSelectTypeOpen = () => setSelectTypeOpen(!selectTypeOpen);
  const configTypeChanged = (value: string) => {
    toggleSelectTypeOpen();
    props.setType(value);
  };
  const removeEntry = () => {
    props.removeEntry(props.entry.key);
  };

  const entryKeyTag = (
    <td>
      <input value={props.entry.config} onChange={(e) => props.setKey(e.target.value)} />
    </td>
  );

  const removeEntryTag = (
    <td id="remove-button-table">
      <span id="removeButton" onClick={removeEntry}>
        <FontAwesomeIcon icon={faBan} title="Löschen" />
      </span>
    </td>
  );

  const configTypeTag = (
    <>
      {selectTypeOpen ? (
        <td id="table-type-selector">
          <ConfigTypeSelector type={props.entry.type} onSelect={configTypeChanged} />
        </td>
      ) : (
        <td id="table-type" title={props.entry.type} onClick={toggleSelectTypeOpen}>
          {icon}
        </td>
      )}
    </>
  );

  return (
    <tbody>
      <tr className={props.entry.value === Constants.PLEASE_FILL_VALUE ? "fill_value" : ""}>
        {entryKeyTag}
        {!props.typeHidden ? configTypeTag : <></>}
        <td className="entryTag">{valueTag}</td>
        {removeEntryTag}
      </tr>
    </tbody>
  );
}
