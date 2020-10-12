import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from 'src/app/components/custom-dialog/custom-dialog.component'

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.css']
})
export class SocialCardComponent implements OnInit {
  @Input() name: string;
  @Input() description: string;
  @Input() image: string;
  @Input() website: string;
  @Input() slack: string;
  @Input() discord: string;
  @Input() twitter: string;
  @Input() twitch: string;
  @Input() clubType: string;
  @Input() logo: string;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }



  openDialog() {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      data: { name: this.name, description: this.description }
    });
  }

}
