export interface CurrentlyBuilding {
  title: string;
  description: string;
  href?: string;
  tag?: string;
  status?: string;
}

export interface CurrentlyData {
  updatedAt: string;
  statusNote?: string;
  building?: CurrentlyBuilding;
  learning?: string[];
  exploring?: string[];
  interestedIn?: string[];
}
