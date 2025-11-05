import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './section.html',
  styleUrl: './section.css'
})

export class SectionComponent {
  @Input() title!: string;
  @Input() text?: string;
  @Input() imageSrc?: string; 
}
