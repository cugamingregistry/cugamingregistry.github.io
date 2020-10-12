import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogData} from 'src/app/models/dialog-data'

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  styleUrls: ['./custom-dialog.component.css']
})

export class CustomDialogComponent implements OnInit {


  constructor(public dialogRef: MatDialogRef<CustomDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


  ngOnInit(): void {

  }

}
