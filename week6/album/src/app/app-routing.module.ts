import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlbumsComponent} from "./albums/albums.component";
import {AlbumDetailComponent} from "./album-detail/album-detail.component";
import {AlbumPhotosComponent} from "./album-photos/album-photos.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {path: 'albums', component: AlbumsComponent},
  { path: 'albums/:id', component: AlbumDetailComponent },
  {path: 'albums/:id/photos',component: AlbumPhotosComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
