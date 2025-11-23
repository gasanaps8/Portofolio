import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-landing-section',
  templateUrl: './landing-section.html',
  styleUrls: ['./landing-section.css']
})
export class LandingSectionComponent {

  sentences: string[] = [
    'Web Developer Júnior',
    'Laravel & Livewire Enthusiast',
    'Passionate About Accessibility',
    'Building Scalable Products'
  ];

  currentText: string = '';
  private sentenceIndex = 0;
  private charIndex = 0;
  private typingSpeed = 50;

  constructor(private zone: NgZone) {
    // Run typing effect outside Angular to avoid reloads
    this.zone.runOutsideAngular(() => {
      this.typeNextCharacter();
    });
  }

  private typeNextCharacter() {
    const sentence = this.sentences[this.sentenceIndex];

    const interval = setInterval(() => {
      if (this.charIndex < sentence.length) {
        // Update inside Angular so the binding updates
        this.zone.run(() => {
          this.currentText += sentence[this.charIndex];
        });
        this.charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          this.sentenceIndex = (this.sentenceIndex + 1) % this.sentences.length;
          this.currentText = '';
          this.charIndex = 0;
          this.typeNextCharacter(); // continue with next sentence
        }, 1000); // pause 1s before next sentence
      }
    }, this.typingSpeed);
  }
}
