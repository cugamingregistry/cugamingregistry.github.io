import { Component, OnInit, NgZone } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import { Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-club',
  templateUrl: './add-club.component.html',
  styleUrls: ['./add-club.component.css']
})
export class AddClubComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private snackBar: MatSnackBar, private zone: NgZone) { }

  ngOnInit(): void {
  }

  createClub() {
    this.firestore.collection("clubs").doc(this.cardForm.get('name').value).set({
      name: this.cardForm.get('name').value,
      description: this.cardForm.get('description').value,
      logo: this.cardForm.get('logo').value,
      type: this.cardForm.get('type').value,
      discord: this.cardForm.get('discord').value,
      website: this.cardForm.get('website').value,
      slack: this.cardForm.get('slack').value,
      twitter: this.cardForm.get('twitter').value
    }).then(function() {
      
    });
}

  submitCard(){
    this.createClub()
  }

  cardForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    logo: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    discord: new FormControl(''),
    website: new FormControl(''),
    slack: new FormControl(''),
    twitter: new FormControl(''),
  });

}
