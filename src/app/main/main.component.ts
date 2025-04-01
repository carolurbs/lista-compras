import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {Item} from './item'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main',
  imports: [FormsModule, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
item : string = ''
list: Item[]= []
addItem(){
  console.log("Item recebido: ", this.item)
  let itemList = new Item()
  itemList.name= this.item
  itemList.id= this.list.length +1
  this.list.push(itemList)
  this.item="";
}
purchaseItem(itemList: Item){
  itemList.purchased = !itemList.purchased

}
clearList(){
  this.list = []
  this.item = ''
}
}