import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileId: string | undefined;
  character: any

  constructor(
    private activateRoute: ActivatedRoute, 
    private http: HttpClient
    ) {}

  ngOnInit() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id !== null) {
      this.profileId = id;
    }

    console.log(this.profileId)
    this.http.get<any>('https://rickandmortyapi.com/api/character/' + this.profileId)
    .subscribe(res => {
      console.log(res);
      this.character = res;
    });
  }
}
