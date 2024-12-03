import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'project-knowledge-repository';
  isAdmin: boolean = true;
  constructor(private router: Router) {}
  isScrolled = false;
  actions: MenuItem[] | undefined;

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
    this.onWindowScroll();
    this.actions = [
      {
        items: [
          {
            label: 'Διαχείριση Χρηστών',
            command: (): void => {
              this.router.navigateByUrl('users-management');
            },
            styleClass: 'action-link',
          },
          {
            label: 'Διαχείριση ΓΠΘ',
            command: (): void => {
              this.router.navigateByUrl('general-outlines-management');
            },
            styleClass: 'action-link',
          },
          {
            label: 'Αποσύνδεση',
            command: (): void => {},
            styleClass: 'action-link',
          },
        ],
      },
    ];
  }
}
