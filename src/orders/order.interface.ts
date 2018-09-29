export interface Order {
  id?: number;
  user: string;
  phone: string;
  barcode: string;
  cost: number;
  isFinished: boolean;
}
