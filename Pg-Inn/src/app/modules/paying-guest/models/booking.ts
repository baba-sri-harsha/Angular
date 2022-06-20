import { Customer } from './customer';
import { PayingGuest } from './paying-guest';
export interface Booking {
  bookingId: number;
  bookingTime: string;
  fromDate: string;
  toDate: string;
  status: string;
  roomShare: string;
  payingGuest?: PayingGuest;
  cutomer?: Customer;
}
