import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from '../../shared/components/main-menu/main-menu.component';
import { SubmenuComponent } from '../../shared/components/submenu/submenu.component';


@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MainMenuComponent, SubmenuComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  selectedMenu = 'booking';

  handleMenuChange(menu: string) {
    this.selectedMenu = menu;
  }
}
