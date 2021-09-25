import { ProjectService } from '../database/project.service';
import { Injectable } from "@nestjs/common";
import { Project } from 'src/app/blue-database/entity/project.entity';
import { MasterProject } from './object/MasterProject';

@Injectable()
export class ProjectMasterService {

    constructor(
        private projectService: ProjectService
    ) {}

    public async fetch(idUser: number): Promise<MasterProject[]> {
        const projects = await this.projectService.getProjectsByIdUser(idUser);
        return this.buildMasterProjectList(projects);
    }

    public async getBy(idUser: number, ids: number[]): Promise<MasterProject[]> {
        const projects = await this.projectService.getProjectsWithFilters(idUser, ids);
        return this.buildMasterProjectList(projects);
    }

    private buildMasterProject(project: Project): MasterProject {
        const masterProject = new MasterProject(project);
        return masterProject
    }

    private buildMasterProjectList(projects: Project[]): MasterProject[] {
        const masterProjects = [];
        for (const project of projects) {
            const masterProject = this.buildMasterProject(project);
            masterProjects.push(masterProject);
        }
        return masterProjects;
    }
}