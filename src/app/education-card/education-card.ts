import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from '../tag/tag';
import { Education } from '../Models/education';

@Component({
  selector: 'app-education-card',
  standalone: true,
  imports: [CommonModule, TagComponent],
  templateUrl: './education-card.html',
  styleUrl: './education-card.css',
})
export class EducationCard {
  @Input() educationInfo!: Education;
  expanded = false;

  toggleExpand() {
    this.expanded = !this.expanded;
  }
}


