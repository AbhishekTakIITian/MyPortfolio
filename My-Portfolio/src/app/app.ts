import { Component } from '@angular/core';
import { NavigationEnd, RouterOutlet } from '@angular/router';
import { VerticalNavPanel } from './vertical-nav-panel/vertical-nav-panel';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VerticalNavPanel, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'My-Portfolio';
  protected isSideNavOpen = false;
  toggleSideNav() {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
  onSideNavToggle(isOpen: boolean) {
    this.isSideNavOpen = isOpen;
  } 
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isSideNavOpen = false;
      }
    });
  }
}
