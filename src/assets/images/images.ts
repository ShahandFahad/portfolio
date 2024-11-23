import project from "./project.jpg";
import mis from "./mis.PNG";
import bs from "./bs.PNG";
import solarscape from "./solarscape.PNG";
import ibm from "./ibm.png";
import metaf from "./metaf.png";
import metab from "./metab.png";
import gitautomation from "./gitautomation.png";

type ImageTypes = {
  project: string;
  mis: string;
  bs: string;
  solarscape: string;
  ibm: string;
  metaf: string;
  metab: string;
  gitautomation: string;
  [key: string]: string;
};

// Export Images
export const images: ImageTypes = {
  project,
  mis,
  bs,
  solarscape,
  ibm,
  metaf,
  metab,
  gitautomation,
};
