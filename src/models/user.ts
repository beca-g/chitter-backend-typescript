export class User {
  username: string;
  email: string;
  password: string;
  id: number;

  constructor(username: string, email: string, password: string, id: number = Date.now()) {
    this.username = username,
    this.email = email;
    this.password = password;
    this.id = id;
  }

  getUsername(): string {
    return this.username;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }

  getId(): number {
    return this.id;
  }
}