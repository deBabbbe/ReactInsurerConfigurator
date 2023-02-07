import React, { useEffect, useState } from "react";
import "./App.scss";
import Configurator from "./Components/Configurator";
import { FileConfigEntry } from "./DataTypes/ConfigEntries";

export default function App() {
  const [isInitialized, setIsInitialized] = useState(false);
  const [reloadSettings, setReloadSettings] = useState("");
  const [loadedConfigs, setLoadedConfigs] = useState([] as FileConfigEntry[]);

  useEffect(() => {
    setIsInitialized(false);
    const configs = JSON.parse(JSON.stringify(require("./loadedConfigs.json"))) as FileConfigEntry[];
    setLoadedConfigs(configs);
    if (configs) setIsInitialized(true);
  }, [reloadSettings]);

  if (isInitialized) {
    return <Configurator setLoadedConfigs={setLoadedConfigs} loadedConfigs={loadedConfigs} setReloadSettings={setReloadSettings}></Configurator>;
  }
  return <></>;
}
