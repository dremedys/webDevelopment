import { Component, OnInit } from '@angular/core';
import {Album,Photo, AlbumsService} from "../albums.service";
import {RouterModule} from "@angular/router";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  album: Album = {id:0,userId:0,title:''};
  photos: Photo[] = [];
  constructor(private route: ActivatedRoute,
              public albumsService:AlbumsService,
              private location: Location) { }

  ngOnInit(): void {
    // @ts-ignore
    this.getPhotos();
  }
  getPhotos(){
    // @ts-ignore
    const id = +this.route.snapshot.paramMap.get('id');

    this.albumsService.fetchPhotos(id)
      .subscribe(photos => this.photos = photos);
  }
  goBack(): void {
    this.location.back();
  }
}
