import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './models/game';
import { HttpGamesService } from './services/http-games.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'frontendcomparator';
  game: Observable<Game>;

  constructor(private http: HttpGamesService){}

  ngOnInit() {
    
  }
}
