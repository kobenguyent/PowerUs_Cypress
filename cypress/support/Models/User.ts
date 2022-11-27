import { faker } from '@faker-js/faker';
import { PhoneNumber } from "phone-number-generator";

export class User {
    fname: string;
    lname: string;
    email: string;
    password: string;
    phoneNo: string;

    constructor(emptyInfo = false) {
        if (emptyInfo === true) {
            this.fname = '';
            this.lname = '';
            this.email = ''
            this.password = '';
            this.phoneNo = '';
        } else {
            this.fname = faker.name.firstName();
            this.lname = faker.name.lastName();
            this.email = this.fname + this.lname + Date.now() + '@test.de'
            this.password = faker.random.numeric(10);
            this.phoneNo = PhoneNumber.phoneNumberGenerator('DE');
        }

    }
}
