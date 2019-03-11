import { Injectable } from '@angular/core'; 
import { User } from '../login/user.model';

@Injectable()

export class AuthService {
    constructor() { }
    login(user:User) {
        console.log(user)
    }
}
