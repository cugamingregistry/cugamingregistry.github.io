import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MaterialModule} from './material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ClubDirectoryComponent } from './components/club-directory/club-directory.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialCardComponent } from './components/social-card/social-card.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomDialogComponent } from './components/custom-dialog/custom-dialog.component';
import { AddClubComponent } from './components/add-club/add-club.component';


@NgModule({
  declarations: [
    AppComponent,
    ClubDirectoryComponent,
    HeaderComponent,
    SocialCardComponent,
    CustomDialogComponent,
    AddClubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HttpClientModule
  ],
  providers: [],
  entryComponents: [CustomDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
