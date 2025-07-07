import { Component, EventEmitter, Input, model, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-vertical-nav-panel', 
  imports: [CommonModule, RouterLink, MatSidenavModule, MatListModule, RouterOutlet, MatIconModule],
  templateUrl: './vertical-nav-panel.html',
  styleUrl: './vertical-nav-panel.scss'
})
export class VerticalNavPanel {
  @Input() isSideNavOpen: boolean = false;
  @Output() sideNavToggle = new EventEmitter<boolean>();
}
