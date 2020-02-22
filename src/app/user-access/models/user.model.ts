export class User {
  public customerId: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public password: string;
  public role: string;

  public constructor(customerId: string, email: string, role: string) {
    this.customerId = customerId;
    this.email = email;
    this.role = role;
  }
}
