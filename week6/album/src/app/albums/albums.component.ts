import { Component, OnInit } from '@angular/core';
import {Album, AlbumsService} from "../albums.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent {

  constructor(public albumsService: AlbumsService) { }

  addAlbum(titleString:string, user_id: string){
    this.albumsService.albums.push({title:titleString,id:this.albumsService.albums.length,userId:Number(user_id)})
  }
  removeAlbum(album:Album){
    this.albumsService.albums.splice(this.albumsService.albums.indexOf(album),1)
  }
}
