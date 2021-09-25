import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";

@Injectable()
export class UserDao {

    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>,
    ) { }

    public async getUserById(id: number): Promise<User> {
        const user = await this.usersRepository.findOne(id);
        return user;
    }

    public async getUserByUid(uid: string): Promise<User> {
        const user = await this.usersRepository.findOne({
            where: [
                { username: uid },
                { email: uid }
            ]
        });
        return user;
    }
}