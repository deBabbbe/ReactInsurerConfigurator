export interface ConfigEntry {
  config: string;
  type: string;
  key: string;
  value: string;
}

export interface FileConfigEntry {
  fileName: string;
  configs: ConfigEntry[];
}
