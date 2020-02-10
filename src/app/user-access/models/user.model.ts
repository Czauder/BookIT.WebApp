export class User {
  customerId: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;

  public constructor(customerId: string, email: string, role: string) {
    this.customerId = customerId;
    this.email = email;
    this.role = role;
  }
}
