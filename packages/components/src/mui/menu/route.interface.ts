export interface RoutesApp {
  id: number;
  isActive: number;
  name: string;
  fatherID: any;
  level: number;
  url: string;
  icon: string;
  createdAt: string;
  updatedAt: string;
  open: boolean;
  children: RoutesApp[];
}
