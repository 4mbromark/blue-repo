import { Preference } from './../../../blue-database/entity/preference.entity';
import { Project } from "src/app/blue-database/entity/project.entity";
import { Task } from "src/app/blue-database/entity/task.entity";
import { User } from "src/app/blue-database/entity/user.entity";

export class Master {
    id: number;

    insertDate: Date;
    updateDate: Date;

    constructor(
        object: User | Project | Task | Preference
    ) {
        this.id = object.id;
        this.insertDate = object.insertDate;
        this.updateDate = object.updateDate;
    }
}