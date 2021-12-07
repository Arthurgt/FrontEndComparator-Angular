import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { HttpGamesService } from 'src/app/services/http-games.service';

@Component({
  selector: 'app-mdload',
  templateUrl: './mdload.component.html',
  styleUrls: ['./mdload.component.scss']
})
export class MdloadComponent implements OnInit {

  games: Observable<Game[]>;

  constructor(private http: HttpGamesService) {}

  ngOnInit() {
    this.games = this.http.getMediumLoad();
  }

}
