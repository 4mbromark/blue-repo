import { User } from "src/app/blue-database/entity/user.entity";
import { MasterUser } from "./MasterUser";

export class MasterUserWithToken extends MasterUser {
    token: string;
    
    constructor(
        user: User,
        tk: string
    ) {
        super(user);
        this.token = tk;
    }
}