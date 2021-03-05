import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {tap} from "rxjs/operators";

export interface Album{
  userId: number;
  id: number;
  title: string;
}
export interface Photo{
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  albums: Album[] = [];
  photos: Photo[] = [];

  constructor(public http: HttpClient) { }

  fetchAlbums(): Observable<Album[]>{
    return this.http.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
      .pipe(tap( albums => this.albums=albums))
  }

  fetchPhotos(id:number): Observable<Photo[]>{
    return this.http.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .pipe(tap( photos => this.photos = photos))
  }

}
