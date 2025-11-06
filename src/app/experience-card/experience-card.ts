import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../tag/tag';
import { Experience } from '../Models/experience';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './experience-card.html',
  styleUrls: ['./experience-card.css'],
})
export class ExperienceCard {
  @Input() experienceInfo!: Experience;
  expanded = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}
