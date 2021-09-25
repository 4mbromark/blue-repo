import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Project } from "../entity/project.entity";

@Injectable()
export class ProjectDao {

    constructor(
        @InjectRepository(Project) private projectsRepository: Repository<Project>,
    ) {}

    public async getProjectById(id: number): Promise<Project> {
        const project = await this.projectsRepository.findOne(id);
        return project;
    }

    public async getProjectByIdUserAndId(idUser: number, id: number): Promise<Project> {
        const project = await this.projectsRepository.findOne(id, {
            where: {
                idUser: idUser
            }
        });
        return project;
    }

    public async getProjectsByIds(ids: number[]): Promise<Project[]> {
        const projects = await this.projectsRepository.findByIds(ids);
        return projects;
    }

    public async getProjectsByIdUser(idUser: number): Promise<Project[]> {
        const projects = await this.projectsRepository.find({
            where: {
                idUser: idUser
            }
        });
        return projects;
    }

    public async getProjectsByIdUserAndName(idUser: number, name: string): Promise<Project> {
        const project = await this.projectsRepository.findOne({
            where: {
                idUser: idUser,
                name: name
            }
        });
        return project;
    }

    public async getProjectsWithFilters(idUser: number, ids: number[]): Promise<Project[]> {
        const projects = await this.projectsRepository.findByIds(ids, {
            where: {
                idUser: idUser
            }
        });
        return projects;
    }

    public async addProject(idUser: number, project: Project): Promise<Project> {
        project.idUser = idUser;
        return await this.projectsRepository.save(project);
    }

    public async changeColor(idUser: number, id: number, color: string): Promise<Project> {
        const project = await this.getProjectByIdUserAndId(idUser, id);
        project.color = color;
        return await this.projectsRepository.save(project);
    }

    public async changePriority(idUser: number, id: number, priority: number): Promise<Project> {
        const project = await this.getProjectByIdUserAndId(idUser, id);
        project.priority = priority;
        return await this.projectsRepository.save(project);
    }
}