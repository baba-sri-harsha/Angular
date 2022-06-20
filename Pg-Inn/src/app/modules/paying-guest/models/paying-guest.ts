import { Address } from './address';
import { Booking } from './booking';
import { Rooms } from './rooms';

export interface PayingGuest {
  payingGuestId: number;
  name: string;
  pgGender: string;
  category: string;
  rating: number;
  address: Address;
  rooms: Rooms[];
  bookings: Booking[];
}
