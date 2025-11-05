import { Component, Input, OnInit, OnDestroy, NgZone } from '@angular/core';
import { TagComponent } from '../tag/tag';
import { Project } from '../Models/project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [TagComponent],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css'],
})
export class ProjectCard implements OnInit, OnDestroy {
  @Input() project!: Project;

  expanded = false;
  currentImageIndex = 0;
  displayedImages: string[] = [];
  private intervalId?: ReturnType<typeof setInterval>;

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    this.displayedImages =
      this.project.imageUrls && this.project.imageUrls.length > 0
        ? [...this.project.imageUrls]
        : ['/noise.jpg'];

    console.log(`[${this.project.title}] Initialized images:`, this.displayedImages);

    if (this.displayedImages.length > 1) {
      const intervalTime = 4000;

      this.zone.runOutsideAngular(() => {
        this.intervalId = setInterval(() => {
          this.zone.run(() => {
            this.currentImageIndex =
              (this.currentImageIndex + 1) % this.displayedImages.length;

            console.log(
              `[${this.project.title}] Showing image ${this.currentImageIndex + 1}/${
                this.displayedImages.length
              }:`,
              this.displayedImages[this.currentImageIndex]
            );
          });
        }, intervalTime);
      });
    }
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      console.log(`[${this.project.title}] Image cycle stopped.`);
    }
  }

  toggleExpand(): void {
    this.expanded = !this.expanded;
  }

  handleImageError(index: number): void {
    console.warn(`[${this.project.title}] Image failed to load:`, this.displayedImages[index]);
    this.displayedImages[index] = '/noise.jpg';
  }
}
