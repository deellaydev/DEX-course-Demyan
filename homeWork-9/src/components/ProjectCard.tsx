import { FC } from "react";
import { IProject } from "../types";

interface IProjectCardProps {
  project: IProject;
  onClick: (id: number) => void;
  id: number;
}

//TODO: сделать компонент ProjectCardProps

export const ProjectCardProps: FC<IProjectCardProps> = ({
  project,
  onClick,
  id
}) => {
  return project.important ? (
    <div onClick={() => onClick(project.id)} style={{ backgroundColor: "red" }}>
      {project.text}
    </div>
  ) : (
    <div
      onClick={() => onClick(project.id)}
      style={{ backgroundColor: "green" }}
    >
      {project.text}
    </div>
  );
};
