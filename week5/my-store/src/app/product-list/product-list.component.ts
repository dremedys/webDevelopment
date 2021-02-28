import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {categories,Category,Item} from "../../items";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() category:Category;
  @Output() newListEvent = new EventEmitter<Item>();
  @Output() newListLikeEvent = new EventEmitter<Item>();
  constructor() { }
  ngOnInit(): void {
  }
  removeItem(item:Item):void{
    // this.category.items.slice(this.category.items.indexOf(item))
    // categories[categories.indexOf(this.category)].items.slice(this.category.items.indexOf(item),1)
    // console.log(this.category.items.indexOf(item))
    // console.log(categories[categories.indexOf(this.category)].items)
    this.newListEvent.emit(item);

  }
  likeItem(item:Item):void{
    this.newListLikeEvent.emit(item);
    console.log('list clicked ',item)
  }



}
