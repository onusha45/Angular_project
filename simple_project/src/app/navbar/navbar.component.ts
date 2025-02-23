import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


dropdown : string[]= ['Dropdown 1st element','Dropdown 2nd element','Dropdown 3rd element','Dropdown 4th element','Dropdown 5th element']
}
