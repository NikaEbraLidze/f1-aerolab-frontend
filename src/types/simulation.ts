export interface SimParams {
  speed: number;
  wingAngle: number;
  weight: number;
  dragCoefficient: number;
}

export interface ChartPoint {
  speed: number;
  downforce: number;
  drag: number;
}

export interface SimResult {
  downforce: number;
  drag: number;
  lift: number;
  aeroEfficiency: number;
  grip: number;
  weightTransfer: number;
  chartData: ChartPoint[];
}

export interface Preset {
  id: string;
  name: string;
  speed: number;
  wingAngle: number;
  weight: number;
  dragCoefficient: number;
  createdAt: string;
  updatedAt: string;
}
