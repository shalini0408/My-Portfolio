import {Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/shalini-maknoor/', '_blank');
  }

  get email(): string {
    return 'mshalini0408@gmail.com';
  }
}
