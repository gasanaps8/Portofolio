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
import { LandingSectionComponent } from './landing-section/landing-section';
import { EducationCard } from "./education-card/education-card";
import { Education } from './Models/education';
 
@Component({
  selector: 'app-root',
  imports: [CommonModule, LandingSectionComponent, RouterOutlet, NavbarComponent, SectionComponent, ExperienceCard, TagComponent, FooterComponent, ProjectCard, EducationCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  educationList: Education[] = [
    {
      title: 'Bachelor in Computer Engineering – Applications Development',
      school: 'Instituto Superior de Engenharia de Coimbra',
      period: '2022 - 2025',
      description:
        'Completed a Computer Engineering degree with specialization in Applications Development, focusing on software engineering, web and mobile development, distributed systems, databases, operating systems, artificial intelligence, and scalable application design. Developed practical experience through academic and collaborative projects involving full-stack development, object-oriented programming, human-computer interaction, and software project management.',
      classes: [
        'Advanced Programming',
        'Base de Dados',
        'Calculus I',
        'Calculus II',
        'Computer Architecture and Technology',
        'Data Structures',
        'Digital Systems',
        'Distributed Programming',
        'Electronics',
        'Ethics and Deontology',
        'Fundamentals of Computer Graphics',
        'Human Computer Interaction',
        'Introduction to Artificial Intelligence',
        'Introduction to Data Networks',
        'Introduction to Programming',
        'Knowledge And Reasoning',
        'Linear Algebra',
        'Management',
        'Mobile Architectures',
        'Modeling and Design',
        'Object Oriented Programming',
        'Operating Systems II',
        'Operations Research',
        'Operative Systems',
        'Programming',
        'Project or Traineeship',
        'Script Languages',
        'Software Project Management',
        'Statistical Methods',
        'WEB Programming',
        'WEB Technologies'
      ]
    }
  ];

  experiences: Experience[] = [
    new Experience(
      'IT Intern',
      'Celbi, Altri Group',
      'Feb 2026 – Feb 2027',
      'Developed Power BI dashboards and reports using data integrated from Microsoft Fabric, OneLake, and SharePoint. Built an IPAM solution using .NET and explored SAP BTP and SAP Build Apps for enterprise application development. Also developed a “Gestão por Objetivos” management application with goal creation, associated task management, and performance evaluation features.',
      ['Power BI', 'Microsoft Fabric', 'OneLake', 'Power Apps', 'SAP Build Apps', 'SAP BTP', '.NET', 'SharePoint'],
      'Praia da Leirosa, Coimbra, Portugal'
    ),
    new Experience(
      'Web Developer Intern',
      'OneSource',
      'Feb 2025 – Jul 2025',
      'Developed and maintained web applications using Laravel and Livewire, integrating front-end and back-end components with a strong focus on usability and accessibility. Integrated some external components as accessebility widget and and chatbots. Collaborated with a multidisciplinary team to ensure functional and scalable solutions.',
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
      'Weather App',
      'A modern weather application built with Angular.',
      'This project is a responsive weather application developed using Angular. It allows users to search for real-time weather data by city, displaying detailed information such as temperature, humidity, wind speed, and weather conditions. The app integrates with a weather API to fetch live data and features reusable components, a clean UI, and a responsive design optimized for both desktop and mobile devices.',
      ['weatherapp1.png', 'weatherapp2.png', 'weatherapp3.png', 'weatherapp4.png', 'weatherapp5.png'],
      ['Angular', 'TypeScript', 'HTML', 'CSS', 'API'],
      'https://weather-app-eight-peach-94.vercel.app/'
    ),
    new Project(
      'CCR WebSite',
      'A modern website for CCR São Caetano built with React.',
      'This project is a fully responsive website developed for the Centro Cultural e Recreativo de São Caetano. It was built using React, React Router, and Vite, featuring a clean layout, dynamic news pages, custom components, and reusable UI sections like the navbar, footer, and image zoom. The website emphasizes performance, accessibility ensuring a consistent experience across all devices.',
      ['siteCCR1.png', 'siteCCR2.png', 'siteCCR3.png'],
      ['React', 'HTML', 'CSS', 'Vite'],
      'https://ccrsaocaetano.pages.dev'
    ),
    new Project(
      'Expenses Tracker',
      'A personal project built to explore Firebase and real-time data handling.',
      'This expenses tracker allows users to manage their spending with an intuitive UI, Firebase authentication, Firestore database storage, and visual analytics powered by Chart.js. Built with React and Vite, it includes responsive layouts, dynamic charts, and smooth user interactions designed to make tracking expenses simple and clear.',
      ['expenseTracker1.png', 'expenseTracker2.png', 'expenseTracker3.png'],
      ['React', 'Vite', 'CSS', 'Firebase', 'Chart.js']
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
    'Attention to Detail',
    'React',
    'Firebase',
    'Chart.js',
    'Vite',
    'Microsoft Fabric',
    'OneLake',
    'Power Apps',
    'SAP Build Apps',
    'SAP BTP',
    '.NET',
    'SharePoint'
  ];
  
  extraCurriculars: string[] = [
    'Comissão de festas em honra de São Caetano | 2025-2026',
    'Voluntariado Expofacic | 2023-2025',
    'Equipa da Direção do CCR | 2023-Presente',
    'Grupo de jovens de S.Caetano | 2021-Presente',
    'Grupo Coral Caetanense | 2017-Presente',
    'Paróquia de S.Caetano | 2017-Presente'
  ];
}
