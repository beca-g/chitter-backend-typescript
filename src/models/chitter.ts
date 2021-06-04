import { Peep } from "./peep";
import { User } from "./user";

export class Chitter {
  peeps: Peep[];
  users: User[];

  constructor() {
    this.peeps = [];
    this.users = [];
  }
  
  getAllPeeps(): Peep[] {
    return this.peeps;
  }

  getAllUsers(): User[] {
    return this.users;
  }

  createPeep(body: string): number {
    return this.peeps.push(new Peep(body));
  }

  createUser(username: string, email: string, password: string): any {
    if(this.validateUsername(username) == true){
      return "Username unavailable";
    }
    return this.users.push(new User(username, email, password));
  }

  validateUsername(username: string): boolean {
    return this.users.some(function(user){
      console.log(user.username, username)
      return user.username == username;
    });
  }
}
