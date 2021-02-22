import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() links : string[]
  currentPhoto = 0
  constructor() { }

  ngOnInit(): void {
  }
  changePhoto():void{
      if(this.currentPhoto === this.links.length-1)
      {this.currentPhoto=0;
      console.log(this.links.length)
      console.log('huh',this.currentPhoto)}
    else{this.currentPhoto++
    console.log('dolboeb')}
  }
  next():void{
    if(this.currentPhoto === this.links.length-1)
    {;
      }
    else{this.currentPhoto++
    }
  }
  prev():void{
    if(this.currentPhoto === 0)
    {
    }
    else{this.currentPhoto--
    }
  }


}
