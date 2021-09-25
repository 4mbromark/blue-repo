import { Injectable } from "@nestjs/common";
import { Task } from "src/app/blue-database/entity/task.entity";
import { TaskService } from "../database/task.service";
import { MasterTask } from "./object/MasterTask";

@Injectable()
export class TaskMasterService {

    constructor(
        private taskService: TaskService
    ) {}

    public async fetch(idUser: number): Promise<MasterTask[]> {
        const projects = await this.taskService.getTasksByIdUser(idUser);
        return this.buildMasterTaskList(projects);
    }

    public async getBy(idUser: number, projectIds: number[]): Promise<MasterTask[]> {
        const projects = await this.taskService.getTasksWithFilters(idUser, projectIds);
        return this.buildMasterTaskList(projects);
    }

    private buildMasterTask(task: Task): MasterTask {
        const masterTask = new MasterTask(task);
        return masterTask
    }

    private buildMasterTaskList(projects: Task[]): MasterTask[] {
        const masterTasks = [];
        for (const project of projects) {
            const masterTask = this.buildMasterTask(project);
            masterTasks.push(masterTask);
        }
        return masterTasks;
    }
}