import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar';
import { SectionComponent } from './section/section'
import { ExperienceCard } from './experience-card/experience-card';
import { Experience } from './Models/experience';
import { TagComponent } from './tag/tag';
import { FooterComponent } from './footer/footer';
import { ProjectCard } from './project-card/project-card';
import { Project } from './Models/project';
 
@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, NavbarComponent, SectionComponent, ExperienceCard, TagComponent, FooterComponent, ProjectCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  experiences: Experience[] = [
    new Experience(
      'Web Developer Intern',
      'OneSource',
      'Feb 2025 – Jul 2025',
      'Developed and maintained web applications using Laravel and Livewire, integrating front-end and back-end components with a strong focus on usability and accessibility. Collaborated with a multidisciplinary team to ensure functional and scalable solutions.',
      ['PHP', 'Laravel', 'Livewire', 'HTML', 'CSS', 'Git'],
      'Coimbra, Portugal'
    ),
    new Experience(
      'Lifeguard',
      'Adamastor',
      'Jul 2024 – Sep 2024',
      'Ensured the safety of beachgoers through constant surveillance and provided first aid when necessary. Maintained clear communication and teamwork with other lifeguards to handle emergency situations effectively.',
      ['Responsibility', 'Teamwork', 'First Aid', 'Communication'],
      'Praia de Mira, Coimbra, Portugal'
    ),
    new Experience(
      'Restaurant & Bar Staff',
      'Terra & Mar',
      'Jul 2022 – Aug 2022, Jul 2023 – Aug 2023',
      'Delivered friendly and efficient customer service at Expofacic, assisting in food preparation, cleaning, and product restocking. Worked under pressure in high-demand environments while maintaining organization and service quality.',
      ['Customer Service', 'Teamwork', 'Time Management', 'Adaptability'],
      'Expofacic Cantanhede, Portugal'
    )
  ];

  projects: Project[] = [
    new Project(
      'Coming Soon 👁️',
      'A new project is on its way... Stay tuned!',
      'This upcoming project will bring exciting new features and technologies. Keep an eye out for updates 👀',
      ['coming-soon.png'],
      ['Loading...', 'Secrets 🤫']
    ),
    new Project(
      'Angular Portfolio',
      'A personal portfolio built with Angular.',
      'This project is a responsive personal portfolio website developed using Angular. It showcases professional experiences, projects, and technical skills through an elegant and interactive interface. The design emphasizes accessibility, smooth animations, and component reusability, while maintaining a consistent color palette and theme.',
      ['portofolio-1.png', 'portofolio-2.png', 'portofolio-3.png'],
      ['Angular', 'TypeScript', 'HTML', 'CSS']
    )
  ];

  skills: string[] = [
    'HTML',
    'CSS',
    'PHP',
    'Java',
    'C#',
    'C++',
    'JavaScript',
    'SQL',
    'Kotlin',
    'Bootstrap',
    'TypeScript',
    'Angular',
    'Laravel',
    'Livewire',
    'Chatbots',
    'Teamwork',
    'First Aid',
    'Attention to Detail'
  ];
  
  extraCurriculars: string[] = [
    'Comissão de festas em honra de São Caetano | 2025-Presente',
    'Voluntariado Expofacic | 2023-2025',
    'Equipa da Direção do CCR | 2023-Presente',
    'Grupo de jovens de S.Caetano | 2021-Presente',
    'Grupo Coral Caetanense | 2017-Presente',
    'Paróquia de S.Caetano | 2017-Presente'
  ];
}
