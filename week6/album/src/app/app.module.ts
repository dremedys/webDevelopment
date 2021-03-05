import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import {HttpClientModule} from "@angular/common/http";
import { AlbumPhotosComponent } from './album-photos/album-photos.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumPhotosComponent,
    AlbumDetailComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
