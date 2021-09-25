import { TaskService } from './../blue-service/database/task.service';
import { TaskUrl } from './url/task.url';
import { Body, Controller, Get, HttpStatus, Logger, Post, Req, Res } from "@nestjs/common";
import { BaseUrl } from "src/app/blue-controller/url/base.url";
import { Response } from 'express';
import { LoggerPrefix } from 'src/app/blue-controller/log/logger-prefix';
import { TaskMasterService } from '../blue-service/master/task-master.service';
import { MasterUser } from '../blue-service/master/object/MasterUser';
import { LoggedUser } from './jwt/jwt-user';
import { MasterTask } from '../blue-service/master/object/MasterTask';
import { Task } from '../blue-database/entity/task.entity';


@Controller(BaseUrl.BASE + TaskUrl.BASE)
export class TaskController {
    private readonly logger = new Logger(TaskController.name);

    constructor(
        private taskMasterService: TaskMasterService,
        private taskService: TaskService
    ) {}

    @Get(TaskUrl.FETCH)
    public async fetch(@LoggedUser() user: MasterUser, @Res() res: Response) {
        const tasks = await this.taskMasterService.fetch(user.id);
        this.sendTaskArrayResponse(res, tasks, true);
    }

    @Post(TaskUrl.GETBY)
    public async getBy(@LoggedUser() user: MasterUser, @Body() body: any, @Res() res: Response) {
        const { ids } = body;

        const tasks = await this.taskMasterService.getBy(user.id, ids);
        this.sendTaskArrayResponse(res, tasks, true);
    }

    @Post(TaskUrl.ADD)
    public async add(@LoggedUser() user: MasterUser, @Body() body: any, @Res() res: Response) {
        const { record } = body;

        const task = await this.taskService.addTask(user.id, record);
        this.sendTaskResponse(res, task);
    }

    @Post(TaskUrl.CHANGE_COLOR)
    public async changeColor(@LoggedUser() user: MasterUser, @Body() body: any, @Res() res: Response) {
        const { id, color } = body;

        const task = await this.taskService.changeColor(user.id, id, color);
        this.sendTaskResponse(res, task);
    }

    @Post(TaskUrl.CHANGE_PRIORITY)
    public async changePriority(@LoggedUser() user: MasterUser, @Body() body: any, @Res() res: Response) {
        const { id, priority } = body;

        const task = await this.taskService.changePriority(user.id, id, priority);
        this.sendTaskResponse(res, task);
    }

    private sendTaskResponse(res: Response, task: MasterTask | Task, payload?: boolean): void {
        if (task) {
            res.status(HttpStatus.OK).send(payload ? task : null);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerPrefix.RESPONSE_SENT + res);
    }

    private sendTaskArrayResponse(res: Response, tasks: MasterTask[], payload?: boolean): void {
        if (tasks) {
            res.status(HttpStatus.OK).send(payload ? tasks : null);
        } else {
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).send();
        }
        this.logger.log(LoggerPrefix.RESPONSE_SENT + res);
    }
}