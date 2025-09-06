export interface Order {
  id?: number;
  productId: number;
  productName: string;
  quantity: number;
  totalPrice: number;
  orderDate: string; // format ISO 8601
  customerName: string;
}
