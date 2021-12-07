import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { HttpGamesService } from 'src/app/services/http-games.service';

@Component({
  selector: 'app-changingdata',
  templateUrl: './changingdata.component.html',
  styleUrls: ['./changingdata.component.scss']
})
export class ChangingdataComponent implements OnInit {

  categories = [
    "strategy",
    "platform",
    "racing",
    "sport",
    "fps",
    "rpg",
    "adventure",
    "logic"
  ];

  games: Observable<Game[]>;
  activeCategory = "strategy"; 

  constructor(private http: HttpGamesService) {}

  ngOnInit() {
    this.games = this.http.getLargeLoad();
  }

  changeActiveCategory(activeCategory: string) {
    this.activeCategory = activeCategory;
  }

}
