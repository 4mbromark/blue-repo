import { Task } from 'src/app/blue-database/entity/task.entity';
import { Master } from './Master';

export class MasterTask extends Master {
    idUser: number;
    status: number;
    priority: number;
    percentage: number;
    name: string;
    description: string;
    taskOf: number;
    color: string;
    colorRow: string;

    constructor(
        task: Task
    ) {
        super(task);
        this.idUser = task.idUser;
        this.status = task.status;
        this.priority = task.priority;
        this.percentage = task.percentage;
        this.name = task.name;
        this.description = task.description;
        this.taskOf = task.taskOf;
        this.color = task.color;
        this.colorRow = task.colorRow;
    }
}