import { FC } from "react";
import { IProject } from "../types";
import { ProjectCardProps } from "./ProjectCard";

interface IProjectsListProps {
  projects: IProject[];
  onClick: (id: number) => void;
}

//TODO: Добавить компонент ProjectsList
// важные подкрасить красным, неважные зелёным

export const ProjectsList: FC<IProjectsListProps> = ({ projects, onClick }) => {
  return (
    <div>
      {projects.map((project) => (
        <ProjectCardProps project={project} onClick={onClick} id={project.id} />
      ))}
    </div>
  );
};
