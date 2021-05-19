import { Peep } from "./peep"
import { User } from "./user"

export class Chitter {
  peeps: Peep[]
  users: User[]

  constructor() {
    this.peeps = []
    this.users = []
  }
  
  getAllPeeps(): Peep[] {
    return this.peeps
  }

  createPeep(body: string): number {
    return this.peeps.push(new Peep(body))
  }

  createUser(username: string, email: string, password: string): number {
    return this.users.push(new User(username, email, password))
  }
}
