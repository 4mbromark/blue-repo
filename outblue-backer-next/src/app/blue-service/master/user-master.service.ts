import { Injectable, Logger, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/app/blue-database/entity/user.entity';
import { AuthService } from 'src/app/blue-service/auth.service';
import { CryptService } from '../crypt.service';
import { UserService } from '../database/user.service';
import { MasterUser } from './object/MasterUser';
import { MasterUserWithToken } from './object/MasterUserWithToken';

@Injectable()
export class UserMasterService {
    private readonly logger = new Logger(UserMasterService.name);

    constructor(
        private userService: UserService,

        private authService: AuthService,
        private cryptService: CryptService,
    ) {}

    public async exists(uid: string): Promise<MasterUser> {
        const user = await this.userService.getUserByUid(uid);

        if (user) {
            return new MasterUser(user);
        }
        throw new NotFoundException();
    }

    public async authenticate(uid: string, pswd: string): Promise<MasterUserWithToken> {
        const user = await this.userService.getUserByUid(uid);

        if (user) {
            const hash = await this.cryptService.check(pswd, user.pswd);

            if (hash) {
                this.logger.log('Authentication success for: ' + uid);
                return this.buildMasterUserWithToken(user);
            }

            this.logger.log('Authentication failed for: ' + uid);
            throw new UnauthorizedException();
        }

        this.logger.log('Authentication failed, user not found: ' + uid);
        throw new NotFoundException();
    }

    public async verify(tk: string): Promise<MasterUser> {
        const masterUser = await this.authService.verifyToken(tk);
        if (masterUser) {
            const user = await this.userService.getUserById(masterUser.id);
            return new MasterUser(user);
        }
        throw new UnauthorizedException();
    }

    private async buildMasterUserWithToken(user: User): Promise<MasterUserWithToken> {
        const masterUser = new MasterUser(user);
        const token = await this.authService.getToken(masterUser);
        return new MasterUserWithToken(user, token);
    }
}
