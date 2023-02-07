import React from "react";

interface BoolSelectorProps {
  value: string;
  setValue: (value: string) => void;
}

export default function BoolSelector(props: BoolSelectorProps) {
  return (
    <select value={props.value} onChange={(e) => props.setValue(e.target.value)}>
      <option> -- select an option -- </option>
      <option>true</option>
      <option>false</option>
    </select>
  );
}
