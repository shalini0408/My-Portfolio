import {Component} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {ProjectItemComponent} from "./project-item/project-item.component";

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  src: string;
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    ProjectItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  protected projects: Project[]  = [
    {
      name: 'Automation Tool',
      description: 'Built an automation tool using Ansible and Docker to mass-deploy lab environments, cutting setup effort by 60% and integrating seamlessly with GKE clusters.',
      technologies: ['Ansible', 'Docker', 'Angular', 'TypeScript', 'HTML', 'CSS', 'Bootstrap', ''],
      src: './assets/projects/portfolio.png',
      link: 'https://github.com/shalini0408/Automation-tool/tree/main',
    },
    {
      name: 'Customer Segmentation',
      description: 'Implemented customer segmentation using RFM analysis and k-means clustering on retail data, classifying customers into categories like Newbie, Silver, Gold, and Platinum. This analysis helps businesses understand customer behavior and target marketing more effectively.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Machine Learning (k-means clustering)'],
      src: './assets/projects/bank.png',
      link: 'https://github.com/shalini0408/Customer-Segmentation',
    },
    {
      name: 'Loan-Repayment App',
      description: 'Developed a loan repayment web application with Angular, featuring EMI cycle tracking and pre-closure planning. Built backend microservices using Spring Boot, integrated with Netflix Eureka for service discovery and OAuth for secure authentication.',
      technologies: ['Angular', 'Spring Boot', 'Netflix Eureka', 'OAuth 2.0', 'REST API'],
      src: './assets/projects/poker.png',
      link: 'https://github.com/shalini0408/LoanRepayment-App',
    },
    {
      name: 'Traffic Management Using Locks and Semaphores',
      description: 'Implemented a lock mechanism and resolved kernel synchronization issues on Zeus. Designed a traffic management system using priority queues and locks to manage vehicle movement through intersections.',
      technologies: ['C', 'Kernel Programming'],
      src: './assets/projects/numbers.png',
      link: 'https://github.com/shalini0408/OS161',
    }
  ];
}
