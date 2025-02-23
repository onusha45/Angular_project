import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  imports: [FormsModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  email : string = ""
  password: string =""
  password_text : string ="Password must be of 8 digits "
constructor(){

}
submitAlert(message :string){
  alert(message)
}

}
