import { ProjectService } from './../blue-service/database/project.service';
import { MasterUser } from './../blue-service/master/object/MasterUser';
import { BaseUrl } from './url/base.url';
import { ProjectUrl } from './url/project.url';
import { Body, Controller, Get, HttpStatus, Logger, Post, Req, Res } from "@nestjs/common";
import { ProjectMasterService } from "../blue-service/master/project-master.service";
import { Response } from 'express';
import { LoggerPrefix } from 'src/app/blue-controller/log/logger-prefix';
import { LoggedUser } from './jwt/jwt-user';
import { MasterProject } from '../blue-service/master/object/MasterProject';
import { Project } from '../blue-database/entity/project.entity';


@Controller(BaseUrl.BASE + ProjectUrl.BASE)
export class ProjectController {
    private readonly logger = new Logger(ProjectController.name);

    constructor(
        private projectMasterService: ProjectMasterService,
        private projectService: ProjectService
    ) {}

    @Get(ProjectUrl.FETCH)
    public async fetch(@LoggedUser() user: MasterUser, @Res() res: Response) {
        const projects = await this.projectMasterService.fetch(user.id);
        this.sendProjectArrayResponse(res, projects, true);
    }

    @Post(ProjectUrl.GETBY)
    public async getBy(@LoggedUser() user: MasterUser, @Body() body: any, @Res() res: Response) {
        const { ids } = body;

        const projects = await this.projectMasterService.getBy(user.id, ids);
        this.sendProjectArrayResponse(res, projects, true);
    }

    @Post(ProjectUrl.ADD)
    public async add(@LoggedUser() user: MasterUser, @Body() body: any, @Res() res: Response) {
        const { record } = body;

        const project = await this.projectService.addProject(user.id, record);
        this.sendProjectResponse(res, project);
    }

    @Post(ProjectUrl.CHANGE_COLOR)
    public async changeColor(@LoggedUser() user: MasterUser, @Body() body: any, @Res() res: Response) {
        const { id, color } = body;

        const project = await this.projectService.changeColor(user.id, id, color);
        this.sendProjectResponse(res, project);
    }

    @Post(ProjectUrl.CHANGE_PRIORITY)
    public async changePriority(@LoggedUser() user: MasterUser, @Body() body: any, @Res() res: Response) {
        const { id, priority } = body;

        const project = await this.projectService.changePriority(user.id, id, priority);
        this.sendProjectResponse(res, project);
    }

    private sendProjectResponse(res: Response, project: MasterProject | Project, payload?: boolean): void {
        if (project) {
            res.status(HttpStatus.OK).send(payload ? project : null);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerPrefix.RESPONSE_SENT + res);
    }

    private sendProjectArrayResponse(res: Response, projects: MasterProject[], payload?: boolean): void {
        if (projects) {
            res.status(HttpStatus.OK).send(payload ? projects : null);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerPrefix.RESPONSE_SENT + res);
    }
}