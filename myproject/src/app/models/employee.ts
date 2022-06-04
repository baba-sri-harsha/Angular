import { CipherCCMTypes } from "crypto";

export class Employee {
    constructor(
        public name:string,
        public city:string,
        public salary:number,
        public bonus:number,
        public dateOfBirth:Date,
        public dateOfJoining:Date
    ){}
}
