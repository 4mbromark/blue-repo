import { Project } from 'src/app/blue-database/entity/project.entity';
import { Master } from './Master';

export class MasterProject extends Master {
    idUser: number;
    status: number;
    priority: number;
    name: string;
    nameCode: string;
    nameExtended: string;
    nameCustomized: string;
    subprojectOf: number;
    startDate: Date;
    endDate: Date;
    color: string;
    colorRow: string;

    constructor(
        project: Project
    ) {
        super(project);
        this.idUser = project.idUser;
        this.status = project.status;
        this.priority = project.priority;
        this.name = project.name;
        this.nameCode = project.nameCode;
        this.nameExtended = project.nameExtended;
        this.nameCustomized = project.nameCustomized;
        this.subprojectOf = project.subprojectOf;
        this.startDate = project.startDate;
        this.endDate = project.endDate;
        this.color = project.color;
        this.colorRow = project.colorRow;
    }
}