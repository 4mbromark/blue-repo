import { User } from "src/app/blue-database/entity/user.entity";
import { Master } from "./Master";

export class MasterUser extends Master {
    name: string;
    surname: string;
    username: string;
    email: string; 

    constructor(
        user: User,
    ) {
        super(user);
        this.name = user.name;
        this.surname = user.surname;
        this.username = user.username;
        this.email = user.email;
    }
}