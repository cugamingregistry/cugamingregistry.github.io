import { Component, OnInit } from '@angular/core';
import {SocialCardComponent} from 'src/app/components/social-card/social-card.component'
import {SocialCardService} from 'src/app/api/social-card.service'
import { SocialCard } from 'src/app/models/social-card';

@Component({
  selector: 'app-club-directory',
  templateUrl: './club-directory.component.html',
  styleUrls: ['./club-directory.component.css']
})
export class ClubDirectoryComponent implements OnInit {

  panelOpenState = false;

  constructor(private social: SocialCardService) { }

  ngOnInit(): void {
    this.getData()
  }

  public allCards: SocialCard[] = [];

  public getData() {
    this.social.getCards().subscribe((data: SocialCard[]) => {
      this.allCards = data
     },error => {
       console.log("Error while validating token");
   
     },
     () => {
       console.log(this.allCards)
     })
   }

}
