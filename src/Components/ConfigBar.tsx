import React from "react";
import { ReactComponent as WebConfigIcon } from "../icons/Web.svg";
import { ReactComponent as WhatsAppIcon } from "../icons/WhatsApp.svg";
import { ReactComponent as EmailIcon } from "../icons/Email.svg";
import { ReactComponent as SmoopeIcon } from "../icons/Smoope.svg";
import { ReactComponent as SkypeIcon } from "../icons/Skype.svg";
import { ReactComponent as SmartMessengerIcon } from "../icons/SmartMessenger.svg";
import { v4 as uuid } from "uuid";

const getIcon = (name: string): any => {
  if (name.contains("web")) return WebConfigIcon;
  else if (name.contains("Email")) return EmailIcon;
  else if (name.contains("Smoope")) return SmoopeIcon;
  else if (name.contains("Skype")) return SkypeIcon;
  else if (name.contains("SmartMessenger")) return SmartMessengerIcon;
  else return WhatsAppIcon;
};

function getIconForName(name: string, configFileChanged: (value: string) => void) {
  const Icon = getIcon(name);
  return (
    <span title={name} key={uuid()}>
      <Icon className="configBarIcon" width="40px" height="40px" onClick={() => configFileChanged(name)} />
    </span>
  );
}

interface ConfigBarProps {
  configFiles: string[];
  configFileChanged: (value: string) => void;
}

export function ConfigBar(props: ConfigBarProps) {
  return (
    <div className="ConfigBar">
      <div>
        {props.configFiles.map((config) => {
          return getIconForName(config, props.configFileChanged);
        })}
      </div>
      <div className="ConfigBarFiller"></div>
    </div>
  );
}
