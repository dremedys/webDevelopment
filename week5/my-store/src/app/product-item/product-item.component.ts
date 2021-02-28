import {Component, Input, OnInit} from '@angular/core';
import  {Item} from "../../items";
import {DOCUMENT} from "@angular/common";
import  {Inject} from "@angular/core";
import  {categories} from "../../items";
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() item: Item;
  @Output() newItemEvent = new EventEmitter<Item>();
  @Output() newLikeEvent = new EventEmitter<Item>();
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {

  }
  toAmazon():void{
    document.location.href = this.item.link
  }
  toTelegram() :void{
    document.location.href = "https://t.me/share?url=" + this.item.link + ";text=Buy%20this%20guy%20please";
  }
  toWhatsapp():void{
    document.location.href = "https://web.whatsapp.com/share?url=" + this.item.link + ";text=Buy%20this%20guy%20please";
  }
  removeItem(value: Item):void {
    this.newItemEvent.emit(value);
  }
  onLike(value: Item):void{
    // this.item.likes++;
    this.newLikeEvent.emit(value);
    console.log('item clicked ',value)
  }
}
