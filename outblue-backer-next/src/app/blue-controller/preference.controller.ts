import { PreferenceService } from './../blue-service/database/preference.service';
import { Preference } from './../blue-database/entity/preference.entity';
import { MasterPreference } from './../blue-service/master/object/MasterPreference';
import { PreferenceUrl } from './url/preference.url';
import { MasterUser } from './../blue-service/master/object/MasterUser';
import { BaseUrl } from './url/base.url';
import { Body, Controller, Get, HttpStatus, Logger, Post, Res } from "@nestjs/common";
import { Response } from 'express';
import { LoggerPrefix } from 'src/app/blue-controller/log/logger-prefix';
import { LoggedUser } from './jwt/jwt-user';
import { PreferenceMasterService } from '../blue-service/master/preference-master.service';


@Controller(BaseUrl.BASE + PreferenceUrl.BASE)
export class PreferenceController {
    private readonly logger = new Logger(PreferenceController.name);

    constructor(
        private preferenceMasterService: PreferenceMasterService,
        private preferenceService: PreferenceService
    ) {}

    @Get(PreferenceUrl.GET)
    public async get(@LoggedUser() user: MasterUser, @Res() res: Response) {
        const preference = await this.preferenceMasterService.get(user.id);
        this.sendPreferenceResponse(res, preference, true);
    }

    @Post(PreferenceUrl.UPDATE)
    public async update(@LoggedUser() user: MasterUser, @Body() body: any, @Res() res: Response) {
        const { preferences } = body;

        const preference = await this.preferenceService.addOrUpdatePreference(user.id, JSON.stringify(preferences));
        this.sendPreferenceResponse(res, preference);
    }

    private sendPreferenceResponse(res: Response, preference: MasterPreference | Preference, payload?: boolean): void {
        if (preference) {
            res.status(HttpStatus.OK).send(payload ? preference : null);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerPrefix.RESPONSE_SENT + res);
    }
}