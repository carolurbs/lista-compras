import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-main',
  imports: [FormsModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
item : string = ''
addItem(){
  console.log("Item recebido: ", this.item)
  this.item="";
}
}