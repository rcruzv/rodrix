import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export interface NavModel {
  title: string;
  path: string;
  icon: [p: IconPrefix, n: IconName];
  children?: NavModel[];
}
