import { MasterUserWithToken } from './../blue-service/master/object/MasterUserWithToken';
import { LoggerPrefix } from './log/logger-prefix';
import { Body, Controller, Get, HttpStatus, Logger, Post, Res } from "@nestjs/common";
import { BaseUrl } from 'src/app/blue-controller/url/base.url';
import { Response } from 'express';
import { Public } from 'src/app/blue-controller/jwt/jwt-public';
import { UserMasterService } from '../blue-service/master/user-master.service';
import { UserUrl } from './url/user.url';
import { MasterUser } from '../blue-service/master/object/MasterUser';


@Controller(BaseUrl.BASE + UserUrl.BASE)
export class UserController {
    private readonly logger = new Logger(UserController.name);

    constructor(
        private userMasterService: UserMasterService
    ) {}

    @Public()
    @Post(UserUrl.EXISTS)
    public async exists(@Body() body: any, @Res() res: Response) {
        const { uid } = body;

        const user = await this.userMasterService.exists(uid);
        this.sendUserResponse(res, user);
    }

    @Public()
    @Post(UserUrl.AUTHENTICATE)
    public async authenticate(@Body() body: any, @Res() res: Response) {
        const { uid, pswd } = body;

        const user = await this.userMasterService.authenticate(uid, pswd);
        this.sendUserResponse(res, user);
    }

    @Public()
    @Post(UserUrl.VERIFY)
    public async verify(@Body() body: any, @Res() res: Response) {
        const { tk } = body;

        const user = await this.userMasterService.verify(tk);
        this.sendUserResponse(res, user);
    }

    private sendUserResponse(res: Response, user: MasterUser | MasterUserWithToken): void {
        if (user) {
            res.status(HttpStatus.OK).send(user);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerPrefix.RESPONSE_SENT + user.id + ' - ' + user.username);
    }
}