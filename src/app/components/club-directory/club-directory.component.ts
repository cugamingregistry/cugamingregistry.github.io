import { Component, OnInit } from '@angular/core';
import {SocialCardComponent} from 'src/app/components/social-card/social-card.component'
import { SocialCard } from 'src/app/models/social-card';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-club-directory',
  templateUrl: './club-directory.component.html',
  styleUrls: ['./club-directory.component.css']
})
export class ClubDirectoryComponent implements OnInit {

  panelOpenState = false;

  cards: Observable<any[]>;
  constructor(firestore: AngularFirestore) {
    this.cards = firestore.collection('clubs').valueChanges();
   }

  ngOnInit(): void {
  }

}
