export type Spade = {
  //data admin
  id: string;
  model: string;
  manufacturer: string;
  price: number;
  certification: boolean;
  //data user
  top: boolean;
  name: string;
  reference: string;
  size: [number, number, number];
  length: number;
  width: number;
  height: number;
  widthOpen: number;
  weight: number;
  diameterBreastHeight: number[]; // Trunk diameter at 1.3m / Le diamètre du tronc a 1.3m.
  adjustableTreeBallDiameter: number[]; // Adjustable Tree Ball Diameter / Le diamètre ajustable de la motte de terre.
  upperTreeBallDiameter: number; // Upper Tree Ball Diameter / Le diamètre supérieur de la motte de terre.
  lowerTreeBallDiameter: string; // Lower Tree Ball Diameter / Le diamètre inférieur de la motte de terre.
  treeBallVolume: string; // Tree Ball Volume / Le volume de la motte de terre.
  depthTreeBall: string; // Depth Of Tree Ball / La profondeur de la motte de terre.
  numberOfSpade: number;
  minimalExcavatorWeight: number | string; // Excavators weight, e.g., "5.5 tons and above"
  minimalSkidSteerLoaderPower: number | string; // Skid steer loader power, e.g., "60kw"

  //assets
  thumbnail: string[];
  video: string[];
};
