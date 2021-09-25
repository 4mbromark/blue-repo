import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { In, Repository } from "typeorm";
import { Task } from "../entity/task.entity";

@Injectable()
export class TaskDao {

    constructor(
        @InjectRepository(Task) private tasksRepository: Repository<Task>,
    ) {}

    public async getTaskById(id: number): Promise<Task> {
        const task = await this.tasksRepository.findOne(id);
        return task;
    }

    public async getTaskByIdUserAndId(idUser: number, id: number): Promise<Task> {
        const task = await this.tasksRepository.findOne(id, {
            where: {
                idUser: idUser
            }
        });
        return task;
    }

    public async getTasksByIds(ids: number[]): Promise<Task[]> {
        const tasks = await this.tasksRepository.findByIds(ids);
        return tasks;
    }

    public async getTasksByIdUser(idUser: number): Promise<Task[]> {
        const tasks = await this.tasksRepository.find({
            where: {
                idUser: idUser
            }
        });
        return tasks;
    }

    public async getTasksWithFilters(idUser: number, projectIds: number[]): Promise<Task[]> {
        const tasks = await this.tasksRepository.find({
            where: {
                idUser: idUser,
                taskOf: In(projectIds)
            }
        });
        return tasks;
    }

    public async addTask(idUser: number, task: Task): Promise<Task> {
        task.idUser = idUser;
        return await this.tasksRepository.save(task);
    }

    public async changeColor(idUser: number, id: number, color: string): Promise<Task> {
        const task = await this.getTaskByIdUserAndId(idUser, id);
        task.color = color;
        return await this.tasksRepository.save(task);
    }

    public async changePriority(idUser: number, id: number, priority: number): Promise<Task> {
        const task = await this.getTaskByIdUserAndId(idUser, id);
        task.priority = priority;
        return await this.tasksRepository.save(task);
    }
}