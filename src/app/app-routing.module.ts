import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubDirectoryComponent } from '../app/components/club-directory/club-directory.component'
import { AddClubComponent } from './components/add-club/add-club.component';

const routes: Routes = [
  { path: 'club-directory', component: ClubDirectoryComponent },
  { path: 'add-club', component: AddClubComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
