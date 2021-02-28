import { Component } from '@angular/core';
import {Category, categories, Item} from "../items";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories: Category[] = categories;
  currentCategory:Category ;
  title = 'My store';
  // item: Item = {likes:11,images:[],name:'jahhaha',link:'sss',rating:1,description:''};
  changeCategory(category:Category):void{
    this.currentCategory = category;

  }
  deleteItem(item:Item):void{
    this.categories[this.categories.indexOf(this.currentCategory)].items.splice(this.currentCategory.items.indexOf(item),1)
  }
  likeeItem(item:Item):void{

   // this.currentCategory.items[this.categories[this.categories.indexOf(this.currentCategory)].items.indexOf(item)].likes++
   //  this.categories[this.categories.indexOf(this.currentCategory)].items[this.currentCategory.items.indexOf(item)].likes += 1;


    this.categories[this.categories.indexOf(this.currentCategory)].items[this.currentCategory.items.indexOf(item)].likes += 1;

    // this.categories[this.categories.indexOf(this.currentCategory)].items[(this.currentCategory.items.indexOf(item))].likes++;
    // this.categories[this.categories.indexOf(this.currentCategory)].items[this.currentCategory.items.indexOf(item)].likes++
  }
}
