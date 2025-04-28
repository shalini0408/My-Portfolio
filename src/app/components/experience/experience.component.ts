import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

interface ExperienceItem {
  name: string;
  src: string;
  index?: number;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

   experienceItems: ExperienceItem[] = [
    {name: "Java", src: "./assets/technologies/java.png"},
    {name: "Python", src: "./assets/technologies/python.png"},
    {name: "Javascript", src: "./assets/technologies/js.png"},
    {name: "Typescript", src: "./assets/technologies/ts.png"},
    {name: "Spring Boot", src: "./assets/technologies/spring-boot.png"},
    {name: "Angular", src: "./assets/technologies/angular.png"},
    {name: "React", src: "./assets/technologies/react.png"},
    {name: "HTML", src: "./assets/technologies/html.png"},
    {name: "CSS", src: "./assets/technologies/css.png"},
    {name: "Bootstrap", src: "./assets/technologies/bootstrap.png"},
    {name: "Jira", src: "./assets/technologies/jira.png"},
    {name: "Swagger", src: "./assets/technologies/swagger.png"},
    {name: "MySQL", src: "./assets/technologies/mysql.png"},
    {name: "PostgreSQL", src: "./assets/technologies/postgresql.png"},
    {name: "Kubernetes", src: "./assets/technologies/kubernetes.png"},
    {name: "Docker", src: "./assets/technologies/docker.png"},
    {name: "GCP", src: "./assets/technologies/gcp.png"},
    {name: "GIT", src: "./assets/technologies/git.png"},
  ];

  get getExperience(): ExperienceItem[] {
    return this.experienceItems;
  }
}
