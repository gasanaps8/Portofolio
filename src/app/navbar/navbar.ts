import { Component, OnInit, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  activeLink: string = 'about';
  sections: string[] = ['about', 'experience', 'projects', 'skills', 'contact'];
  offsetvalue: number = 40;

  menuOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const hash = window.location.hash.replace('#', '');
      this.activeLink = hash || 'about';
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  setActive(event: Event, link: string) {
    event.preventDefault();
    this.activeLink = link;

    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(link);
      const navbar = document.querySelector('.navbar') as HTMLElement;
      const navbarHeight = navbar ? navbar.offsetHeight : 0;

      const offset = navbarHeight + this.offsetvalue;
      console.log('Navbar height + extra offset:', offset);

      if (element) {
        const elementPosition = element.offsetTop - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });

        history.replaceState(null, '', `#${link}`);
      }
    }
  }

  onScroll() {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const offset = navbarHeight + this.offsetvalue;

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
