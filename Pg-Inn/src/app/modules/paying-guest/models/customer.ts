import { Booking } from './booking';
export interface Customer {
  customerId: number;
  customerName: string;
  mobileNumber: string;
  idNumber: string;
  bookings: Booking[];
}
