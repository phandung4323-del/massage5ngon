export interface OrderData {
  id: string;
  customerName: string;
  phoneNumber: string;
  address: string;
  quantity: number;
  selectedColor?: string;
  notes?: string;
  totalAmount: number;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'shipping' | 'delivered';
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  timeAgo: string;
  comment: string;
  colorBought: string;
  verified: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
