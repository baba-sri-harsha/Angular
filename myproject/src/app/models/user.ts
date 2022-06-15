import { Address } from './address';

export class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public gender: string,
    public email: string,
    public password: string,
    public address: Address
  ) {}
}
