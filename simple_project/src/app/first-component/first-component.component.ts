import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  email : string = ""
  password: string =""
  password_text : string ="Password must be of 8 digits "
  checkBox: boolean = false;

constructor(){

}
submitAlert(message :string){
  alert(message)
}

displayOnUncheck(){
  this.checkBox = !this.checkBox;
}
}
