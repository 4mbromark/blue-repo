import { ConflictException, Injectable } from "@nestjs/common";
import { ProjectDao } from "src/app/blue-database/dao/project.dao";
import { Project } from "src/app/blue-database/entity/project.entity";

@Injectable()
export class ProjectService {

    constructor(
        private projectDao: ProjectDao
    ) {}

    public async getProjectById(id: number): Promise<Project> {
        return await this.projectDao.getProjectById(id);
    }

    public async getProjectByIdUserAndId(idUser: number, id: number): Promise<Project> {
        return await this.projectDao.getProjectByIdUserAndId(idUser, id);
    }

    public async getProjectsByIds(ids: number[]): Promise<Project[]> {
        return await this.projectDao.getProjectsByIds(ids);
    }

    public async getProjectsByIdUser(idUser: number): Promise<Project[]> {
        return await this.projectDao.getProjectsByIdUser(idUser);
    }

    public async getProjectsWithFilters(idUser: number, ids: number[]): Promise<Project[]> {
        return await this.projectDao.getProjectsWithFilters(idUser, ids);
    }

    public async addProject(idUser: number, project: Project): Promise<Project> {
        const check = await this.projectDao.getProjectsByIdUserAndName(idUser, project.name);
        if (check) {
            throw new ConflictException();
        }
        return await this.projectDao.addProject(idUser, project);
    }

    public async changeColor(idUser: number, id: number, color: string): Promise<Project> {
        return await this.projectDao.changeColor(idUser, id, color);
    }

    public async changePriority(idUser: number, id: number, priority: number): Promise<Project> {
        return await this.projectDao.changePriority(idUser, id, priority);
    }
}