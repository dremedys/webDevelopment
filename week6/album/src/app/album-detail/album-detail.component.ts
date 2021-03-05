import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {AlbumsService,Album} from "../albums.service";

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album = {id:1,userId:0,title:''};
  constructor(
    public route: ActivatedRoute,
    public albumsService:AlbumsService,
    public location: Location
  ) { }

  ngOnInit(): void {
    this.getAlbum();
  }
  getAlbum(): void{
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.album = this.albumsService.albums.find(album => album.id === id)
  }
  goBack(): void {
    this.location.back();
  }

}
