import {Component} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  constructor(private viewportScroller: ViewportScroller) {}

  scrollTo(section: string) {
    this.viewportScroller.scrollToAnchor(section);
  }

  openResume() {
    window.open("https://drive.google.com/file/d/1Vl2V0lUBd2YT3nVBguI09ALy78BeBl0_/view?usp=sharing");
  }

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/shalini-maknoor/', '_blank');
  }

  goToGithub() {
    window.open('https://github.com/shalini0408', '_blank');
  }
}
