import { Injectable } from "@nestjs/common";
import { TaskDao } from "src/app/blue-database/dao/task.dao";
import { Task } from "src/app/blue-database/entity/task.entity";

@Injectable()
export class TaskService {

    constructor(
        private taskDao: TaskDao
    ) {}

    public async getTaskById(id: number): Promise<Task> {
        return await this.taskDao.getTaskById(id);
    }

    public async getTaskByIdUserAndId(idUser: number, id: number): Promise<Task> {
        return await this.taskDao.getTaskByIdUserAndId(idUser, id);
    }

    public async getTasksByIds(ids: number[]): Promise<Task[]> {
        return await this.taskDao.getTasksByIds(ids);
    }

    public async getTasksByIdUser(idUser: number): Promise<Task[]> {
        return await this.taskDao.getTasksByIdUser(idUser);
    }

    public async getTasksWithFilters(idUser: number, projectIds: number[]): Promise<Task[]> {
        return await this.taskDao.getTasksWithFilters(idUser, projectIds);
    }

    public async addTask(idUser: number, task: Task): Promise<Task> {
        return await this.taskDao.addTask(idUser, task);
    }

    public async changeColor(idUser: number, id: number, color: string): Promise<Task> {
        return await this.taskDao.changeColor(idUser, id, color);
    }

    public async changePriority(idUser: number, id: number, priority: number): Promise<Task> {
        return await this.taskDao.changePriority(idUser, id, priority);
    }
}