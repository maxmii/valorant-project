export interface MapCalloutLocation {
  x: number;
  y: number;
}

export interface MapCallout {
  regionName: string;
  superRegionName: string;
  location: MapCalloutLocation;
}

export interface MapDto {
  uuid: string;
  displayName: string;
  narrativeDescription: string | null;
  tacticalDescription: string | null;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  listViewIconTall: string;
  splash: string;
  stylizedBackgroundImage: string;
  premierBackgroundImage: string;
  assetPath: string;
  mapUrl: string;
  xMultiplier: number;
  yMultiplier: number;
  xScalarToAdd: number;
  yScalarToAdd: number;
  callouts: MapCallout[];
}