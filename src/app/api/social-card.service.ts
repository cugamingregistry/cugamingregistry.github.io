import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {SocialCard} from 'src/app/models/social-card'

@Injectable({
  providedIn: 'root'
})
export class SocialCardService {

  constructor(private http: HttpClient) { }

  getCards() {
    return this.http.get<SocialCard[]>("http://localhost:3000/clubs");
  }
  
}
