import {
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-knowledge-repository';

  constructor() {}
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = document.documentElement.scrollTop;
    if (offset > 60) {
      this.isScrolled = true; // Add class to make the side menu full height
    } else {
      this.isScrolled = false; // Remove class
    }
  }

  ngOnInit(): void {
    this.onWindowScroll(); // Check on init if the page is already scrolled
  }

  
  
}
