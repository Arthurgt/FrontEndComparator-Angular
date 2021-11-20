import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { HttpGamesService } from 'src/app/services/http-games.service';

@Component({
  selector: 'app-lgload',
  templateUrl: './lgload.component.html',
  styleUrls: ['./lgload.component.scss']
})
export class LgloadComponent implements OnInit {

  games: Observable<Game[]>;

  constructor(private http: HttpGamesService) {}

  ngOnInit() {
    this.games = this.http.getLargeLoad();
  }

}
