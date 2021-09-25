import { Injectable } from "@nestjs/common";
import { UserDao } from "src/app/blue-database/dao/user.dao";
import { User } from "src/app/blue-database/entity/user.entity";

@Injectable()
export class UserService {

    constructor(
        private userDao: UserDao
    ) {}
    
    public async getUserById(id: number): Promise<User> {
        return await this.userDao.getUserById(id);
    }

    public async getUserByUid(uid: string): Promise<User> {
        return await this.userDao.getUserByUid(uid);
    }
}