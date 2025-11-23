import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements AfterViewInit {
  activeLink: string = '';
  sections: string[] = [' ', 'about', 'experience', 'projects', 'skills', 'extra', 'contact'];
  offsetvalue: number = 40;
  scrolled = false;

  menuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  setActive(event: Event, link: string) {
    event.preventDefault();
    this.activeLink = link;

    // Close burger menu after clicking
    if (this.menuOpen) {
      this.menuOpen = false;
    }

    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(link);
      const navbar = document.querySelector('.navbar') as HTMLElement;
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const offset = navbarHeight + this.offsetvalue;

      if (element) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
        history.replaceState(null, '', `#${link}`);
      }
    }
  }

  onScroll() {
    this.scrolled = window.scrollY > 0;

    const navbar = document.querySelector('.navbar') as HTMLElement;
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const offset = navbarHeight + this.offsetvalue;

    if (window.scrollY < window.innerHeight * 0.7) {
      if (this.activeLink !== '') {
        this.activeLink = '';
        history.replaceState(null, '', ' ');
      }
      return;
    }

    const scrollPosition = window.scrollY + offset + 1;

    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const elementTop = element.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          if (this.activeLink !== section) {
            this.activeLink = section;
            history.replaceState(null, '', `#${section}`);
          }
          break;
        }
      }
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
