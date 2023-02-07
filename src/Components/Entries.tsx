import React from "react";
import Entry from "./Entry";
import { ConfigEntry } from "../DataTypes/ConfigEntries";

interface EntriesProps {
  filteredData: ConfigEntry[];
  setDataOfCurrentConfig: (data: ConfigEntry[]) => void;
  removeEntry: (key: string) => void;
  typeHidden: boolean;
}

export default function Entries(props: EntriesProps) {
  const setType =
    (entry: ConfigEntry): ((type: string) => void) =>
      (type) => {
        entry.type = type;
        const data = props.filteredData.map((configEntry) => {
          if (configEntry === entry) {
            configEntry.type = type;
          }
          return configEntry;
        });
        props.setDataOfCurrentConfig(data);
      };

  const setValue = (entry: ConfigEntry): ((value: string) => void) => {
    return (value) => {
      const data = props.filteredData.map((configEntry) => {
        if (configEntry === entry) {
          configEntry.value = value;
        }
        return configEntry;
      });
      props.setDataOfCurrentConfig(data);
    };
  };

  const setConfig = (entry: ConfigEntry): ((configText: string) => void) => {
    return (configText) => {
      entry.config = configText;
      const data = props.filteredData.map((configEntry) => {
        if (configEntry === entry) {
          configEntry.config = configText;
        }
        return configEntry;
      });
      props.setDataOfCurrentConfig(data);
    };
  };

  return (
    <>
      {props.filteredData.map((entry) => {
        return (
          <Entry
            key={entry.key}
            typeHidden={props.typeHidden}
            entry={entry}
            setType={setType(entry)}
            setValue={setValue(entry)}
            setKey={setConfig(entry)}
            removeEntry={props.removeEntry}
          ></Entry>
        );
      })}
    </>
  );
}
