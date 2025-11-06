import { Component, Input, HostBinding  } from '@angular/core';

@Component({
  selector: 'app-tag',
  standalone: true,
  templateUrl: './tag.html',
  styleUrls: ['./tag.css'],
})
export class TagComponent {
  @Input() label!: string;
  @Input() size: 'small' | 'large' = 'small';
  @Input() color: 'primary' | 'secondary' = 'primary';

  @HostBinding('class')
  get hostClasses(): string {
    return `tag ${this.size} ${this.color}`;
  }
}
