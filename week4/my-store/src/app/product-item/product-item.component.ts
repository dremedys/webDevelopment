import {Component, Input, OnInit} from '@angular/core';
import  {Item} from '../app.component';
import {DOCUMENT} from "@angular/common";
import  {Inject} from "@angular/core";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() item: Item;
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
}
